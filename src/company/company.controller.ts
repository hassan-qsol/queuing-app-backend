import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiLoggerService } from '../api-logger/api-logger.service';
import { CreateCompanyRequestDto } from './dto/create';
import { JwtAuthGuard } from 'src/auth/guards/guard.jwt-auth';
import { Request } from 'express';
import { TUserAuthorized } from 'src/users/dto/find-authorized-user';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  private readonly logger = new ApiLoggerService(CompanyController.name);

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  find(@Req() req: Request) {
    const user = req['user']['user'] as undefined as TUserAuthorized;
    return this.companyService.find(user);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  create(@Body() payload: CreateCompanyRequestDto, @Req() req: Request) {
    return this.companyService.create(payload, req['user']['user']['id']);
  }
}
