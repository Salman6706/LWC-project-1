import { LightningElement } from 'lwc';
import PATIENT_DETAIL_OBJECT from '@salesforce/schema/Patient_Detail__c';
import NAME_FIELD from '@salesforce/schema/Patient_Detail__c.Name';
import GENDER_FIELD from '@salesforce/schema/Patient_Detail__c.Gender__c';
import EMAIL_FIELD from '@salesforce/schema/Patient_Detail__c.Email__c';

 
export default class AccountCreator extends LightningElement {

    PatientObj = PATIENT_DETAIL_OBJECT ;
    Fields = [NAME_FIELD, GENDER_FIELD,EMAIL_FIELD];

    change(){
         
      }
}