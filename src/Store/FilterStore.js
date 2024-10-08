import { observable, action, makeObservable } from "mobx";  

class FilterStore        
{
    constructor(){
        makeObservable(this)         
    }
 
    @observable saleRentSwitch = "sale";       

    @action setSaleRentSwitch(saleRentSwitch){        
        this.saleRentSwitch = saleRentSwitch;    
    }  

    @observable apiurl = "";

    @action setapiurl(apiurl){
        this.apiurl=apiurl;
    }
}                                      

export default new FilterStore();  


