import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Product from './entities/Product';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // Loại database
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'nestjs01',
      entities: [Product], // Danh sách các entity sẽ ánh xạ
      synchronize: true, // Tự động tạo bảng từ entity (chỉ dùng trong môi trường development)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
