import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
/**
 * Creates Account records.
 */
export default class AccountCreator extends LightningElement {
    /** Status message when creating an Account. */
    createStatus = '';
    accountObject = ACCOUNT_OBJECT;
    accountFields = [NAME_FIELD, WEBSITE_FIELD];

    /** Handles successful Account creation. */
    
    // NOTE The Id is not available on the submit event. Use the success event to return the Id.
    // The handleAccountCreated method handles the success event.
    handleAccountCreated(evt) {
        this.createStatus = `Account record created. Id is ${evt.detail.id}.`;
        let eventField = evt.detail.id;
        console.log('EventField:'+eventField);

        const event = new CustomEvent('newrecord', {detail: { data: evt.detail },});
        console.log('The last event in handleAccountCreated method:'+JSON.stringify(event));
        this.dispatchEvent(event);
    }
}