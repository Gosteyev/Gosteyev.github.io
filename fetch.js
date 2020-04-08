

 
    var myHeaders = new Headers();
    myHeaders.append("authority", "mike-api.ext.dev.bizzabo.com");
    myHeaders.append("pragma", "no-cache");
    myHeaders.append("cache-control", "no-cache");
    myHeaders.append("accept", "application/json");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("authorization", "Bizzabo token=\"3ZobSmYURBprO1OjkMDpxD\"");
    myHeaders.append("user-agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://mike-accounts.ext.dev.bizzabo.com");
    myHeaders.append("sec-fetch-site", "same-site");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("referer", "https://mike-accounts.ext.dev.bizzabo.com/8/events/4/contacts/1950830/edit");
    myHeaders.append("accept-language", "en-US,en;q=0.9,ru;q=0.8,la;q=0.7");
    myHeaders.append("cookie", "x-bz-preview=true; _ga=GA1.2.121534431.1582016793; _gid=GA1.2.1575987382.1582016793; __zlcmid=woivEDMNUtMBYc; fs_uid=rs.fullstory.com#1lwN#6532407369826304:4653005924958208#b92ea96e#/1606470034; fs_intercom=6532407369826304:4653005924958208; mp_412f41b9a2f5b1a17e172e08ee7b3691_mixpanel=%7B%22distinct_id%22%3A%202304501%2C%22%24device_id%22%3A%20%22170582891a65a5-0b3eecfd7ac4ff-317e0c5e-1fa400-170582891a7561%22%2C%22Platform%22%3A%20%22Web-Dashboard%22%2C%22AccountID%22%3A%20136896%2C%22AccountName%22%3A%20%22Bizzabo%20Account%22%2C%22BizzaboID%22%3A%202304501%2C%22IsBizzaboer%22%3A%20true%2C%22UserEmail%22%3A%20%22mikhail%40bizzabo.com%22%2C%22%24user_id%22%3A%202304501%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22EventID%22%3A%20210567%2C%22Event%22%3A%20%22Creating%20Opportunities%22%2C%22Event%20type%22%3A%20%22paid%22%7D; intercom-session-9loyuvh=UDNBQ2xlMHVEdCsyZUVhRndUY2ZVS0wrRDdGRjZ3YmxRRk9kT3MzZ2dRSnVuK05FMHVEMkJ0U0U0UGoxbkxNVC0tbUtkNER3ZHVadU5Td2l2Tmk5K0ZLdz09--200a8f4b6c37fbf18665b735530b185984b64fbf; mp_c84ac833b0a423e95fda61c79be8e79d_mixpanel=%7B%22distinct_id%22%3A%201950769%2C%22%24device_id%22%3A%20%22170578c8834281-017827ee7f3dcf-317e0c5e-1fa400-170578c88356e7%22%2C%22Platform%22%3A%20%22Web-Dashboard%22%2C%22AccountID%22%3A%208%2C%22AccountName%22%3A%20%22Bizzabo%20Account%22%2C%22EventID%22%3A%204%2C%22Event%22%3A%20%22Penultimate%22%2C%22Event%20type%22%3A%20%22paid%22%2C%22BizzaboID%22%3A%201950769%2C%22IsBizzaboer%22%3A%20true%2C%22UserEmail%22%3A%20%22mikhail%40bizzabo.com%22%2C%22%24user_id%22%3A%201950769%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdmreg-registration.ext.dev.bizzabo.com%2Feditor%2F8%2Fevents%2F5%2Fflow%2F92e7370f-a6f7-4c4e-80a5-2efcd6d79594%2F%22%2C%22%24initial_referring_domain%22%3A%20%22dmreg-registration.ext.dev.bizzabo.com%22%7D; apt.sid=AP-7DNWG5Q0C09F-2-1582114236770-24695169; apt.uid=AP-7DNWG5Q0C09F-2-1582114236773-92179868.0.2.5137a848-53e4-4617-ace8-1a6c69332201; intercom-session-lw4h9zbz=OHR1MnM1K0dCOTZuamVONUVzaFVuMHdiTDRJbkU1bVIrZVJYMzVEamszWmdyc2RvVkxpSDQvbjFOZDhrNmdQOS0tQjJtNWdiYnBMbnhxQ1VrMDRyQXhIQT09--ccc8ecf5f4760e4f5fd252545f8332ef879e102e");
    
    
    function run(){
        const promises = [];

        for (let i = 200; i < 500; i++){    
            var raw = JSON.stringify({
                "accountId":8,"custom":true,"type":"radio","values":[{
                    "type":"custom","form":null,"position":0,"entityType":"radio","value":"zxcv"},
                    {"type":"custom","form":null,"position":1,"entityType":"radio","value":"zxcv"}],
                    "categoryId":93942,"label":`zcvzxcv+${i}`,"name":`zxcvzxc+${i}`});
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
           promises.push(fetch("https://mike-api.ext.dev.bizzabo.com/api/v1/accounts/8/events/4/attributes?_nocache=1582114233885", requestOptions)) 
        }

        Promise.all(promises).then(() => console.log('done'))
    }
    