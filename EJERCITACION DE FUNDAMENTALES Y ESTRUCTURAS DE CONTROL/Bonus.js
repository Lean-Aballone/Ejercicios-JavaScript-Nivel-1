/* # EJERCITACION DE FUNDAMENTALES Y ESTRUCTURAS DE CONTROL

Desarrolla un programa que simule un sistema de gestión de cuentas bancarias. El programa debe permitir al usuario realizar las siguientes acciones:

1. **Crear una cuenta bancaria:** El usuario debe poder ingresar su nombre, número de cuenta y saldo inicial para crear una cuenta bancaria.
    
2. **Realizar depósito:** El usuario debe poder realizar un depósito en una cuenta existente. Debe ingresar el número de cuenta y la cantidad a depositar. El saldo de la cuenta debe actualizarse correctamente.
    
3. **Realizar retiro:** El usuario debe poder realizar un retiro de una cuenta existente. Debe ingresar el número de cuenta y la cantidad a retirar. El saldo de la cuenta debe actualizarse correctamente y asegurarse de que haya suficiente saldo disponible.
    
4. **Consultar saldo:** El usuario debe poder consultar el saldo de una cuenta existente. Debe ingresar el número de cuenta y el programa debe mostrar el saldo actual.

Puedes utilizar variables para almacenar el nombre, número de cuenta y saldo de cada cuenta bancaria. Utiliza estructuras de control condicionales para verificar la existencia de la cuenta y realizar las operaciones correspondientes. */


let menu;
let nombre, numero_de_cuenta, saldo;
let aux;
do{
    menu = Number(prompt("Ingrese un digito para navegar por el menu:\n1.Crear Cuenta Bancaria.\n2.Realizar depósito.\n3.Realizar retiro.\n4.Consultar Saldo.\n0.Finalizar"));
    switch(menu){
        case 0:
            break;
        case 1:
            // Parte 1 **Crear una cuenta bancaria:**

            nombre = prompt("Ingrese su nombre: ");
            numero_de_cuenta = Number(prompt("Ingrese su numero de cuenta: "));
            saldo = Number(prompt("Ingrese saldo inicial: "));

            break;
        case 2:
            // Parte 2 **Realizar depósito:**

            aux = Number(prompt("Ingrese numero de cuenta: "));
            if( aux != numero_de_cuenta ){
                alert("Numero de cuenta Incorrecto.");
                break;
            }else {
                do {
                    aux = Number(prompt("Ingrese 0 Para cancelar.\nIngresar Cantidad a depositar:"));
                    if( aux < 0 ){
                        alert("La cantidad a depositar debe ser mayor a 0. Reintentar.");
                    } else{
                        saldo += aux;
                        if(aux != 0){
                            alert("Nuevo Saldo: " + saldo);
                        }
                    }

                }while( aux < 0);
            }
            break;
        case 3:
            // Parte 3 **Realizar retiro:**

            aux = Number(prompt("Ingrese numero de cuenta: "));
            if( aux != numero_de_cuenta ){
                alert("Numero de cuenta Incorrecto.");
                break;
            }else{
                do {
                    alert("Saldo Actual: "+ saldo);
                    aux = Number(prompt("Ingrese 0 Para cancelar.\nIngresar Cantidad a retirar:"));
                    if( aux < 0 ){
                        alert("La cantidad a depositar debe ser mayor a 0. Reintentar.");
                    } else{
                        if(aux > saldo){
                            alert("Fondos Insuficientes.");
                        } else{
                            saldo -= aux;
                            alert("Retiro Exitoso.\nSaldo actual: " + saldo);
                        }
                    }
                }while( aux < 0);
            }
            break;
        case 4:
            // Parte 4 **Consultar saldo:**
            
            aux = Number(prompt("Ingrese numero de cuenta: "));
            if( aux != numero_de_cuenta ){
                alert("Numero de cuenta Incorrecto.");
                break;
            } else{
                alert("Saldo actual: " + saldo);
            }
            break;
        default:
            alert("Numero Incorrecto, vuelva a intentar.");
            menu = prompt("Ingrese un digito para navegar por el menu:\n1.Crear Cuenta Bancaria.\n2.Realizar depósito.\n3.Realizar retiro.\n4.Consultar Saldo.\n0.Finalizar")
    }
}while(menu != 0);