import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { HastagService } from "./hastag.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Hastag } from "src/models/hastag.model";
import { HastagDto } from "src/dtos/hastag.dto";

@Controller('hastags')
export class HastagController{
  constructor(private readonly hastagService: HastagService){

  }

    @Get()
    findAll():ResponseData<Hastag[]> {
      try {
        return new ResponseData<Hastag[]>(this.hastagService.findAll(),HttpStatus.SUCCESS,HttpMessage.SUCCESS);
      } catch (error) {
        return new ResponseData<Hastag[]>(null,HttpStatus.ERROR,HttpMessage.ERROR);
        
      } 
    }
    @Get(':id')
    getDetail(@Param('id') id:number ):ResponseData<Hastag> {
      try {
        return new ResponseData<Hastag>(this.hastagService.getDetail(id),HttpStatus.SUCCESS,HttpMessage.SUCCESS);
      } catch (error) {
        return new ResponseData<Hastag>(null,HttpStatus.ERROR,HttpMessage.ERROR);
        
      } 
    }
  
    @Post()
    create(@Body(new ValidationPipe()) hastagDto: HastagDto): ResponseData<Hastag> {
      try {
        return new ResponseData<Hastag>(this.hastagService.create(hastagDto),HttpStatus.SUCCESS,HttpMessage.SUCCESS);
      } catch (error) {
        return new ResponseData<Hastag>(null,HttpStatus.ERROR,HttpMessage.ERROR);
        
      } 
    }
  
    @Put(':id')
    update(@Body() hastagDto: HastagDto, @Param('id') id:number): ResponseData<Hastag> {
      try {
        return new ResponseData<Hastag>(this.hastagService.update(hastagDto,id),HttpStatus.SUCCESS,HttpMessage.SUCCESS);
      } catch (error) {
        return new ResponseData<Hastag>(null,HttpStatus.ERROR,HttpMessage.ERROR);
        
      } 
    }
  
    @Delete(':id')
    delete(@Param('id') id:number):ResponseData<boolean> {
      try {
        return new ResponseData<boolean>(this.hastagService.delete(id),HttpStatus.SUCCESS,HttpMessage.SUCCESS);
      } catch (error) {
        return new ResponseData<boolean>(null,HttpStatus.ERROR,HttpMessage.ERROR);
        
      } 
    }

}