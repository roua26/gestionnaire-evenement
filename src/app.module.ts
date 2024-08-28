import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventModule } from './events/event.module';
import { join } from 'path';
import { AuthModule } from './auth/user.module';
import { User } from './auth/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [

      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: "",
        database: 'event',
        entities: [join(process.cwd(), 'dist/**/*.entity.js'),User],
        synchronize: true,
      }),
      EventModule,
      AuthModule,
      
    ],
  

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
