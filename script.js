window.onload = function() {
var Cur_date = new Date();
var Month = Cur_date.getMonth()+1;
var CurDate = Cur_date.getDate()+"."+Month+"."+Cur_date.getFullYear();
document.getElementById('CurDate').innerHTML = "Date: "+CurDate;
}