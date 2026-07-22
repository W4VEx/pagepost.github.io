
let btnsub = document.getElementById('show')
let nsen = document.getElementById('nsen')
let senadd = document.getElementById('senadd')
let senphone = document.getElementById('senphone')

let shrev = document.getElementById('shna')
let showname = document.getElementById('showname')
let shnr = document.getElementById('shownamerec')
let shaddrev = document.getElementById('showaddrev')
let shph = document.getElementById('showphonerev')

btnsub.addEventListener('click', ()=>{


showname.innerHTML =  `ชื่อผู้ส่ง : ` +  $("#nsen").val();
showaddress.innerHTML =  `ที่อยู่ผู้ส่ง : ` +  $("#senadd").val();
showphone.innerHTML =  `เบอร์โทรผู้ส่ง : ` +  $("#senphone").val();


shnr.innerHTML =  `ชื่อผู้รับ : ` +  $("#recna").val();
shaddrev.innerHTML =  `ที่อยู่ผู้รับ : ` +  $("#revaadd").val();
shph.innerHTML =  `เบอร์โทรผู้รับ : ` +  $("#revphone").val();


localStorage.setItem('nsen', nsen.value);
localStorage.setItem('senadd', senadd.value);
localStorage.setItem('senphone', senphone.value);

localStorage.setItem('recna', recna.value);
localStorage.setItem('revaadd', revaadd.value);
localStorage.setItem('revphone', revphone.value);

window.location.href = "prints.html"

})

