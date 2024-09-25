# Sử dụng image chính thức của Nginx
FROM nginx:alpine

# Thiết lập thư mục làm việc
WORKDIR /usr/share/nginx/html

# Sao chép tất cả các file từ thư mục hiện tại vào thư mục làm việc trong container
COPY . .

# Expose port 80 để truy cập ứng dụng
EXPOSE 80

# Khởi động Nginx khi container chạy
CMD ["nginx", "-g", "daemon off;"]