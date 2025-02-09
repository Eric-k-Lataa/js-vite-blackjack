import _ from 'underscore';

//export const miNombre = 'Erick';

/**
 * Esta función crea un nuevo deck
 * @param {array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.lenght === 0 ) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if( !tiposEspeciales || tiposEspeciales.lenght === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

// export default crearDeck;