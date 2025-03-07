import { Module } from "@nestjs/common";
import { HastagController } from "./hastag.controller";
import { HastagService } from "./hastag.service";


@Module({
    controllers: [HastagController],
    providers:[HastagService]
})
export class HastagModule{}