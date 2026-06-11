# QA Portfolio Website

Сайт-портфолио QA Engineer.
Очень долго собирался упаковать свое резюме в сайт, вот что получилось. Не судите строго)

## Demo

- Live site: https://vkolesnikov600.github.io/qa-portfolio/
- Repository: https://github.com/vkolesnikov600/qa-portfolio

## Что внутри

- `app.js` — Express-сервер.
- `routes/`, `controllers/`, `middleware/` — базовая серверная структура.
- `public/` — HTML, CSS, JavaScript, изображения, сертификаты и резюме.
- `public/certificates/` — сертификаты и превью для сайта.
- `public/docs/` — резюме для кнопки CV на сайте.
- `Dockerfile` — контейнеризация сайта на Node.js.
- `.github/workflows/ci-cd.yml` — CI/CD pipeline: установка зависимостей, health-check, Docker build/test и деплой GitHub Pages.

## Локальный запуск

```bash
npm install
npm start
```

Сайт будет доступен по адресу:

```text
http://localhost:3000
```

## Docker

Сборка образа:

```bash
docker build -t qa-portfolio .
```

Запуск контейнера:

```bash
docker run --rm -p 3000:3000 qa-portfolio
```

После запуска сайт будет доступен по адресу:

```text
http://localhost:3000
```

## CI/CD

GitHub Actions запускается при push и pull request в `main`.

Pipeline делает несколько проверок:

- устанавливает зависимости через `npm ci`;
- запускает Express-приложение и проверяет `/health`;
- собирает Docker image;
- запускает контейнер и повторно проверяет `/health`;
- после успешного push в `main` публикует папку `public` на GitHub Pages.

