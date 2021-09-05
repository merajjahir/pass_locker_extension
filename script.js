console.log('content script is running')


let form =document.querySelectorAll('input');

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) =>  
{	
  if(request.all_recevied_data_frm_database.data == 'background')
  {   
    sendResponse({cnfrm: "recived in the content script over"})
 
    	console.log('i am food');
	    // console.log(request.all_recevied_data_frm_database);

      let all_data = request.all_recevied_data_frm_database.site_pass;
      let pass = all_data[1];
      let email = all_data[0];
      // console.log(pass,email);
      
      
      for(input in form )
      {

            if(form[input]['name'] == 'email' || form[input]['type'] == 'email' )
            {
              form[input].value = email||'WHAT SHIT ';
            
            }else if(form[input]['name'] == 'password' || form[input]['type'] == 'password' && form[input]['name'] !== 'confirm_password'  )
            {
              form[input].value =pass||'not_pass';
              console.log(pass);
            }	

      }
  
   
	
  }

  
})

