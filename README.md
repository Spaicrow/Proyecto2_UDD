# **Encuestas - Programación Orientada a Objetos (POO) y Programación Funcional (PF)**
Este programa en JavaScript permite a los usuarios crear encuestas, votar y ver los resultados en tiempo real. Proporciona una interfaz simple donde los usuarios pueden crear preguntas junto con sus opciones de respuesta, votar en esas preguntas y ver los resultados de la encuesta.

## **Funcionalidades**
**Crear Encuestas:** Los usuarios pueden crear encuestas con un máximo de 8 preguntas, cada una con múltiples opciones de respuesta.

**Votar:** Los usuarios pueden seleccionar una opción de respuesta para cada pregunta y luego votar en la encuesta.

**Mostrar Resultados:** Después de que los usuarios votan, se muestran los resultados de la encuesta en tiempo real, mostrando el número total de votos y el porcentaje de votos para cada opción de respuesta.

## **Enfoque de la Implementación**
### Programación Orientada a Objetos (POO)
**Clase Encuesta:** Se crea una clase Encuesta que representa una encuesta. Esta clase tiene propiedades para almacenar las preguntas y sus opciones de respuesta, así como los resultados de la votación.

### **Métodos de la Clase Encuesta:**

**agregarPregunta(pregunta, opciones):** Agrega una nueva pregunta con sus opciones de respuesta a la encuesta.

**votar(preguntaIndex, opcionIndex):** Registra un voto en una pregunta específica de la encuesta.

**obtenerResultados():** Calcula y devuelve los resultados de la encuesta, incluyendo el número total de votos y el porcentaje de votos para cada opción de respuesta.

**Interacción con el DOM:** Se utilizan funciones en JavaScript para interactuar con el DOM y proporcionar una interfaz de usuario. Cuando los usuarios crean una encuesta, se agregan dinámicamente campos de entrada para las preguntas y opciones de respuesta. Después de que los usuarios votan, se muestran los resultados en tiempo real en la página web.

### **Programación Funcional (PF)**
**Funciones Puras:** Se utilizan funciones puras para manipular los datos de la encuesta y realizar operaciones como agregar preguntas, votar y obtener resultados. Esto significa que estas funciones no modifican los datos de entrada y producen el mismo resultado para la misma entrada.

**Composición de Funciones:** Se definen funciones simples y bien definidas que se componen para realizar tareas más complejas. Por ejemplo, la función obtenerResultados se compone de funciones más pequeñas para calcular el número total de votos y el porcentaje de votos para cada opción de respuesta.

**No hay Estado Mutante:** Se evita el uso de variables mutables y se prefieren las estructuras de datos inmutables. Esto simplifica el razonamiento sobre el comportamiento del programa y reduce la posibilidad de errores relacionados con el estado mutable.

**Interacción con el DOM:** Aunque el enfoque de programación funcional generalmente enfatiza la separación entre la lógica de la aplicación y la manipulación del DOM, en este caso, se utiliza JavaScript para interactuar con el DOM y proporcionar una interfaz de usuario similar a la implementación en POO. Sin embargo, la lógica subyacente sigue siendo pura y funcional.

## **Ventajas de cada Enfoque**
**POO:** Proporciona una estructura clara y modular a través de clases y objetos, lo que facilita la organización y el mantenimiento del código. Es útil para programas con estructuras de datos complejas y relaciones entre objetos.

**PF:** Promueve la claridad y la simplicidad a través de funciones puras y composición de funciones. Es útil para programas que se centran en la transformación de datos y la ejecución de operaciones sobre ellos, sin preocuparse por el estado mutable.
**Composición de Funciones:** Se utilizan funciones simples y bien definidas que se componen para realizar tareas más complejas, como la creación de la encuesta y la visualización de los resultados.

**No hay Estado Mutante:** Se evita el uso de variables mutables y se prefieren las estructuras de datos inmutables, lo que facilita la comprensión y el mantenimiento del código.

## **Por qué este Enfoque**
**Claridad y Mantenibilidad:** Tanto la Programación Orientada a Objetos como la Programación Funcional proporcionan estructuras claras y modularidad, lo que facilita la comprensión y el mantenimiento del código a medida que el programa crece en complejidad.

**Flexibilidad:** Estos enfoques permiten adaptarse fácilmente a cambios en los requisitos o a nuevas funcionalidades sin afectar otras partes del código.

**Legibilidad:** La separación de la lógica de la aplicación en clases o funciones bien definidas mejora la legibilidad del código y facilita la colaboración entre desarrolladores.

## **Instrucciones de Ejecución**

Clona este repositorio en tu máquina local.

Abre el archivo index.html en tu navegador web.

Sigue las instrucciones en la página para crear encuestas, votar y ver los resultados.
