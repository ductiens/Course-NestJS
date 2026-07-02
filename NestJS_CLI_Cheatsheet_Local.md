# NestJS CLI Cheatsheet (Local CLI)

> Dùng khi **không cài Nest CLI global**, mỗi dự án dùng CLI riêng.

## Tạo dự án

```bash
# Cài Nest CLI vào devDependencies
npm install -D @nestjs/cli

# Tạo project ngay tại thư mục hiện tại
npx @nestjs/cli@latest new .
```

## Chạy dự án

```bash
npm run start      # Chạy ứng dụng
npm run start:dev  # Chạy chế độ watch (tự reload)
npm run build      # Build production
npm run start:prod # Chạy bản production
```

## Kiểm tra CLI

```bash
npx nest --version # Xem phiên bản Nest CLI
npx nest --help    # Xem tất cả lệnh
npx nest g --help  # Xem các lệnh generate
```

## Generate (g = generate)

```bash
npx nest g mo user          # Tạo module
npx nest g co user          # Tạo controller
npx nest g s user           # Tạo service
npx nest g resource user    # Tạo đầy đủ CRUD (module, controller, service, dto, entity)
npx nest g mi logger        # Tạo middleware
npx nest g gu auth          # Tạo guard
npx nest g in logging       # Tạo interceptor
npx nest g pi validation    # Tạo pipe
npx nest g f http           # Tạo exception filter
npx nest g d roles          # Tạo custom decorator
npx nest g ga chat          # Tạo WebSocket gateway
npx nest g r user           # Tạo GraphQL resolver
npx nest g class dto/user   # Tạo class
npx nest g interface user   # Tạo interface
npx nest g enum role        # Tạo enum
npx nest g pr logger        # Tạo provider
```

## Flag thường dùng

```bash
npx nest g s auth --flat
# Không tạo thư mục auth/, chỉ tạo file auth.service.ts

npx nest g s auth --no-spec
# Không tạo file test (*.spec.ts)

npx nest g mo auth --dry-run
# Chỉ xem trước file sẽ được tạo, không tạo thật

npx nest g s auth --project api
# Chỉ dùng trong monorepo, tạo vào project api
```

## Alias

| Đầy đủ | Alias |
|--------|-------|
| generate | g |
| module | mo |
| controller | co |
| service | s |
| middleware | mi |
| guard | gu |
| interceptor | in |
| pipe | pi |
| filter | f |
| decorator | d |
| gateway | ga |
| resolver | r |
| provider | pr |

## Quy trình thường dùng

```bash
npx nest g mo user
npx nest g co user
npx nest g s user

# Hoặc
npx nest g resource user
```
