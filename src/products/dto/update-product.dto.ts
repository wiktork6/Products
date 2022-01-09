import { CreateProductDto } from './create-product.dto';
import {IsString, Length} from "class-validator";

export class UpdateProductDto extends CreateProductDto {
    @IsString()
    @Length(24,24)
    id: string
}
