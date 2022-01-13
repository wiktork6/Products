import {CreateProductDto} from "../dto/create-product.dto";

export class RequestValidator {


    isValid(requestBody: CreateProductDto): boolean{

        if(Object.keys(requestBody).length != 2){
            return false;
        }

        const {name, price} = requestBody;

        if(!price || !name ){
            return false;
        }
        if(isNaN(price)){
            return false;
        }

        if(name.length>100 || name.length<2){
            return false;
        }

        return true;
    }
}

