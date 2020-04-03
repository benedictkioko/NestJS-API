import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { IdeaDto } from './dto/idea.dto';
import { IdeaService } from './idea.service';

@Controller('ideas')
export class IdeasController {

    constructor(private ideasService: IdeaService){

    }

    @Post()
    async createIdea(@Body() idea: IdeaDto){
        return await this.ideasService.createIdea(idea);
    }

    @Get()
    async getIdeas(){
        return await this.ideasService.getIdeas();
    }

    @Get(':id')
    async getIdea(@Param('id') id: String){
        return await this.ideasService.getIdea(id);
    }

}