import { LightningElement,api } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';
export default class NavigationExampleLWC extends NavigationMixin(LightningElement) {
    @api recordId;
    Edit(){     
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'Account',
                    actionName: 'edit'
                },
            });
    }
    // Navigate to open Account record in PDF Format
    PDF(){
        this[NavigationMixin.GenerateUrl]({
            type: "standard__webPage",
            attributes: {
               url: '/apex/AccountDetailPDF?id=' +this.recordId
            }
        }).then(generatedUrl => {
            window.open(generatedUrl);
        });
    }
     
    
    // Navigation to lightning component
    navigateToLightningComponent() {
        this[NavigationMixin.Navigate]({
            "type": "standard__component",
            "attributes": {
                 
                "componentName": "c__auraPatientDetails"
            }
        });
    }
    AppCmp() {
        this[NavigationMixin.Navigate]({
            type: 'standard__app',
            attributes: {
               appTarget:'c__HRMS'  
            },
        });
    }
}