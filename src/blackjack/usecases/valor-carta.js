/**
 * Recupera el valor de la carta introducida
 * @param {String} carta es un string. Ejemplo: 2D
 * @returns {String} retorna el valor de la carta. Ejemplo: 2
 */
export const valorCarta = ( carta ) => {

    if (!carta) throw new Error('Carta es obligatoria y debe ser un String cuyo primer caracter como mínimo deber ser un valor numérico')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}