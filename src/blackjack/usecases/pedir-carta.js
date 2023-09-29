/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string. Ejemplo: ['2D','4C','AS']
 * @returns {String} retorna la última carta del mazo. Ejemplo: 2D
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}