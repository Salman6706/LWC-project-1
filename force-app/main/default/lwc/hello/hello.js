import { LightningElement, track } from 'lwc';

export default class Hello extends LightningElement {
     
     msg1="Hello";
     msg2;
     visibility;

     handleClick(event){
          this.msg2="Welcome to the world";

     }
     changevalue(event){
        if(event.target.checked){
             this.visibility=true;

        }else {
          this.visibility=false;

        }
     }

    
     
      
   
    
   
     sum1(event) {
       this.num11 = (event.target.value);
     }
     sum2(event) {
       this.num2 = event.target.value;
     } 

     calculate() {
          this.result = Number(this.num11) + Number(this.num2);
        }
    
    
}

     


