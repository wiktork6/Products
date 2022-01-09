import {Product} from "../../schemas/product.schema";

export const asProduct = ({id, name, price, updateDate}: Product): Product => ({id, name, price, updateDate});
