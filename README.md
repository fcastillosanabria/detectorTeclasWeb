# Detector de teclas web
Detecta todas las teclas presionadas cuando se encuentra en la pagina web y las guarda en un txt

## INSTALAR DEPENDENCIAS:

Requerimientos necesarios

```bash
  # Para exponer mi app localmente
  npm install express

  # Esto es opcional, es un servicio para exponer mi app a internet
  npm install -g ngrok

  # Opcionalmente a ngrok podrias crear un tunel con el mismo visual code
  En la seccion de puertos colocamos el puerto que vamos a exponer localmente
```

## PRIMERO SE EJECUTA EL SERVIDOR LOCAL:

```bash
  # Este codigo ejecutar la app
  node server.js

  # Esto retornara la siguiente url local
  Servidor corriendo en http://127.0.0.1:3000
```

## EXPONER EL SERVICIO LOCAL A INTERNET MEDIANTE NGROK:

#### NOTA: Para ejecutar este comando, debes crear una cuenta en ngrok y autenticar tu máquina local con el token proporcionado en la página de ngrok.

```bash
  # Este comando creará un enlace público
  ngrok http 3000

  # Esto retornará datos del servicio, pero solo nos interesará la URL pública que deberemos enviar a la víctima
  # Aquí se indica que se ha creado una URL pública para la URL local

  Forwarding   https://ea76-181-66-164-226.ngrok-free.app -> http://localhost:3000
  
```
