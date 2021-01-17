# Node con docker

## Comandos docker

Creamos la imagen personalizada del dockerfile (recordar que se debe estar en el directorio del proyecto donde se encuentra el dockerfile):

`sudo docker build -t nombreImagen .
`

Revisamos que la imagen se haya creado:

`sudo docker images
`

Creamos el contenedor:

`sudo docker run -d -p PuertoPC:PuertoDocker --name nombreContenedor nombreImagen
`

Revisamos que el contenedor este activo:

`sudo docker ps
`

## Nota:
Al probar el proyecto se debe recordar que el puerto que se da en la ruta es el de la computadora y no el que se le dio a docker.