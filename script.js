/**
 * Array di podizioni che contine solo i numeri di dove la x posiziona
 * e dove la y posiziona
 * quindi saranno
 * const PlayerX = []
 * const PlayerO = []
 *
 * potranno andare da un minimo di 0 a 8
 *
 * 0 1 2
 * 3 4 5
 * 6 7 8
 *
 * crea un array che contine tutte le possibili triplette di numeri per decidere
 * il vincitore
 *
 * crea una variabile isDone = false e diventa true quando finisce il gioco
 * crea una variabile turn = 1
 * turn ++ ad ogni click
 *
 * if turn === 9 è un pareggio e quindi succedono le cose del pareggio
 */

/**
 * Quando si preme una casella cosa succede
 * isOver = false;
 *
 * turn = 0
 *
 * una funzione andrà a registrare il numero della casella nell'array del giocatore x
 *
 * turn++
 *
 * poi una funzione andrà a mettere a schermo la x
 * e dovrà anche mettere la classe x a schermo per far diventare il colore del testo rosso
 * grazie al this.data.index/e.target.data.index (?) avremo il numero di dove dovremo
 * far mettere la X a schermo
 *
 * poi tocca al O
 * funzione che fa cambiare il player turn a schermo
 * e anche la class in x ad o e viceversa
 *
 * si preme e succede grosso modo la stessa cosa di prima
 * solo che anzichè mettere roba nell'array del player x andanno nel player O
 * e dovrà anche mettere la classe o a schermo per far diventare il colore del testo blu
 *
 *
 * andremo poi sempre a prendere l'index e far comparire il O
 *
 * turn++
 *
 * quando il turn > 4
 * inizia la verifica del vincitore
 * questa viene effettuata cercando se l'array del player x o y hanno i tre numeri
 * per fare tris
 * 
 * FIXME: 
 * const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
 *
 */
