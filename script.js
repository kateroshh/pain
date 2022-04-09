const newWindow = window.open("https://test-gateway.tillpayments.com/redirect/99171d11460cc3950e07/MjE3Yzk0YjIxZGFiOGEwNTY5YzMxNTk4NGE0YzA5Y2Y4ZDk4MmU5Y2I1Zjk0M2RjNTY0YTVhZTdhYjUwN2VhYjMxMDEzNWMwODNmN2ViOTY0ZjUyYjExYmI5NTJmMjE5NGM4MzVhMzY5ODRlMzFhZTMxMTEzNDM3OWE0MmZhY2Y=" , '_blank');


newWindow.onload = function() {
    newWindow.document.querySelector("#pan").value = 4111111111111111;
    newWindow.document.getElementById("first_name").value = 'kkk';
    newWindow.alert('kk');
    newWindow.document.getElementById('payment-form').submit();
}


//const first_name = document.getElementById("first_name").value;
//console.log(first_name)
//const last_name = document.getElementById("last_name").value;
//const pan = document.getElementById("pan").value;

/*
document.getElementById("first_name").value='Roman1';
document.getElementById("last_name").value='Ros1';
document.getElementById("pan").value='4111111111111111';
*/
/*
var first = document.getElementById("first").value;
var second = document.getElementById("second").value;
var ev = document.getElementById("evaluate");
evaluate.onclick= function() {
    var res = first + second;
    document.getElementById("result").innerHTML=res;
}
*/
