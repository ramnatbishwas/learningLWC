import { LightningElement,api,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class GetInformationAboutThePage extends LightningElement {



    @api recordId; //This record id comes from the current record page which is in context
    
    @api objectApiName;//This object api name comes from the object the  record page belongs to

    @wire(CurrentPageReference)
    pageRef;
    

    get pageRefString() {
        console.log('CurrentPageReference:'+ this.CurrentPageReference);//undefined
        console.log('recordId:'+this.recordId);//0035g000005PKZJAA4
        console.log('objectApiName:'+this.objectApiName);//Contact
        console.log('pageRef:'+ JSON.stringify(this.pageRef));//{"type":"standard__recordPage","attributes":{"objectApiName":"Contact","recordId":"0035g000005PKZJAA4","actionName":"view"},"state":{}}
        return JSON.stringify(this.pageRef);
    }
}