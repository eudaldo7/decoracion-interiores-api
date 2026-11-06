

\# API - Decoración de Interiores



\## Descripción

API REST desarrollada con Node.js, Express y MySQL para administrar proyectos de decoración de interiores.



\## Tecnologías

\- Node.js

\- Express

\- MySQL

\- Clever Cloud

\- mysql2



\## Base de datos



La base de datos está alojada en Clever Cloud.



Contiene siete tablas:

1\. clientes

2\. estilos

3\. categorias

4\. proyectos

5\. ambientes

6\. productos

7\. detalle\_ambiente



\## Instalación



Clonar el repositorio:



```bash

git clone https://github.com/eudaldo7/decoracion-interiores-api.git

```



Instalar dependencias:



```bash

npm install

```



Configurar el archivo `.env` con las variables de conexión:



```env

DB\_HOST=

DB\_USER=

DB\_PASSWORD=

DB\_NAME=

DB\_PORT=3306

```



Iniciar el servidor:



```bash

npm start

```



\## Rutas principales



\- `/api/clientes`

\- `/api/estilos`

\- `/api/categorias`

\- `/api/proyectos`

\- `/api/ambientes`

\- `/api/productos`

\- `/api/detalles`



Cada recurso dispone de operaciones CRUD: GET, GET por ID, POST, PUT y DELETE.



\## Autor

Proyecto académico - Decoración de Interiores.



