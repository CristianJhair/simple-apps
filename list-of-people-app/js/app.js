const arreglo=[];
function agregar(){
    let formulario=document.forms["form1"];
    let nombre=formulario["name"].value;
    let apellido=formulario["surname"].value;
    
    if(nombre&&apellido){
        arreglo.push(new Persona(nombre, apellido))
        let i=document.createElement('li')
        let list=document.getElementById('list')
        i.innerHTML=nombre+' '+apellido;
        list.appendChild(i)
    }
}

function mostrar(){
    let texto='';
    for (const iterator of arreglo) {
        console.log(iterator.nombre)
    }
    document.getElementById("list").innerHTML=texto;
}


/*function clear(){
    console.log("Cleaning");
    document.getElementById("list").removeChild
}*/