import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Mensagens } from 'src/dataBase/models/mensagens/mensagens.models';
import { UsersService } from '../users/users.service';
import { MensagemCreateDto } from './DTO/mensagem.create.dto';
import { MensagemResponseDto } from './DTO/mensagem.resposta.dto';
import { MensagensService } from './mensagens.service';

@Controller('mensagens')
export class MensagensController {
  constructor(
    private readonly mensagensService: MensagensService,
    private readonly userService: UsersService,
  ) {}
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req) {
    // get all posts in the db
    return await this.mensagensService.findAll(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(
    @Body() mensagem: MensagemCreateDto,
    @Request() req,
  ): Promise<Mensagens> {
    // create a new post and return the newly created post
    const user = await this.userService.findOneById(req.user.id);
    await this.mensagensService.create(mensagem, user.public_id);
    return;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  async update(@Param('id') id: number, @Request() req): Promise<Mensagens> {
    // get the number of row affected and the updated post
    const { numberOfAffectedRows, updatedMensagenst } =
      await this.mensagensService.update(id);
    // if the number of row affected is zero,
    // it means the post doesn't exist in our db
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }
    // return the updated post
    return updatedMensagenst;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('resposta')
  async resposta(
    @Body() mensagem: MensagemResponseDto,
    @Request() req,
  ): Promise<Mensagens> {
    // create a new post and return the newly created post
    const remetente = await this.userService.findOneByPublicId(
      mensagem.remetente,
    );
    const user = await this.userService.findOneById(req.user.id);
    await this.mensagensService.createResposta(
      mensagem,
      user.public_id,
      remetente.id,
    );
    return;
  }
}
