export interface IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo   {
        
        /** target technology
required field
you can find the full list of technologies you can specify here on this page
example:
'Salesforce' */
        technology?: string | undefined
        
        /** starting date of the time range
optional field
minimum value: 2022-10-31
if you don’t specify this field, the minimum value will be used by default
date format: 'yyyy-mm-dd'
example:
'2023-06-01' */
        date_from?: string | undefined
        
        /** ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: 'yyyy-mm-dd'
example:
'2023-01-15' */
        date_to?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo  implements IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo {

    
    /** target technology
required field
you can find the full list of technologies you can specify here on this page
example:
'Salesforce' */

    technology?: string | undefined;

    
    /** starting date of the time range
optional field
minimum value: 2022-10-31
if you don’t specify this field, the minimum value will be used by default
date format: 'yyyy-mm-dd'
example:
'2023-06-01' */

    date_from?: string | undefined;

    
    /** ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: 'yyyy-mm-dd'
example:
'2023-01-15' */

    date_to?: string | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.technology = data["technology"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["technology"] = this.technology;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["tag"] = this.tag;
        return data;
    }
}