export interface IOnPageMicrodataRequestInfo   {
        
        /** ID of the task required field you can get this ID in the response of the Task POST endpoint example: '07131248-1535-0216-1000-17384017ad04' */
        id?: string | undefined
        
        /** resource URL required field you can get this URL in the response of the Pages endpoint example: https://dataforseo.com/apis */
        url?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class OnPageMicrodataRequestInfo  implements IOnPageMicrodataRequestInfo {

    
    /** ID of the task required field you can get this ID in the response of the Task POST endpoint example: '07131248-1535-0216-1000-17384017ad04' */

    id?: string | undefined;

    
    /** resource URL required field you can get this URL in the response of the Pages endpoint example: https://dataforseo.com/apis */

    url?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageMicrodataRequestInfo) {

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
            this.id = data["id"];
            this.url = data["url"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): OnPageMicrodataRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageMicrodataRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["url"] = this.url;
        data["tag"] = this.tag;
        return data;
    }
}