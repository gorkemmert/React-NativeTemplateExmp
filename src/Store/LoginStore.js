import { observable, action, makeObservable } from "mobx";  

class LoginStore        
{
    constructor(){
        makeObservable(this)         
    }
 
    @observable visible = false;       

    @action setVisible(visible){        
        this.visible = visible;    
    }  
}                                      

export default new LoginStore();  


