import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import {IsString, Length} from "class-validator";

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    @Length(24,24)
    id: string
}
