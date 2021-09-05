
console.log('popup script running');


//the background data handleing

let login_submit =document.getElementById('autofill');
let user_email = document.getElementById('name');
let user_password = document.getElementById('pass');



// console.log(autofill);
     autofill.addEventListener('click',()=>
     {
        let all_datas = {
	        data:'popup',
            email:user_email.value,
            password:user_password.value
        }

         chrome.runtime.sendMessage({all_datas},
         (response) => {console.log(response.confirmation)})
     })



