function MaxVal() {
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);

    if(x>y) {
        document.write("Number 1, "+x+" is the Max.")
    }
    else if(y>x) {
        document.write("Number 2, "+y+" is the Max.")
    }
    else {
        document.write("They are equal.")
    }
};

function ProdVal() {
    var a = document.getElementById("num4").value;
    var b = document.getElementById("num5").value;
    var c = document.getElementById("num6").value;

    if(a*b*c<0) {
        document.write("The sign of the product is negative(-).")
    }

    else if(a*b*c>0) {
        document.write("The sign of the product is positive(+).")
    }

    else if(a*b*c==0) {
        document.write("There is no sign. Product is 0.")
    }
};

function MileKilo() {
    var m = document.getElementById("mile").value;
    var k = document.getElementById("kilo").value;
    
   
    if (m>0){
        var km = m*1.609344
        document.getElementById("mile").value= m;
        document.getElementById("kilo").value= km;
    }
    else {
        var mile = k/1.609344
        document.getElementById("mile").value= mile;
        document.getElementById("kilo").value= k;
    }

};
function time() {
    var x = getHours();

    if (x>=0 && x<12){
        document.getElementById('message').innerHTML="Good Morning"
    }
    else if (x>=12 && x<17){
        document.getElementById('message').innerHTML="Good Afternoon"
    }
    else {
        document.getElementById('message').innerHTML="Good Evening"
    }
}