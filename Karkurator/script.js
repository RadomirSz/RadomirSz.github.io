let dzialanie = "";

function add(x)
{
    dzialanie += document.getElementById(x).value;
    document.getElementById("ekran").innerHTML = dzialanie;
}

function wynik()
{
    if(dzialanie == "")
    {
        document.getElementById("ekran").innerHTML = "Najpierw podaj działanie";
    }
    else
    {
        document.getElementById("ekran").innerHTML = dzialanie + " = " + eval(dzialanie);
        dzialanie = eval(dzialanie);

    }
    
}

function czysc(){ 
    dzialanie = "";
    document.getElementById("ekran").innerHTML = dzialanie;
}

function del(){
    if(dzialanie.length == 1) dzialanie = "";
    else dzialanie = dzialanie.slice(0,dzialanie.length - 1);
    document.getElementById("ekran").innerHTML = dzialanie;
}
