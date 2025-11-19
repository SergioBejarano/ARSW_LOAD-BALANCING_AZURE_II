### Escuela Colombiana de Ingeniería

### Arquitecturas de Software - ARSW

---

### Integrantes

- Sergio Andrés Bejarano Rodríguez
- Laura Daniela Rodríguez Sánchez

---

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias

- Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
  Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

Creamos el recurso desde nuestra cuenta:

![](images/part2/prev.png)

![](images/part2/created.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

Luego de la autenticación, vemos que ya se cargan los recursos:
![](images/part2/auth.png)

Para el despliegue, escogemos la opción respectiva:

![](images/part3/fapp.png)

Y al desplegar, ya se actualiza en Azure:

![](images/part3/deployed.png)

![](images/part3/function.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

Probando la función:
![](images/part3/result.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Preguntas**

- ¿Qué es un Azure Function?

Un Azure Function es un servicio de computación sin servidor (serverless) de Microsoft Azure que permite ejecutar pequeñas piezas de código o "funciones" en respuesta a eventos, sin necesidad de administrar infraestructura. Es ideal para ejecutar tareas específicas como:

➤ Procesar archivos cuando se suben a un almacenamiento

➤ Responder a solicitudes HTTP (crear APIs)

➤ Ejecutar tareas programadas (cron jobs)

➤ Procesar mensajes de colas

➤ Reaccionar a eventos de bases de datos

- ¿Qué es serverless?

Serverless (sin servidor) es un modelo de computación en la nube donde:

• No se administran servidores: Aunque físicamente existen servidores, el usuario no los gestiona, configura ni escala manualmente

• Pago por uso: Solo se paga por el tiempo de ejecución real del código (por milisegundos), no por capacidad reservada

• Escalado automático: El servicio escala automáticamente según la demanda, desde cero hasta miles de instancias

• Enfoque en código: El desarrollador se concentra únicamente en la lógica de negocio, no en la infraestructura

Es importante aclarar que "serverless" no significa que no haya servidores, sino que la responsabilidad de administrarlos está completamente abstraída del desarrollador.

- ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?

El runtime es el entorno de ejecución en el que correrá el código. Al crear un Function App, debe seleccionarse.

Implicaciones de seleccionar el runtime:

1. Lenguaje de programación: Define qué lenguaje se usará para escribir las funciones
2. Versión específica: Cada runtime tiene versiones (ej: Node.js 18, Python 3.11), lo que determina las características y bibliotecas disponibles
3. Rendimiento: Diferentes runtimes tienen distintas características de inicio en frío y rendimiento.
4. No es modificable después: Una vez creado el Function App con un runtime, no puede cambiarse; sería necesario crear uno nuevo
5. Compatibilidad de dependencias: Determina qué paquetes y librerías podrán usarse en el código.

- ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
- ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
- ¿Por qué la memoization falla o no funciona de forma correcta?
- ¿Cómo funciona el sistema de facturación de las Function App?
- Informe
