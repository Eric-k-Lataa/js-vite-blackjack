/**
 * Esta función me permite determinar el valor de cada carta
 * @param {String} carta Ejemplo: 2C = Two of Clubs
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}