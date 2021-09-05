
console.log('background running');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => 
{
  if(request.all_datas.data == 'popup')
  { 
    sendResponse({confirmation: "recived in the background over"})

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>
    {
        let tab = tabs[0];
        let encoded_url = encodeURIComponent(tab.url);
        //i made some puni god mistake in the following line
        another_massage(tab.id,encoded_url,request.all_datas.email,request.all_datas.password);
        //console.log(response.confirmation);  

    })
  
  }
  
})

function another_massage(tab_id,current_url,email,password) 
{

    let fetch_data = async (tab_id,current_url,email,password) =>
    {

        let all_datas = {
            email:email,
            password:password,
	        tab_url:current_url
        }
        let all_data_json = JSON.stringify(all_datas);
        //console.log(all_data_json);

        let data_entry_server_to_database = await fetch('http://localhost:8000/api/passlocker_extension_server', 
                                                    { 
                                                        method: 'POST',
                                                        body: new URLSearchParams(`all_data=${all_data_json}`),
                                                    }
                                                );



	    //i need to convert the data_receive to text() or json() maybe;
        let data_receive = await data_entry_server_to_database.json();
        console.log(data_receive);

        //the following line of codes are suppose to run after all the function is done running and all the 
        // information is loaded
        let all_recevied_data_frm_database = {
            data: 'background',
            site_pass: data_receive
        };
        console.log(all_recevied_data_frm_database);

        if(all_recevied_data_frm_database.site_pass)
        {
            chrome.tabs.sendMessage(tab_id,{all_recevied_data_frm_database},
            (response) =>   
            {
                try { console.log(response.cnfrm)}catch(err) {console.log('failed confirmaion ')}
            });
        }

    }
    fetch_data(tab_id,current_url,email,password);
  
  


}


