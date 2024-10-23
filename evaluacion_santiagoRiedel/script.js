class Estudiante{
    constructor(nombreEstudiante, nota1,nota2 ,nota3){
    this.nombre = nombreEstudiante;
    this.nota1=this.nota1;
    this.nota2=this.nota2
    this.nota3=this.nota3

    }
    getnombre(){
        return this.nombre
    }
    getnota1(){
        return this.nota1
    }
    getnota2(){
        return this.nota2
    }
    getnota3(){
        return this.nota3
    }
    Promedio(){
        suma=this.nota1+ this.nota2+ this.nota3
        promedio=suma/3
        return promedio
    }
   
   
}

lista =[]
i=0
function agregarNota(nota1 ,nota2, nota3){
    if(nota1>0 && nota1<11 ){
        this.nota1 = nota1
            alert("Nota agregada")
    }else if(nota2>0 && nota2<11 ){
        this.nota2= nota2
            alert("Nota Agregada")
    }else if(nota3>0 && nota3<11 ){
        this.nota3= nota3
            alert("nota agregada")
    }
    else{
        alert("no puedes usar más de 3")
    }
}
function ingresarEstudiante(){
    lista[i].ingresarEstudiante();
    mostrarInfo()
}
function ingresarNuevoEstudiante(){
    lista[i].ingresarNuevoEstudiante();
    mostrarInfo()
}
function Siguiete(){
    if(i< (lista.lenght - 1)){
        i++;
    }else{
        alert("No hay más Estudiantes");
    }
    mostrarInfo();
}
function iniciar() {
    const nombre = document.getElementById("Estudiante").value;
    const nota1 = parseInt(document.getElementById("Nota1").value);
    const nota2 = parseInt(document.getElementById("Nota2").value);
    const nota3 = parseInt(document.getElementById("Nota3").value);
    lista.push(new Estudiante(nombre, nota1,nota2, nota3 ))
}
function Anterior(){
    if (i>0){
        i--;
    }else{
        alert("No hay mas Estudiantes")
    }
    mostrarInfo
}
function mostrarInfo(){
    document.getElementById("Estudiante").innerHTML = lista[i].getnombre();
    document.getElementById("nota1").innerHTML = lista[i].getnota1();
    document.getElementById("nota2").innerHTML = lista[i].getnota2();
    document.getElementById("nota3").innerHTML = lista[i].getnota3();
    document.getElementById("promedio").innerHTML= lista[i].promedio
}