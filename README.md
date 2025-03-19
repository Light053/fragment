Чтобы запустить проект клонируйте репозиторий на свой компьютер командой

```
git clone https://github.com/Light053/fragment.git
```

После этого отройте проект и установите зависимости командой

```
npm install
```

запустите дев режим командой

```
npm run dev
```

или же продакшен сборку командой

```
npm run build
npm run preview
```

Для локальной проверки авторизации например, необходимо сделать проект доступным в интернете, для этого установите ngrok следуя инструкциям с сайта https://ngrok.com/downloads/windows

сервер можно запустить командой в консоли

```
ngrok http 8000
```

после чего запускаем наш сайт на этом порту

```
npm run dev -- --host --port 8000
```

и заходим на домен что появился после запуска сервера (ngrok http 8000)
