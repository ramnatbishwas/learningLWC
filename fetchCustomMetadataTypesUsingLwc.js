import { LightningElement, wire  } from 'lwc';
import fetchMetaListLwc from '@salesforce/apex/lwcCustomMetaDataCtrl.fetchMetaListLwc';
const COLUMNS = [
    { label: 'Label', fieldName: 'MasterLabel' },
    { label: 'Student Name', fieldName: 'Student_Name__c' },
    { label: 'Phone', fieldName: 'Phone__c' },
    { label: 'Email', fieldName: 'Email__c' },
    { label: 'Country', fieldName: 'Country__c' },
    { label: 'City', fieldName: 'City__c' },
];

export default class FetchCustomMetadataTypesUsingLwc extends LightningElement {
    records;
    wiredRecords;
    error;
    columns = COLUMNS;
    draftValues = [];

    @wire( fetchMetaListLwc )  
    wiredRecs( value ) {

        this.wiredRecords = value;
        const { data, error } = value;

        if ( data ) {
                        
            this.records = data;
            this.error = undefined;

        } else if ( error ) {

            this.error = error;
            this.records = undefined;

        }

    } 
}