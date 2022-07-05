let mates = 2500;
let termo = 3500;
let bombilla = 600;
let carritoInicial = 0;
let resultado = carritoInicial;

function sumar (i){
    resultado = resultado + i;
}

do {
    opcion = Number(prompt('Menu Productos:\n1 - Mates\n2 - Termos\n3 - Bombilla\n4 - Consultar monto\n5 - Salir'));

    switch (opcion) {
        case 1:
            sumar(mates);
            console.log('Se agrego un Mate');
            break;

        case 2:
            sumar(termo);
            console.log('Se agrego un termo');
            break;

        case 3:
            sumar(bombilla);
            console.log('Se agrego una bombilla');
            break;

        case 4:
            console.log('Tu monto actual es de ' + resultado + '$');
            break;
    
        case 5:
            if (resultado > 0){
                console.log('Tu compra final es de ' + resultado + '$ Gracias por la compra!');
                break;
            }
            else{
                console.log('Para que venis raton')
                break;
            }
            
        default:
            console.log('Opción incorrecta');
            break;
    }
} while(opcion != 5);

