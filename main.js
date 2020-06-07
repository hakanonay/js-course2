

var shippingName = document.querySelector('#shippingName')
var shippingZip = document.querySelector('#shippingZip')
var billingName = document.querySelector('#billingName')
var billingZip = document.querySelector('#billingZip')

var same = document.querySelector('#same')



function billingFunction(){

   
   
if(same.checked == true){
    billingName.value = shippingName.value
billingZip.value = shippingZip.value
}else{
    billingName.value = null
billingZip.value = null
}

  
    
}