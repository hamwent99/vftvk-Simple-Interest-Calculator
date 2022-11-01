

// update interst rate over range slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// years option
function selectNumOfYears() {
  // var x = document.getElementById("years");
  // var i = x.selectedIndex;
  // document.getElementById("demo").innerHTML = x.options[i].text;
    var x = document.getElementById("years").selectedIndex;
  var y = document.getElementById("years").options;
  // alert("Index: " + y[x].index + " is " + y[x].text);
    document.getElementById("checkyear").value = y[x].text;
  alert(document.getElementById("checkyear").value);

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

    var years = document.getElementById("checkyear").value;
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