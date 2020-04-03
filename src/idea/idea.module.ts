import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeasController } from './idea.controller';
import { IdeaService } from './idea.service';
import { IdeaSchema } from './idea.schema'

@Module({
  imports: [MongooseModule.forFeature([{name: 'Idea', schema: IdeaSchema }])],
  controllers: [IdeasController],
  providers: [IdeaService],
})
export class IdeasModule {}
