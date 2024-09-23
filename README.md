# Indicaciones generales

En el archivo '.env.example' se encuentra un ejemplo de cómo debe verse el archivo '.env' para la configuración del entorno virtual.

Para el correcto funcionamiento del proyecto, renombrar el archivo '.env.example' por '.env' y cambiar los valores que sean necesarios.

- Para iniciar el proyecto: 
    1. Clonar el repositorio: git clone https://github.com/kmilom/back.git
    2. Entrar en el directorio: cd back
    3. Instalar dependencias: npm install
    4. Iniciar el proyecto: npm run dev



# Base de datos

- A continuación, diagrama entidad-relación de la base de datos
![ERD todolistdb](dbimage.jpg)


# Librerías del proyecto

A continucación se encuentran las librerías usadas en el proyecto y sus respectivos comandos de instalación:

1. nodemon y express: npm i express nodemon
2. dotenv: npm i dotenv -D
3. mysql: npm i mysql
4. morgan: npm i morgan
5. cors: npm i cors
6. Bcryptjs: npm i bcryptjs
7. JSONWebToken: npm i jsonwebtoken