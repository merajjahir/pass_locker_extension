console.log('content script is running')


let form =document.querySelectorAll('input');



chrome.runtime.onMessage.addListener( (request,sender, sendResponse) => 
  {
    if(request.usr_data.data =='background')
    {
      sendResponse({confirmation: "recived in the content script over"});

      for(input in form )
      {
  
          if(form[input]['name'] == 'email' || form[input]['type'] == 'email' )
          {
              form[input].value = request.usr_data.email;
          }else if(form[input]['name'] == 'password' || form[input]['type'] == 'password' && form[input]['name'] !== 'confirm_password'  )
          {
              form[input].value = request.usr_data.pass;
          }
  
      }
    }
  
      
  })

