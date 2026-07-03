import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Product from 'src/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productsRepository.find();
  }

  create(productData: Partial<Product>) {
    const product = this.productsRepository.create(productData);
    product.created_at = new Date();
    product.updated_at = new Date();
    return this.productsRepository.save(product);
  }

  async update(id: number, productData: Partial<Product>) {
    productData.updated_at = new Date();
    await this.productsRepository.update(id, productData);
    return this.productsRepository.findOneBy({ id });
  }

  // findOne(id: string) {
  //   return this.productsRepository.findOne(id);
  // }

  async remove(id: number) {
    const product = await this.productsRepository.findOneBy({ id });
    await this.productsRepository.delete(id);
    return product;
  }
}
