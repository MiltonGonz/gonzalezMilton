//ESTO ES EJERCICIO 1
function saludar()
{
    alert('!Hola Mundo¡');
}

//---------------------------
//ESTO ES EJERCICIO 2

function saludarNombre() 
{
    let resultado = document.getElementById("nombre").value.trim();
    let mensaje = document.getElementById("resultado");

    if (resultado === "") {
        mensaje.innerHTML = "Por favor ingresá tu nombre.";
    } else {
        mensaje.innerHTML = "¡Hola, " + resultado + "!";
    }
}

//--------------------------
//EJERCICIO 3

function analizarNumero() 
{

    let valor = document.getElementById("valor").value;
    let tipo = typeof valor;

    if (isNaN(valor)) 
    {

        document.getElementById("resultado").innerHTML = "Tipo: " + tipo + " -- No es un numero";
    
    } else 
    {

        document.getElementById("resultado").innerHTML = "Tipo: " + tipo + " -- Es un numero valido";
        
    }

}

//------------------
//EJERCICIO 4

function calculo()
{
    let resultado = 25 * 4 - 10;

    console.log(resultado);

    document.getElementById("resultado").innerHTML = "Resultado: "+ resultado;
}

//-------------------
//EJERCICIO 5

function suma()
{

    let numero1 = document.getElementById("n1").value;
    let numero2 = document.getElementById("n2").value;

    let resultado = Number(numero1) + Number(numero2);

    document.getElementById("resultado").innerHTML = "Resultado: "+ resultado;

}

//--------------------
//EJERCICIO 6

function restar()
{

    let numero1 = document.getElementById("n1").value;
    let numero2 = document.getElementById("n2").value;

    let resultado = Number(numero1) - Number(numero2);

    if (resultado < 0)
    {
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado + " (negativo)" 
    }
        if (resultado > 0)
        {
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado + " (positivo)" 
        }

        if (resultado === 0)
        {
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado + " (cero)" 
        }
}

//--------------------
//EJERCICIO 7

function multiplicar()
{

    let numero1 = document.getElementById("n1").value;
    let numero2 = document.getElementById("n2").value;

    let resultado = Number(numero1) * Number(numero2);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    console.log(numero1+ " x 1 = "+ (numero2*1));
    console.log(numero1+ " x 2 = "+ (numero2*2));
    console.log(numero1+ " x 3 = "+ (numero2*3));
    console.log(numero1+ " x 4 = "+ (numero2*4));
    console.log(numero1+ " x 5 = "+ (numero2*5));

}

//--------------------
//EJERCICIO 8

function dividir()
{

    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);

    let texto = document.getElementById("resultado");
    
    if (numero2 === 0)
    {

       texto.innerHTML = "No se puede dividir por 0";

    }else
    {

        let resultado = numero1 / numero2;
        texto.innerHTML = "Resultado: " + resultado.toFixed(2);

    }
}

//--------------------
//EJERCICIO 9

function identificarNumero()
{
    let numero = Number(document.getElementById("num").value);

    let texto = document.getElementById("resultado");

    if (numero < 0)
    {
        texto.innerHTML = "El numero es NEGATIVO";
    }

        if (numero > 0)
        {
            texto.innerHTML = "El numero es POSITIVO";
        }

            if (numero === 0)
            {
            texto.innerHTML = "El numero es CERO"; 
            }
}

//--------------------
//EJERCICIO 10

function parOImpar()
{
    let numero = Number(document.getElementById("num").value);

    let texto = document.getElementById("resultado");

            if (!Number.isInteger(numero))
            {
                texto.innerHTML = "Ingrese un numero entero";
                return;
            }

                if (numero % 2 === 0) 
                {

                 texto.innerHTML = "El numero es par";

                }else 
                {

                texto.innerHTML = "El numero es impar";

                }
}

//---------------------
//EJERCICIO 11

function mayorEdad()
{
    let nombrePersona = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    let texto = document.getElementById("resultado");

    if (edad >= 18)
    {
        texto.innerHTML = nombrePersona + " es mayor de edad";
    }else
    {
        let edadRestante = 18 - edad;
        texto.innerHTML = nombrePersona + " es menor de edad, le faltan " + edadRestante + " años";
    }

        if (edad < 0 || edad > 120)
        {
            texto.innerHTML = "Coloque su edad correctamente";
        } 
}

//--------------
//EJERCICIO 12

function numeroMayor()
{
    let numero1 = document.getElementById("n1").value;
    let numero2 = document.getElementById("n2").value;

    let texto = document.getElementById("resultado");

        if (numero1 > numero2)
        {
            texto.innerHTML = "El mayor es: " + numero1;
        }else
        {
            texto.innerHTML = "El mayor es: " + numero2;
        }

            if (numero1 === numero2)
            {
                texto.innerHTML = "Los numeros son iguales";
            }

}

//----------------
//EJERCICIO 13

function areaRectangulo() 
{
    
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let texto = document.getElementById("resultado");

    if (base <= 0 || altura <= 0) 
    {

        texto.innerHTML = "Error: los valores deben ser mayores a 0";
        return;

    }

    let area = base * altura;
    let perimetro = 2 * (base + altura);


    if (area <= 0 || perimetro <= 0) 
    {

        texto.innerHTML = "Error: resultado invalido";

    } else 
    {

        texto.innerHTML = "Area: " + area + 
                          " | Perimetro: " + perimetro;

    }
}

//---------------
//EJERCICIO 14

function temperatura()
{
    let temperaturaCelcius = Number(document.getElementById("celsius").value);

    let texto = document.getElementById("resultado");

    if (temperaturaCelcius < -273.15)
    {
        texto.innerHTML = "Error temperatura menor al cero absoluto";
    }else
    {
        let fahrenheit = temperaturaCelcius * 9 / 5 + 32;
        let kelvin = temperaturaCelcius + 273.15;
        
            texto.innerHTML = "Temperatura en Fahrenheit: " + fahrenheit.toFixed(2) +
                                    " | Temperatura en Kelvin: " + kelvin.toFixed(2);
    }
}

//--------------------
//EJERCICIO 15

    function calcularMonto() 
    {
    let monto = Number(document.getElementById("monto").value);
    let porcentaje = Number(document.getElementById("porcentaje").value);
    let resultado = document.getElementById("resultado");


    if (isNaN(monto) || isNaN(porcentaje)) 
    {
        resultado.innerHTML = "Error: ingresá valores válidos";
        return;
    }

    if (porcentaje < 0 || porcentaje > 100) 
    {
        resultado.innerHTML = "Error: el porcentaje debe estar entre 0 y 100";
        return;
    }

    let propina = monto * (porcentaje / 100);
    let total = monto + propina;

    resultado.innerHTML = `
        Propina: $${propina.toFixed(2)} <br>
        Total a pagar: $${total.toFixed(2)}
    `;
}

//-----------------
//EJERCICIO 16

function verificarRango() 
{

    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let num = Number(document.getElementById("num").value);

    let resultado = document.getElementById("resultado");

        if (isNaN(min) || isNaN(max) || isNaN(num)) {
            resultado.innerHTML = "Error: ingresá valores válidos";
            return;
        }

             if (min >= max) 
                {

                    resultado.innerHTML = "Error: el mínimo debe ser menor que el máximo";
                    return;

                }

                            if (num > min && num < max) 
                            {
                                resultado.innerHTML = "Está dentro del rango";
                            } else if (num < min) 
                            {
                                resultado.innerHTML = "Es menor al mínimo";
                            } else 
                            {
                                resultado.innerHTML = "Es mayor al máximo";
                            }
}

//----------------
//EJERCICIO 17

function calcularOperacion() 
{
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let operacion = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");

    let res;

    if (operacion === "suma") {
        res = n1 + n2;
        } else if (operacion === "resta") 
        {
            res = n1 - n2;

            } else if (operacion === "multi") 
            {
                res = n1 * n2;
                } else if (operacion === "div") 
                {
                    if (n2 === 0) 
                    {
                    resultado.innerHTML = "Error: no se puede dividir por cero";
                    return;
        }
        res = n1 / n2;
    }

    resultado.innerHTML = "Resultado: " + res.toFixed(2);
}

//----------------
//EJERCICIO 18 

function aplicarDescuento() 
{
    let precio = Number(document.getElementById("precio").value);
    let descuento = Number(document.getElementById("descuento").value);

    let resultado = document.getElementById("resultado");


    if (precio < 0) 
    {

        resultado.innerHTML = "Error: el precio no puede ser negativo";
        return;

    }

        if (descuento < 0 || descuento > 100) 
        {

            resultado.innerHTML = "Error: el descuento debe estar entre 0 y 100";
            return;

        }

    let ahorro = precio * (descuento / 100);
    let precioFinal = precio - ahorro;

    let etiqueta;

                if (descuento === 0) 
                {

                    etiqueta = "Sin descuento";

                } else if (descuento <= 30)
                {

                    etiqueta = "Oferta";

                } else
                {

                    etiqueta = "¡Mega oferta!";

                }


                        resultado.innerHTML = `
                            Precio final: $${precioFinal.toFixed(2)} <br>
                            Ahorrás: $${ahorro.toFixed(2)} <br>
                            ${etiqueta}
                        `;
}

//--------------
//EJERCICIO 19

function esBisiesto() 
{
    let anio = Number(document.getElementById("anio").value);

    let resultado = document.getElementById("resultado");


        
        if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) 
        {

            resultado.innerHTML = anio + " es bisiesto";

        } else 
        {

            resultado.innerHTML = anio + " no es bisiesto";

        }
}

//EJERCICIO 20
//-----------------

function calcularIVA() 
{
    let precio = Number(document.getElementById("precio").value);
    let conIva = document.getElementById("conIva").checked;

    let resultado = document.getElementById("resultado");


    if (precio < 0) 
    {

        resultado.innerHTML = "Error: el precio no puede ser negativo";
        return;

    }

    let precioFinal;

    if (conIva) 
    
    {
        precioFinal = precio * 1.21;
        resultado.innerHTML = `
            Precio con IVA: $${precioFinal.toFixed(2)} <br>
            (IVA aplicado)
        `;  
    } else 
        
        {
        precioFinal = precio;
        resultado.innerHTML = `
            Precio sin IVA: $${precioFinal.toFixed(2)} <br>
            (IVA no aplicado)
        `;
    }
}

//--------------
//EJERCICIO 21

function convertirTiempo() 
{
    let seg = Number(document.getElementById("segundos").value);

    let resultado = document.getElementById("resultado");


    if (seg < 0) 
    {

        resultado.innerHTML = "Error: no puede ser negativo";
        return;

    }

    let horas = Math.floor(seg / 3600);
    let minutos = Math.floor((seg % 3600) / 60);
    let segundos = seg % 60;

    resultado.innerHTML = `${horas}h ${minutos}m ${segundos}s`;
}

//----------------------
//EJERCICIO 22

function validarContraseña() 
{
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

    let resultado = document.getElementById("resultado");

  
    if (pass1.length < 6) 
    {

        resultado.innerHTML = "Error: la contraseña debe tener al menos 6 caracteres";
        return;

    }

        if (pass1 !== pass2) 
        {

            resultado.innerHTML = "Error: las contraseñas no coinciden";
            return;

        }

   
    resultado.innerHTML = "Contraseña válida ";
}

//-----------------
//EJERCICIO 23

function evaluarNota() 
{
    let nota = Number(document.getElementById("nota").value);

    let resultado = document.getElementById("resultado");

    if (nota < 0 || nota > 10) 
    {

        resultado.innerHTML = "Error: la nota debe estar entre 0 y 10";
        return;

    }

    if (nota <= 3) 
    {
        resultado.innerHTML = "Desaprobado";

    } else if (nota <= 5) 
    {

        resultado.innerHTML = "Recuperatorio";

    } else if (nota <= 7) 
    {

        resultado.innerHTML = "Aprobado";

    } else if (nota <= 9) 
    {

        resultado.innerHTML = "Muy bueno";

    } else 
    {

        resultado.innerHTML = "Sobresaliente";

    }
}

//------------------
//EJERCICIO 24

function calcularVuelto() 
{
    let precio = Number(document.getElementById("precio").value);
    let entregado = Number(document.getElementById("entregado").value);

    let resultado = document.getElementById("resultado");


    if (precio < 0 || entregado < 0) 
    {

        resultado.innerHTML = "Error: los valores no pueden ser negativos";
        return;

    }

    
    if (entregado < precio) 
    {
        let falta = precio - entregado;
        resultado.innerHTML = `Faltan: $${falta.toFixed(2)}`;

    } else if (entregado === precio) 
    {

        resultado.innerHTML = "Monto exacto, sin vuelto.";

    } else 
    {

        let vuelto = entregado - precio;
        resultado.innerHTML = `Vuelto: $${vuelto.toFixed(2)}`;

    }
}

//--------------------
//EJERCICIo 25

function calcular() 
{
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let op = document.getElementById("op").value;

    let resultado = document.getElementById("resultado");


     if (n1 === "" || n2 === "") 
    {
        resultado.innerHTML = "Error: completá ambos números";
        return;

    }

    n1 = Number(n1);
    n2 = Number(n2);

    

    let res;

    if (op === "suma") 
    {

        res = n1 + n2;

    } else if (op === "resta") 
    {
        res = n1 - n2;

    } else if (op === "multi") 
    {
        res = n1 * n2;

    } else if (op === "div") 
    {
        if (n2 === 0) 
        {

            resultado.innerHTML = "Error: división por cero";
            return;

        }
                res = n1 / n2;
            } else if (op === "pot") 
            {

                res = Math.pow(n1, n2);

            }

   
    resultado.innerHTML = `Resultado: ${res.toFixed(2)}`;


    console.log("Resultado:", res.toFixed(2));
}

function limpiar() 
{
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").innerHTML = "";
    
}