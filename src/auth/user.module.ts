
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register(
    {
      secret: 'secret',
      signOptions:{expiresIn:'1d'}
    }
  )
],
  controllers: [AuthController],
  providers: [AuthService,JwtModule],
})
export class AuthModule {}