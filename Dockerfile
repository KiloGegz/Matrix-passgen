# Используем официальный образ Nginx на основе Alpine Linux (легковесный образ)
FROM nginx:alpine

# Копируем файлы проекта в контейнер
# Здесь предполагается, что ваш проект находится в папке `src` в корне
COPY ./src /usr/share/nginx/html

# Открываем порт 80 для доступа к веб-приложению
EXPOSE 80
