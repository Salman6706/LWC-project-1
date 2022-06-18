public with sharing class PatientList {   
    @AuraEnabled(cacheable=true)
         public static List <Patient_Detail__c> getpatient(){
             return [select Name,Gender__c  from Patient_Detail__c WITH SECURITY_ENFORCED];
             }    
 }
 