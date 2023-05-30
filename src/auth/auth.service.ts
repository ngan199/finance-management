import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from './dto/signupDto.dto';
import * as bcrypt from 'bcrypt';
import { PostgresErrorCode } from 'src/database/postgresErrorCodes.enum';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async signup(signupData: SignupDto) {
    const hashedPw = await bcrypt.hash(signupData.password, 10);

    try {
      const createdUser = await this.userService.create({
        ...signupData,
        password: hashedPw,
      });

      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          'User with that email already exist',
          HttpStatus.BAD_REQUEST,
        );
      }

      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async signin(email: string, plaintextPw: string) {
    try {
      const user = await this.userService.getByEmail(email);

      await this.verifyPw(plaintextPw, user.password);
      user.password = undefined;

      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async verifyPw(plaintextPw: string, hashedPw: string) {
    const isPwMatching = await bcrypt.compare(plaintextPw, hashedPw);

    if (!isPwMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public getCookieWithJwtToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwtService.sign(payload);
    return `Auth=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_EXPIRATION_TIME',
    )}`;
  }

  public getCookieForSignout() {
    return `Auth=; HttpOnly; Path=/; Max-Age=0`;
  }
}
