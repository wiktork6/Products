import {IsNumber, IsString, Length} from "class-validator";

export class CreateProductDto {
    @IsString()
    @Length(2, 100)
    name: string;

    @IsNumber()
    price: number;
}
