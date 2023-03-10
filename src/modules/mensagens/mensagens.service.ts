import { Inject, Injectable } from '@nestjs/common';
import { MENSAGENS_REPOSITORY } from 'src/conf/constants';
import { Mensagens } from 'src/dataBase/models/mensagens/mensagens.models';
import { Users } from 'src/dataBase/models/users/users.models';
import { MensagemCreateDto } from './DTO/mensagem.create.dto';
import { MensagemResponseDto } from './DTO/mensagem.resposta.dto';

@Injectable()
export class MensagensService {
  constructor(
    @Inject(MENSAGENS_REPOSITORY)
    private readonly mensagensRepository: typeof Mensagens,
  ) {}

  async create(
    mensagem: MensagemCreateDto,
    remetente: string,
  ): Promise<Mensagens> {
    return await this.mensagensRepository.create<Mensagens>({
      ...mensagem,
      remetente,
    });
  }

  async findAll(id: number): Promise<Mensagens[]> {
    return await this.mensagensRepository.findAll<Mensagens>({
      where: { destinatario: id },
    });
  }

  async findOne(id): Promise<Mensagens> {
    return await this.mensagensRepository.findOne({
      where: { id },
      include: [{ model: Users, attributes: { exclude: ['password'] } }],
    });
  }

  async update(id: number) {
    const [numberOfAffectedRows, [updatedMensagenst]] =
      await this.mensagensRepository.update(
        { lida: true },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedMensagenst };
  }

  async createResposta(
    mensagem: MensagemResponseDto,
    remetente: string,
    destinatario: number,
  ): Promise<Mensagens> {
    return await this.mensagensRepository.create<Mensagens>({
      ...mensagem,
      remetente,
      destinatario,
    });
  }
}
