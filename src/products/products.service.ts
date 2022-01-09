import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {Product} from "../schemas/product.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {asProduct} from "./utils/products.utils";

@Injectable()
export class ProductsService {

  private COULD_NOT_FIND_PRODUCT = "Could not find product";

  constructor(@InjectModel("Product") private readonly productModel: Model<Product>) {}


  async findAll() {
    return this.productModel.find().select('-__v');
  }

  async findOne(id: string): Promise<Product> {
    let product;
    try{
      product = await this.productModel.findById(id);
    } catch(error){
      throw new InternalServerErrorException(this.COULD_NOT_FIND_PRODUCT)
    }

    if(!product){
      throw new NotFoundException(this.COULD_NOT_FIND_PRODUCT)
    }
    return asProduct(product)
  }

  async update(updateProductDto: UpdateProductDto) {
    const id = updateProductDto.id;
    return this.productModel.updateOne( {_id: id}, {$set: {...updateProductDto, updateDate: new Date()}});

  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = {
      ...createProductDto,
      updateDate: new Date()
    }
    return new this.productModel(newProduct).save();
  }

  async remove(id: string) {
    return this.productModel.remove( {_id:id} )
  }

}
