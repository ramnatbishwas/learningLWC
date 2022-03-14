public with sharing class lwcCustomMetaDataCtrl {

    @AuraEnabled( cacheable=true )  
    public static List < StudentsBasicDetails__mdt > fetchMetaListLwc() {
        
        List < StudentsBasicDetails__mdt > fetchMeta = [ SELECT Id, MasterLabel, City__c, Country__c, Email__c, Phone__c, Student_Name__c FROM StudentsBasicDetails__mdt ];
        return fetchMeta;

    }

}