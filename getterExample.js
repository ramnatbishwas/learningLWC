import { LightningElement} from 'lwc';

export default class GetterExample extends LightningElement {
    //You cannot perform calculations or operations in the html without using getter method.
    //If we use getter method in javascript, we can then perform expression in html
    //You cannot directly access the array values in the html. So let's use getter method
    Amount = [15 ,20,30,40,50];// problem stm is print the first value contained in the amount 
    number1= 4;
    number2 =6;
    get amountMethod(){
        return this.Amount[0];
       
    }
     
     
    get additionOfTwoNumbers(){
        return (this.number1 + this.number2);
        

    }


}