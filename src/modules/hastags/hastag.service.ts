import { Injectable } from "@nestjs/common";
import { HastagDto } from "src/dtos/hastag.dto";
import { Hastag } from "src/models/hastag.model";

@Injectable()
export class HastagService{
  private hastags: Hastag[]=[
    {id:1, hashtag:"Hastag 1",description: "Des Hastag1"},
    {id:2, hashtag:"Hastag 2",description: "Des Hastag2"},
    {id:3, hashtag:"Hastag 3",description: "Des Hastag3"},
  ]

  findAll():Hastag[] {
    return this.hastags;
    
  }

  getDetail(id:number ):Hastag {
    return this.hastags.find(item=>item.id ===Number(id));
  }

  create(hastagDto: HastagDto): Hastag {
    const htag: Hastag = {
      id: Math.random(),
      ...hastagDto
    };
    return htag;
  }

  update(hastagDto: HastagDto, id:number): Hastag {
    const index = this.hastags.findIndex(item => item.id ===Number(id));
    this.hastags[index].hashtag = hastagDto.hashtag;
    this.hastags[index].description = hastagDto.description;
    return this.hastags[index];
  }

  delete(id:number):boolean {
    const index = this.hastags.findIndex(item=>item.id ===Number(id));
    if(index !== -1){
      this.hastags.slice(index,1);
      return true;
    }
    return false;
  }
    
}