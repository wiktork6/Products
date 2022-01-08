import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {Product} from "../schemas/product.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class ProductsService {

  constructor(@InjectModel("Product") private readonly productModel: Model<Product>) {}


  async findAll() {
    return this.productModel.find().select('-__v');
  }

  async findOne(id: string): Promise<Product> {
    let product;
    try{
      product = await this.productModel.findById(id);
    } catch(error){
      throw new NotFoundException('Could not find product')
    }

    if(!product){
      throw new NotFoundException('Could not find product')
    }
    return this.removeUnnecessaryFields(product)
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

  removeUnnecessaryFields(product: Product): Product{
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      updateDate: product.updateDate
    };
  }
}
