import { IsNumber, IsString, Length } from 'class-validator';

export default class CreateProductDto {
  @IsString({ message: 'Tên phải là một chuỗi ký tự' })
  @Length(1, 255, { message: 'Tên bắt buộc phải nhập' })
  name?: string;

  @IsNumber({}, { message: 'Giá phải là một số' })
  price?: number;

  @IsString({ message: 'Mô tả phải là một chuỗi ký tự' })
  description?: string;
}
