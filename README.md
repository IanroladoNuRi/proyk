**Version de herramientas**<br/>
Este proyecto fue generado con :<br/>
Angular: 12.2.6<br/>
Node: 14.16.1<br/>

**Instalación**<br/>
Se debe tener instalado node.js una vez clonado el proyecto, posteriormente ejecutar el comando:<br/>

*npm install*<br/>

Una vez ejecutado este comando debemos esperar mientras se instalan las dependecias .<br/>

Finalmente para iniciar el servidor de forma local ejecutar el comando<br/>

*ng serve*<br/>

Para la persistencia de datos se trabajo con una fake API de la cual se espera una respuesta en formato tipo json, a continuacion se adjunta un ejemplo con el cual se trabajó:<br/>
{<br/>
  "Datos_Personales": [<br/>
    {<br/>
      "id": 1,<br/>
      "nombre": "ian",<br/>
      "apellido": "nunez",<br/>
      "ci": "0202521506",<br/>
      "correo": "ian@gmail.com"<br/>
    },<br/>
    {<br/>
      "nombre": "Rolando",<br/>
      "apellido": "Ribadeneyra",<br/>
      "correo": "correoautentico@hotmail.com",<br/>
      "ci": "0202521506",<br/>
      "id": 2<br/>
    }<br/>
  ],<br/>
  "Vacuna": [<br/>
    {<br/>
      "id": "",<br/>
      "usuario vacunado": "",<br/>
      "estado": "",<br/>
      "tipo": "",<br/>
      "fecha vacunacion": "",<br/>
      "dosis": ""<br/>
    }<br/>
  ],<br/>
  "Roles": [<br/>
    {<br/>
      "id": "",<br/>
      "usuario roles": "",<br/>
      "user": ""<br/>
    }<br/>
  ],<br/>
  "Cuenta": [<br/>
    {<br/>
      "usuario": "ian.nunez@gmail.com",<br/>
      "contraseña": "0202521506",<br/>
      "usuario_ref": "0202521506",<br/>
      "id": "1"<br/>
    },<br/>
    {<br/>
      "usuario": "cualquiecosa@hotmail.com",<br/>
      "contraseña": "0202521506",<br/>
      "usuario_ref": "0202521506",<br/>
      "id": "2"<br/>
    }<br/>
  ]<br/>
}<br/>
