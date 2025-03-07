import { IsNotEmpty, MinLength } from "class-validator";

export class HastagDto {

    @MinLength(5,{message:"Nhập tối thiểu 5 ký tự"})
    hashtag: string;
    @IsNotEmpty({message:"Không được bỏ trống"})
    description?: string;
  }