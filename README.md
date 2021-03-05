# PÁGINA WEB PASCAL

## Creación y diseño

Partimos del reto de cifrar y descifrar un mensaje pero aparte de cumplir con esas funcionalidades debíamos de pensar en que contexto de uso sería util para nuestros usuarios con el fin de identificar insights para responder a un problema.


NUESTRO PASO A PASO

En esta primera fase definimos el producto y cual va a ser su propósito. Con base en esta definición aterrizamos quienes serían nuestros usuarios, concepto y diseño.

En esta etapa realizamos:

* Lluvia de ideas: aquí definimos que uso le iban a dar los usuarios a nuestro producto.
* Definir producto: investigamos sobre otros sitios que implementaran las funcionalidades de cifrar y descifrar. También decidimos que nuestro producto fuera una landing page para evitar un flujo extenso y hacer el camino más corto al usuario.
* Nombre y personalidad: sentíamos que nuestro producto estaba representado por un camaleon, partiendo de la idea del camuflaje - cambio, así que decidimos buscar nombres de camaleones famosos, donde encontramos el nombre de Pascal en el camaleon de la película Enrredados, donde un camaleon ayuda a la princesa que está encerrada en una torre.
* Paleta de colores: las emociones que queríamos transmitir eran de confianza y cercanía, donde el morado nos ayudaba a trasmitir confianza y el amarillo esa calidez para transmitir un lado más humano.
* Boceto manual y boceto digital (prototipo en alta): a continuación las imagenes de nuestros bocetos hechos en papel y prototipo diseñado en Figma:


![bc07b2e2-5766-4f9c-8577-0b44d1507c7e 1](https://user-images.githubusercontent.com/76055544/110140360-02cb8b80-7da2-11eb-9ba5-38f3aed9ef56.jpg)


![566747f0-3fbf-44e1-b820-9c5b642d8a67 1](https://user-images.githubusercontent.com/76055544/110139508-1aeedb00-7da1-11eb-9b3f-48602f665fde.png)


Varias propuestas cromáticas
<img width="828" alt="Propuestas Prototipo" src="https://user-images.githubusercontent.com/76055544/110140575-3a3a3800-7da2-11eb-85ae-485dd89a96da.png">


Pototipo final en alta (Figma)
![Pascal-Prototipo](https://user-images.githubusercontent.com/76055544/110140916-9b620b80-7da2-11eb-8a55-50170cc36f0f.jpg)



## Usuarios y relación con el producto

El producto esta pensado para usuari@s en un rango de edad entre 15 - 50 años, de alguna manera independiente de la edad, genero el factor común es la situación de vulnerabilidad que la persona este atravesando.

Ese factor común conecta y da sentido a la solución que ofrece Pascal de brindar un espacio seguro para poder denunciar.



## Problemas/necesidades de los usuarios

Problematica: partimos de dos insights, las personas no denuncian por miedo a ser señaladas, juzgadas o porque temen que la persona involucrada pueda tomar represivas contra ellos y el segundo es que prefieren denunciar en redes sociales por la negligencia de las autoridades.

Solución: Pascal usa las redes sociales como una vía rapida y con más visibilidad para denunciar, con el fin de que otros conozcan su realidad por medio de mensajes cifrados teniendo el control de quienes lo ven.



## Objetivos de aprendizaje

La ruta de aprendizaje que nos trazamos fué enfocarnos en el corazon del proyecto trabajando en la lógica y desglosando tareas en mas pequeñas para cubrir nuestros objetivos de aprensizaje que apuntan al manejo del DOM y Javascript.

Otro objetivo que se cubrio en este proyecto fue el manejo del tiempo y de un plannig. Puede que la cobertura no haya sido de un 100% pero es un buen comienzo para enrutar los siguientes proyectos con flujos de trabajo mas optimos.



### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [X] Uso de selectores de CSS.
* [X] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [X] Uso de selectores del DOM.
* [X] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [X] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [X] Uso de bucles (for | for..in | for..of | while)
* [X] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Testing

* [X] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [X] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [X] Uso de comandos de git (add | commit | pull | status | push)
* [X] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [X] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

### Parte Obligatoria

* [X] `README.md` incluye info sobre proceso y decisiones de diseño.
* [X] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [X] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [X] Usa VanillaJS.
* [X] No utiliza `this`.
* [X] Implementa `cipher.encode`.
* [X] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [X] Pasa pruebas unitarias.
* [X] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [X] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [X] Interfaz permite escribir un texto para ser cifrado.
* [X] Interfaz muestra el resultado del cifrado correctamente.
* [X] Interfaz permite escribir un texto para ser descifrado.
* [X] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [X] Permite usar un `offset` negativo.
