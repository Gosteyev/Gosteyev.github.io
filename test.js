function Machine() {
    var enabled = false;
  
    this.enable = function() {
      enabled = true;
    };
  
    this.disable = function() {
      enabled = false;
    };
}

class CoffeMachine extends Machine{
    constructor(){
        super();
        this.runTest = () => {
            console.log('TEst...', this)
        }
    }
}


class Braun extends CoffeMachine{
  constructor(){
    super();
    this.brand = 'Braun';
  }

  get showBrand (){
    return this.brand;    
  }
}



const brandedItem = new Braun();

console.log(brandedItem);