## Play Cards App

**Descripción genera:**

Este es un proyecto realizado en Reactjs, y se implementaron estilos con Material UI, esto debido a su gran facilidad de implementar los componentes de Material como lo son el slider, que se implementa para tomar los posibles valores de cuantas cartas quiere el jugador. Cabe aclarar que no es responsive 

Básicamente es un juego de encontrar parejas entre una cantidad de cartas que puede ir desde 12 hasta 40, cada carta tiene la imagen de un super héroe de DC o Marvel. 

**Menú de inicio:**
Para el inicio se cuenta con una barra tipo Discrete slider  la cual te da los valores de 12 a 40 cartas y un letrero que va mostrando las cartas escogidas. y en la parte inferior botón que va a dar inicio al juego.
Al inicial este menú desaparecerá. 

**Funcionamiento del juego:**
Se implemento un custom hook personalizado que hace el papel de cronometro el cual utiliza un activador, una función de restart para poder en contador en 0, y los segundos en una configuraron:
<h1>0 min  : 0 seg </h1>
Debajo viene un botón en caso que se desee acabar el juego y reiniciar para escoger una cantidad diferente de cartas.

Luego se hace un display de las cartas mostrando la disposición mas cuadrada que permita la cantidad que se ha escogido, como ejemplo, si se escogió la cantidad de 30 cartas se va a disponer en 6 horizontales y 5 verticales, lo siguiente es que el jugador encuentro todas las parejas sin equivocarse y al finalizar muestra el tiempo que tomo terminar.
