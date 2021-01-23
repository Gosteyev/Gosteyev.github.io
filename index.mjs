import { Select } from './select/select.mjs';
import './select/styles.scss';

const select = new Select('select', {
    placeholder: "Select something",
    data: [
        {id: 1, value: 'React'},
        {id: 2, value: 'Vue'},
        {id: 3, value: 'Angular'},
        {id: 4, value: 'Node js'},
        {id: 5, value: 'Next'}
    ]
})
console.log('SELECT', select)
window.__select = select;

const promises = [];
for(let i = 0; i < 150; i++){
    promises.push(
        fetch("https://mike-accounts.ext.dev.bizzabo.com/api/v2/agenda/accounts/9/events/2/sessions", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8,la;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://miky-accounts.ext.dev.bizzabo.com/9/events/2/apps/agenda/create",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": `{\"sponsors\":[],\"sponsorsTitle\":\"Sponsored By:\",\"filters\":[],\"imageType\":null,\"selectedLists\":[],\"enableVirtualSession\":false,\"enableRecordingSession\":false,\"ticketTypes\":[],\"contactLists\":[],\"recordingTicketTypes\":[],\"prerollSessionRequest\":null,\"title\":\"AAA-${i}\",\"endDate\":null,\"eventId\":\"2\",\"accountId\":\"9\",\"endMinute\":null,\"startDate\":null,\"startMinute\":null,\"endDateString\":null,\"startDateString\":null,\"locationId\":\"\",\"associatedContacts\":{\"contactListIds\":[]}}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
    )
}


fetch("https://mike-accounts.ext.dev.bizzabo.com/api/v2/agenda/accounts/9/events/2/sessions?_nocache=1597658896846", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8,la;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://mike-accounts.ext.dev.bizzabo.com/9/events/2/apps/agenda/create",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"sponsors\":[],\"sponsorsTitle\":\"Sponsored By:\",\"filters\":[],\"imageType\":null,\"selectedLists\":[],\"enableVirtualSession\":false,\"enableRecordingSession\":false,\"ticketTypes\":[1,2],\"contactLists\":[],\"recordingTicketTypes\":[1,2],\"prerollSessionRequest\":null,\"title\":\"TEST\",\"endDate\":null,\"eventId\":\"2\",\"accountId\":\"9\",\"endMinute\":null,\"startDate\":null,\"startMinute\":null,\"endDateString\":null,\"startDateString\":null,\"locationId\":\"\",\"associatedContacts\":{\"contactListIds\":[]}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});


if(document.readyState !== 'loading'){
	const body = document.body;

  const config = {
    	childList: true,
      	subtree: true,
        attributes: true,
      characterData: true
    	
	}; 
	const callback = function(mutationsList) {
    	for (let mutation of mutationsList) {
        	if (mutation.type === 'childList') {
          	    const tooltip = mutation.addedNodes[0];
          	    if (tooltip && tooltip.id === 'table-tooltip'){
          		    const textContainer = tooltip.childNodes[1];
            	    if (textContainer){
                      if (textContainer.innerText === 'Remove from My interests'){
							textContainer.innerText = 'Remove from My Agenda';
						} else {
                        textContainer.innerText = 'Add to My Agenda';
                        }
                    } 
                }
            }  else if(mutation.type === 'characterData'){
               if(mutation.target.data === 'Add to My Interests'){
                 mutation.target.textContent = 'Add to My Agenda';
               }else if(mutation.target.data === 'Remove from My Interests' || mutation.target.data === 'Remove from My interests'){
                 mutation.target.textContent = 'Remove from My Agenda';
               }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(body, config);
}



document.addEventListener('DOMContentLoaded', function(){
	const checkbox = document.querySelector('.registration-footer .xxs-field .legal-check');
  	console.log('CHECK', checkbox);

 });