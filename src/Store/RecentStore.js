import { observable, action, makeObservable } from "mobx";  

class RecentStore       
{
   constructor(){
       makeObservable(this)  
   }

   @observable mail = false;   //mail switch   
   @observable natificationVisible = false;

   @action setmail(mail){                
       this.mail = mail;          
   } 
   @observable push = false;   //push natification         
  
   @action setpush(push){                
       this.push = push;          
   } 

   @observable checked = false;          

   @action setCheckbox(checked){                
       this.checked = checked;          
   }

    @action setNatification(natificationVisible){                
        this.natificationVisible = natificationVisible;          
    }

}                  

export default new RecentStore();