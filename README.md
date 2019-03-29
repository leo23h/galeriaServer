# galeriaServer

BIENVENIDO A GALERIA SERVER

este es el lado servidor de nuestra galeria de fotos, acontinuacion les vamos a enseñar los pasos para que nuestro servidor quede totalmente
conectado con nuestra base de datos mongodb y poder hacer consulta gracias a nuestra configuracion de rutas con node js (express)

1) nuestro primer paso va a ser clonar nuestro proyecto del repositorio
2) si tenemos instalado la ultima version de angular mucho mejor 
3) una vez tenemos clonado el proyecto escribiremos el siguiente comando en CMD o BASH de linux en caso de tener maquinas con este sistema
  - npm install --save
  - robo 3T (interfaz de mongoDB) instalar
4) teniedo nuestras librerias instaladas en nuestro proyecto escribiremos 'npm start' si no arroja ni un error, ¡felicidades! ya tienes 
tu ambiente servidor listo para trabajar sobre el proyecto
5) al momento de instalar robo 3T configuramos nuestra base de datos, primero seleccionaremos la opcion que dice "manage connections" despues seleccionamos la opcion de "create", aparecera una ventana donde configuramos nuestra conección dandole como nombre "gallery",
dandole la direccion o address "localhost" con puerto (port) 27017 para que nos pueda conectar con el servidor de node, una vez tenemos los campos llenos le damos clic al boton test, salen todo correcto es porque ya tenemos nuestra base de datos conectada y lista para usar
6) una vez abrimos nuestro proyecto abrimos cualquiera de nuestras consolas sea bash o cmd nos dirijimos a nuestro directorio y escrimimos 
 --npm start para iniciar el proyecto 

