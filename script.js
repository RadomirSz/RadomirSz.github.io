let dzialanie = "";

function add(x)
{
    dzialanie += document.getElementById(x).value;
    document.getElementById("ekran").innerHTML = dzialanie;
    console.log("dodało");
    if(dzialanie.slice(dzialanie.length - 1 , dzialanie.length) && x == 0)
    {
       document.getElementById("ekran").innerHTML = "nie dziel przez zero";
       
    }
}

function wynik()
{
    if(dzialanie == "")
    {
        document.getElementById("ekran").innerHTML = "nic nie dałeś baranie";
        console.log("pustka");
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
    if(dzialanie.length == 1)
    {
        dzialanie = "";
    }

    dzialanie = dzialanie.slice(0,dzialanie.length - 1);
    if(dzialanie.length > 0){
        document.getElementById("ekran").innerHTML = dzialanie;
    }
    else{
        document.getElementById("ekran").innerHTML = "";
        dzialanie = "";
        }
}