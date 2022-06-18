import { LightningElement, api,wire } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import listt from '@salesforce/apex/PatientList.getpatient';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class viewformpatient extends LightningElement {
@wire (listt) PatientList;
@api recordId;
//@api objectApiName;

//@api delete;
DeleteAction(event) {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.recordId = event.target.value;
    deleteRecord(this.recordId)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent ({
                title: 'Success',
                message: 'Account Deleted',
                variant: 'success'
                    })
            );
           return refreshApex(this.PatientList);
                })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent ({
                title: 'Error',
                message: 'Account Not Deleted',
                variant: 'error'
                    })
            );
           console.log('uable to delete the record'+error.body.message);
                });

               
                
}

}