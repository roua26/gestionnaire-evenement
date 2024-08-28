import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';  // Import Response and Request from express

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('signup')
  async register(
    @Body('nom') nom: string,
    @Body('prenom') prenom: string,
    @Body('dateNes') dateNes: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.authService.create({
      message: 'User registered successfully',
      nom,
      prenom,
      dateNes,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return user;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() response: Response  
  ) {
    const user = await this.authService.findOne({ email });

    if (!user) {
      throw new BadRequestException('Utilisateur introuvable');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Mot de passe incorrect');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });
    response.cookie('jwt', jwt, { httpOnly: true });  

    return response.status(200).json({ message: 'Login successful' }); 
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      if (!cookie) {
        throw new UnauthorizedException();
      }

      const data = await this.jwtService.verifyAsync(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.authService.findOne({ id: data['id'] });
      if (!user) {
        throw new UnauthorizedException();
      }

      const { password, ...result } = user;
      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('logout')
  async logout(@Res() response: Response) {
    response.clearCookie('jwt');
    return ({ message: 'Logged out successfully' });
  }
}
