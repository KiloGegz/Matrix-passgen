# Используем легкий образ Nginx
FROM nginx:alpine

# Удаляем дефолтную конфигурацию Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Копируем наши файлы в папку Nginx
COPY public /usr/share/nginx/html
COPY src/css /usr/share/nginx/html/css
COPY src/js /usr/share/nginx/html/js

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]