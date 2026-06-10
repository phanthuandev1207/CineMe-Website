# Develop Branch

## Mục đích

Đây là nhánh phát triển chính của dự án.

Tất cả các chức năng mới phải được phát triển trên các nhánh feature riêng và sau đó merge vào develop để kiểm thử trước khi đưa lên main.

## Quy trình làm việc

main
└── develop
├── feature/auth
├── feature/movie
├── feature/booking
└── feature/admin

## Quy tắc

* Không commit trực tiếp lên main.
* Mỗi thành viên làm việc trên nhánh feature của mình.
* Sau khi hoàn thành chức năng, tạo Pull Request vào develop.
* Kiểm tra lỗi trước khi merge.
* Chỉ merge develop vào main khi hệ thống ổn định.

## Chức năng cần tích hợp

### Authentication

* Login
* Register
* Logout
* Phân quyền User/Admin

### Movie Management

* CRUD phim
* Upload poster
* Search & Filter

### Booking

* Chọn suất chiếu
* Chọn ghế
* Đặt vé
* Lịch sử đặt vé

### Admin Dashboard

* Quản lý người dùng
* Quản lý vé
* Thống kê

## Công nghệ sử dụng

* HTML5
* CSS3
* JavaScript
* PHP
* MySQL

## Database

Bảng dự kiến:

* users
* movies
* showtimes
* bookings

## Trạng thái dự án

[ ] Authentication

[ ] Movie Management

[ ] Booking System

[ ] Admin Dashboard

[ ] Responsive Design

[ ] Testing

[ ] Deployment
