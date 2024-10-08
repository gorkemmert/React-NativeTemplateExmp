import { observable, action, makeObservable } from "mobx";  

class ListingStore        
{
    constructor(){
        makeObservable(this)         
    }
 
    @observable WebViewVisible = false;   
    @observable url = "";   

    @action setWebViewVisible(WebViewVisible){        
        this.WebViewVisible = WebViewVisible;    
    }  

    @action setUrl(url){        
        this.url = url;    
    }  
}                                      

export default new ListingStore();  


