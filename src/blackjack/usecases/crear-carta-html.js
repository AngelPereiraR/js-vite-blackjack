/**
 * Crea la carta en el HTML
 * @param {String} carta Ejemplo: 2D
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = (carta) => {
    if(!carta) throw new Error('carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}