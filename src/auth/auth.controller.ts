import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signupDto.dto';
import { localAuthGuard } from './localAuth.guard';
import RequestWithUser from './requestWithUser.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body()
    signupData: SignupDto,
  ) {
    return this.authService.signup(signupData);
  }

  @HttpCode(200)
  @UseGuards(localAuthGuard)
  @Post('signin')
  async signin(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
}
