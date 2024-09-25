# Tìm hiểu về Docker và Docker Compose

## Docker là gì?

Docker là một nền tảng phần mềm giúp phát triển, triển khai và chạy các ứng dụng bằng cách sử dụng các **container**. Container là các đơn vị phần mềm nhỏ, gọn, độc lập, có thể chạy được ở bất kỳ môi trường nào. Docker giúp các nhà phát triển dễ dàng đóng gói ứng dụng với tất cả các phụ thuộc, thư viện và cấu hình cần thiết để chạy trên các máy chủ khác nhau.

### Lợi ích của Docker

- **Tính nhất quán**: Docker đảm bảo rằng ứng dụng sẽ chạy giống nhau trên mọi môi trường.
- **Hiệu quả tài nguyên**: Docker sử dụng ít tài nguyên hơn so với máy ảo.
- **Tính di động**: Docker container có thể dễ dàng di chuyển giữa các máy chủ khác nhau.
- **Quản lý dễ dàng**: Docker cung cấp các công cụ để quản lý và giám sát các container.

### Các thành phần chính của Docker

- **Docker Engine**: Là thành phần chính của Docker, bao gồm Docker Daemon, REST API và CLI.
- **Docker Images**: Là các mẫu không thay đổi được sử dụng để tạo ra các container.
- **Docker Containers**: Là các instance của Docker Images, chứa tất cả những gì cần thiết để chạy một ứng dụng.
- **Docker Hub**: Là một kho lưu trữ trực tuyến cho các Docker Images.

---

## Docker Compose là gì?

**Docker Compose** là công cụ giúp bạn dễ dàng định nghĩa và chạy các ứng dụng multi-container (đa container). Với Docker Compose, bạn có thể sử dụng file YAML để cấu hình các dịch vụ ứng dụng, sau đó chỉ cần một lệnh để khởi chạy tất cả các dịch vụ này cùng một lúc.

### Lợi ích của Docker Compose

- **Dễ dàng quản lý**: Quản lý nhiều container dễ dàng với một file cấu hình duy nhất.
- **Tự động hóa**: Tự động hóa việc khởi động và dừng các container.
- **Tích hợp CI/CD**: Dễ dàng tích hợp với các pipeline CI/CD.

### Cấu trúc của Docker Compose

File cấu hình của Docker Compose thường được lưu với tên `docker-compose.yml`, trong đó định nghĩa các dịch vụ cần chạy.

---

# Cài đặt Docker và Docker Compose trên Ubuntu

## Cài đặt các package cần thiết

Trước tiên, cập nhật hệ thống và cài đặt các package cần thiết để chuẩn bị cho việc cài đặt Docker:

```sh
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
```

## Thêm Docker’s official GPG key vào hệ thống

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

## Thiết lập Docker repository

```sh
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

## Cài đặt Docker Engine
Sử dụng apt-get (hoặc apt) để cài đặt Docker vào máy

```sh
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```
Để xác nhận Docker đã được cài đặt và hoạt động ổn định, kiểm tra bằng cách sau:

```sh
sudo docker --version
sudo docker compose version
sudo docker run hello-world
```