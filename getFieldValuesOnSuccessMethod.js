import OrderNumber from '@salesforce/schema/Order.OrderNumber';
import { LightningElement } from 'lwc';

export default class GetFieldValuesOnSuccessMethod extends LightningElement {

  

  
    handleSuccess( event ) {    
    
        const payload = event.detail;            
         var objJSON = JSON.parse(JSON.stringify(payload));
        //var objJSON = JSON.stringify(payload);   
        console.log(objJSON);
        alert(objJSON["fields"]["Industry"]["value"]); 
        // Or  
        // alert(objJSON.fields.Industry.value);     
    
    }  
  
}  