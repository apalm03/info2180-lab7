window.onload=function(){
    var search = document.getElementById('lookup')
    var httpRequest = new XMLHttpRequest();
    
    
    search.addEventListener('click',function(){
    
        var boxCheck = document.getElementById('lookupall').checked
        
        if(boxCheck==true){
            httpRequest.onreadystatechange= countryNotSpecified;
            httpRequest.open('GET','world.php?country=all=true',true);
             //httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            httpRequest.send();
        }else{
        
        var country_search=document.getElementById('country').value;
         httpRequest.onreadystatechange = countrySpecified;
         httpRequest.open('GET','world.php?country='+country_search, true);
         //httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         httpRequest.send();
    
       }
        
        })
        
        


    function countrySpecified() {
                 if(httpRequest.readyState===XMLHttpRequest.DONE){
                     if(httpRequest.status===200){
                
                        var response=httpRequest.responseText;
                        var output=document.getElementById('result');
                
                        output.innerHTML="<h3> Search Result<h3/>"+response;
                        
                         
                    }
                    else{
                     
                     alert("Encountered prolem with request");
                     
                        
                    }
                 }
                 
             }
             
         
             
    function countryNotSpecified(){
        if(httpRequest.readyState===XMLHttpRequest.DONE){
                     if(httpRequest.status===200){
                
                        var response=httpRequest.responseText;
                        var output=document.getElementById('result');
                
                        output.innerHTML="<h3> Search Result<h3/>"+response;
                    }
                    else{
                     alert("Encountered problem with request");
                    }
                 }
                 
             }
    
        
         
};