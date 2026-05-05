import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import {
  CurrentUser,
  CurrentUser as CurrentUserPayload,
} from '../../common/decorators/current-user.decorator';
import { OptionalJwtAuthGuard } from '../../common/guards/optional-jwt-auth.guard';
import { CreateSupportTicketDto } from './dto/create-support-ticket.dto';
import { SupportService } from './support.service';

@Controller('support-tickets')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Post()
  @UseGuards(OptionalJwtAuthGuard)
  create(
    @CurrentUserPayload() user: CurrentUser | undefined,
    @Body() createSupportTicketDto: CreateSupportTicketDto,
  ) {
    return this.supportService.create(user?.userId, createSupportTicketDto);
  }
}
