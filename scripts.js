let num = parseInt( prompt('Introduce el rango del numero'));


for (let i=2;i<num;i++) {
    // vamos a acumular en la variable perfecto la suma de divisores
    let perfecto=1;
  
    for (let j=2;j<i;j++) {
            // si se divide; el resto tiene que dar como resultado 0 para poder almacanarlo en la variable. 
            if (i%j==0) {
                    perfecto = perfecto + (i/j);
            }
    }
   //la suma calculada tiene que ser igual la variable perfecto
    if (i==perfecto){
        document.write(`el numero es perfecto ${i}`+'</br>');
    }
}
//aviso o alerta para decir que el aplicativo ya acabo
alert ("He terminado de buscar")

