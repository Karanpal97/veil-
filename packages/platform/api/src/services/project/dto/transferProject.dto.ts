import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TransferProjectDto {
  @ApiProperty({ description: 'User ID of the new owner' })
  @IsString()
  newOwnerId: string;
}
