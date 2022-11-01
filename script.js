

// update interst rate over range slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//compute your simple interst
function calculate(){
    var principal = 0;
    var years = 0;
    var rate = 0;
    var SI= 0;    
    var principal = document.getElementById("principal").value;    
    document.getElementById("p_amt").innerHTML=principal;

    var rate = document.getElementById("rate").value;
    document.getElementById("int_rate").innerHTML=rate;

    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);    
    document.getElementById("for_years").innerHTML=year;

    var SI = principal * years * rate /100;

    SI = (principal*years*rate)/100;
    document.getElementById("res").innerHTML=SI;

    var element = document.getElementById('to-show');
    if (element.classList.contains('hide') && principal != null && years != null && SI != null && SI != null) {
        element.classList.remove("hide");
        element.classList.add("show");
    } else {
        element.classList.remove("show");
        element.classList.add("hide");
    }
}