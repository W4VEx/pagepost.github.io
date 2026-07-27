
let btnsub = document.getElementById('show')
let nsen = document.getElementById('nsen')
let senadd = document.getElementById('senadd')
let senphone = document.getElementById('senphone')
let shwad = document.getElementById('showaddress')
let shrev = document.getElementById('shna')
let showname = document.getElementById('showname')
let shnr = document.getElementById('shownamerec')
let shaddrev = document.getElementById('showaddrev')
let shph = document.getElementById('showphonerev')


btnsub.addEventListener('click', ()=>{


showname.innerHTML =  `<B> ชื่อผู้ส่ง </b> : ` +  $("#nsen").val();
showaddress.innerHTML =  `<b> ที่อยู่ผู้ส่ง </b> : ` + 
                        ` <b> ตำบล </b>: ` + $('#district').val() +
                        ` \u00A0 <b> อำเภอ </b> : ` + $('#amphoe').val() + 
                        ` \u00A0<b> จังหวัด </b> : ` + $('#province').val() + 
                        `\u00A0<b> รหัสไปรณีย์ </b> : ` + $('#zipcode').val();
showphone.innerHTML =  `<b> เบอร์โทรผู้ส่ง </b> : ` +  $("#senphone").val();


shnr.innerHTML =  `ชื่อผู้รับ : ` +  $("#recna").val();
shaddrev.innerHTML =  `ที่อยู่ผู้รับ : ` +  $("#revaadd").val();
shph.innerHTML =  `เบอร์โทรผู้รับ : ` +  $("#revphone").val();


localStorage.setItem('nsen', nsen.value);
localStorage.setItem('district', district.value);
localStorage.setItem('amphoe', amphoe.value);
localStorage.setItem('province', province.value);
localStorage.setItem('zipcode', zipcode.value);
localStorage.setItem('senphone', senphone.value);

localStorage.setItem('recna', recna.value);
localStorage.setItem('district2', district2.value);
localStorage.setItem('amphoe2', amphoe2.value);
localStorage.setItem('province2', province2.value);
localStorage.setItem('zipcode2', zipcode2.value);
localStorage.setItem('revphone', revphone.value);

window.location.href = "prints.html"

});








