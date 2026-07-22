export interface IBusinessDataSocialMediaPinterestLiveRequestInfo   {
        
        /** target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array */
        targets?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BusinessDataSocialMediaPinterestLiveRequestInfo  implements IBusinessDataSocialMediaPinterestLiveRequestInfo {

    
    /** target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array */

    targets?: string[] | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataSocialMediaPinterestLiveRequestInfo) {

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
            this.targets = data["targets"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BusinessDataSocialMediaPinterestLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataSocialMediaPinterestLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["targets"] = this.targets;
        data["tag"] = this.tag;
        return data;
    }
}