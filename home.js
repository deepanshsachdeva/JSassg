var data = [
  {"number":123, "plan":100, "discount":5},
  {"number":456, "plan":250, "discount":10},
  {"number":789, "plan":500, "discount":15}
];

var phBill = new function(){
  var phoneNumber;
  var numberOfCalls;
  var plan;
  var discount;
  var bill;

  this.setValues = function(phNo, callsNo, planInp, disc){
    phoneNumber = phNo;
    numberOfCalls = callsNo;
    plan = planInp;
    discount = disc;
  };

  this.generateBill = function(){
    bill = plan + numberOfCalls*1.25 - discount;
    document.getElementById('bill').innerHTML = bill;
  };
}

document.getElementById('submitBtn').onclick = function(){
  var phno = document.getElementById('phno').value;
  var callno = document.getElementById('callno').value;
  var billdiv = document.getElementById('bill');

  var phoneBill = phBill;

  data.forEach(function(k,v){
    if(data[v].number == phno){
      // var bill = data[v].plan + Number(callno)*1.25 -  data[v].discount;
      // billdiv.innerHTML = bill;
      phoneBill.setValues(phno, Number(callno), data[v].plan, data[v].discount);

      phoneBill.generateBill();
    }
  });
}
// });
