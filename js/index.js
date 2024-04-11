/*Para trabajar con un boton*/
function verificar() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    if (nombre == "" || email == "")
    alert("Por favor, rellene los campos");
}
/*Para trabajar con un select*/
    /*text1, text2 y text3 son los id de los tres input text de prueba 
    a continuacion indicamos que el valor que se mostrara en esos input
    sera el que encontrara en el select seleccionado por el usuario*/

function cambiarcolor(){
    let seleccion = document.getElementById('select1');
    document.getElementById("text1").value = seleccion.selectedIndex;
    document.getElementById("text2").value = seleccion.options[seleccion.selectedIndex].text;
    document.getElementById("text3").value = seleccion.options[seleccion.selectedIndex].value;
}
/*Para trabajar con un check*/
function validarcheck(){
    let cantidad = 0;
    let lenguajes = [''];
    if (document.getElementById("check1").checked){
        lenguajes = lenguajes + ' Java';
    }
    if (document.getElementById('check2').checked){
        lenguajes = lenguajes + ', C++';
    }
    if (document.getElementById('check3').checked){
        lenguajes = lenguajes + ', Python';
    }
    if (document.getElementById('check4').checked){
        lenguajes = lenguajes + ', PHP';
    }
    if (document.getElementById('check5').checked){
        lenguajes = lenguajes + ', Javascript';
    }
    alert('Has indicado que conoces: '+lenguajes);
    

}