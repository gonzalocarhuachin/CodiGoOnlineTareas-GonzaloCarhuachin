///////////////DECLARANDO VARIABLES////////////////////////
let inputNombre = document.getElementById("nombre");
let inputFecha = document.getElementById("fecha");
let inputRuc = document.getElementById("ruc");
let inputNro = document.getElementById("nro");
/////////////////////////////////////////
let cantidadInput = document.getElementById("inputCantidad");
let descripcionInput = document.getElementById("descripcion");
let pUnitInput = document.getElementById("inputPUnit");
let pTotalInput = document.getElementById("inputPtotal");
let btnIngresar = document.getElementById("ingresarProducto");
//////////////////////////////////////////
let listaProductos = document.getElementById("listaProductos");
let productos = [];
/////////////////////////////////////////
let total = document.getElementById("total");
////////////////////////////////////////////
let btnGuardarTodo = document.getElementById("guardarTodo");
//////////////////////////////////////////////////
let datos = document.getElementById("datos");
//////////FUNCIONES//////////////
const dibujarProductos = () =>
{
    listaProductos.innerText = "";
    productos.forEach(p =>
    {
        let li = document.createElement("li");
        li.setAttribute("class","main__item");
        let spanCantidad = document.createElement("span");
        spanCantidad.setAttribute("class","cantidad");
        spanCantidad.innerText = p.cantidad;
        let spanDescripcion = document.createElement("span");
        spanDescripcion.setAttribute("class","descripcion");
        spanDescripcion.innerText = p.descripcion;
        let spanPunit = document.createElement("span");
        spanPunit.setAttribute("class","p_unit");
        spanPunit.innerText = p.pUnit;
        let spanPtotal = document.createElement("span");
        spanPtotal.setAttribute("class","p_total");
        spanPtotal.innerText = p.pTotal;

        li.appendChild(spanCantidad);
        li.appendChild(spanDescripcion);
        li.appendChild(spanPunit);
        li.appendChild(spanPtotal);

        listaProductos.appendChild(li);
    })
    //enfoque
    cantidadInput.focus();
}

pUnitInput.onkeyup = (e) =>
{
    if(e.keyCode === 13)
    {
        btnIngresar.click();
    }
}

btnIngresar.onclick = () =>
{
    let objProducto =
    {
        cantidad: cantidadInput.value,
        descripcion: descripcionInput.value,
        pUnit: pUnitInput.value,
        pTotal: cantidadInput.value*pUnitInput.value
    }
    productos.push(objProducto);
    cantidadInput.value = "";
    descripcionInput.value = "";
    pUnitInput.value = "";
    dibujarProductos();
}

datos.onsubmit = (e) =>
{
    e.preventDefault();
    let objEntidad =
    {
        nombre: inputNombre.value,
        fecha: inputFecha.value,
        RUC: inputRuc.value,
        nro: inputNro.value,
        listaProductos: productos
    }
    let objEntidadString = JSON.stringify(objEntidad);
    localStorage.setItem("Entidad", objEntidadString);
}