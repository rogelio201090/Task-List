let arr = [
'Lunes', 
'Martes', 
'Miercoles', 
'Jueves', 
'Viernes', 
'Sabado',
'Domingo' 
]; 

arr.forEach(funcionDias);

function funcionDias(arr,i){
    console.log(`El dia ${i + 1} es: ${arr}.`);
}

