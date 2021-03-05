# PÁGINA WEB PASCAL

## Creación y diseño

Punto de partida:

Partimos del reto de cifrar y descifrar un mensaje pero aparte de cumplir con esas funcionalidades debíamos de pensar en que contexto de uso sería util para nuestros usuarios con el fin de identificar insights para responder a un problema.


Nuestro proceso paso a paso:

En esta primera fase definimos el producto y cual va a ser su propósito. Con base en esta definición aterrizamos quienes serían nuestros usuarios, concepto y diseño.

En esta etapa realizamos:
* Lluvia de ideas: aquí definimos que uso le iban a dar los usuarios a nuestro producto.
* Definir producto: investigamos sobre otros sitios que implementaran las funcionalidades de cifrar y descifrar. También decidimos que nuestro producto fuera una landing page para evitar un flujo extenso y hacer el camino más corto al usuario.
* Nombre y personalidad: sentíamos que nuestro producto estaba representado por un camaleon, partiendo de la idea del camuflaje - cambio, así que decidimos buscar nombres de camaleones famosos, donde encontramos el nombre de Pascal en el camaleon de la película Enrredados, donde un camaleon ayuda a la princesa que está encerrada en una torre.
* Paleta de colores: las emociones que queríamos transmitir eran de confianza y cercanía, donde el morado nos ayudaba a trasmitir confianza y el amarillo esa calidez para transmitir un lado más humano.
* Boceto manual y boceto digital (prototipo en alta): a continuación las imagen de nuestros bocetos hechos en papel y prototipo diseñado en Figma:

![prototipo]
from=Recursos/Boceto1.jpg
from=Recursos/Boceto2.jpg
from=Recursos/Propuestas Prototipo.png
from=Recursos/Pascal-Prototipo.jpg

## Usuarios y relación con el producto

El producto esta pensado para usuari@s en un rango de edad entre 15 - 50 años, de alguna manera independiente de la edad, genero el factor común es la situación de vulnerabilidad que la persona este atravesando.

Ese factor común conecta y da sentido a la solución que ofrece Pascal de brindar un espacio seguro para poder denunciar.


## Problemas/necesidades de los usuarios

Problematica: partimos de dos insights, las personas no denuncian por miedo a ser señaladas, juzgadas o porque temen que la persona involucrada pueda tomar represivas contra ellos y el segundo es que prefieren denunciar en redes sociales por la negligencia de las autoridades.

Solución: Pascal usa las redes sociales como una vía rapida y con más visibilidad para denunciar, con el fin de que otros conozcan su realidad por medio de mensajes cifrados teniendo el control de quienes lo ven.


## Objetivos de aprendizaje

Trabajando en parejas aprenderán a construir una aplicación web que interactuará
con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

### Parte Obligatoria

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [X] Permite usar un `offset` negativo.
