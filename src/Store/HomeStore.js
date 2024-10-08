import { observable, action, makeObservable } from "mobx";  

class HomeStore        
{
    constructor(){
        makeObservable(this)         
    }

    
    @observable saleRent = true;  
    @observable roomCount = "0";    
    
    @observable sliderMin = "0";   
    @observable sliderMax = "1000"; 

    @observable visible = true; 
    
    @observable saleVisible = false; 
    @observable roomVisible = false; 
    @observable priceVisible = false; 

    @observable index = "";

    @observable internet = true; 

    @action setSaleRent(saleRent){        
        this.saleRent = saleRent;    
    }            

    @action setRoomCount(roomCount){        
        this.roomCount = roomCount;    
    }   

    @action setSliderMin(sliderMin){        
        this.sliderMin = sliderMin;    
    }  
    
    @action setSliderMax(sliderMax){        
        this.sliderMax = sliderMax;    
    }   

    @action setVisible(visible){        
        this.visible = visible;    
    }  

    @action setSaleVisible(saleVisible){        
        this.saleVisible = saleVisible;    
    }  

    @action setRoomVisible(roomVisible){        
        this.roomVisible = roomVisible;    
    } 
    
    @action setPriceVisible(priceVisible){        
        this.priceVisible = priceVisible;    
    }  

    @action setIndex(index){        
        this.index = index;    
    }  

    @action setInternet(internet){        
        this.internet = internet;    
    }  

}                                      

export default new HomeStore();  


