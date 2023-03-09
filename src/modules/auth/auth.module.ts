import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JsonToObjectMapperService } from 'src/conf/core/pipes/mapper/jsonToObjectMapper.service';
import { JsonToObjectMapperModule } from 'src/conf/core/pipes/mapper/jsonToObjectMapper.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
    JsonToObjectMapperModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, PassportModule, JwtModule, JsonToObjectMapperModule],
})
export class AuthModule {}
