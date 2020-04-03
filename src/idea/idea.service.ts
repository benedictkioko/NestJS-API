import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IdeaDto } from './dto/idea.dto';
import { Idea } from './idea.interface';

@Injectable()
export class IdeaService {

    constructor(@InjectModel('Idea') private ideaModel: Model<Idea>){

    }

    async createIdea(ideaDto: IdeaDto): Promise<Idea>{
        const idea = new this.ideaModel(ideaDto);
        return await idea.save();
    }

    async getIdeas(): Promise<Idea[]>{
        return await this.ideaModel.find().exec();
    }

    async getIdea(id): Promise<Idea>{
        return await this.ideaModel.findOne({_id: id});
    }

}