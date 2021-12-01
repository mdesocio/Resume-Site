function calc(){
    var x = document.getElementById('payrate').value
    var y = document.getElementById('hours').value

    var x = parseFloat(x)
    var y = parseFloat(y)

    var salary = x*y*52

    document.getElementById('sum').innerHTML = 'The salary is: $'+salary+"."
}