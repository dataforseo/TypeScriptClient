export interface IBacklinksRedirectInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** *general status code* you can find the full list of the response codes [here](/v3/appendix/errors) **Note:** we strongly recommend designing a necessary system for handling related exceptional or error conditions */
        status_code?: number | undefined
        
        /** *indirect link URL* */
        url?: string | undefined

    [key: string]: any;

    }

export class BacklinksRedirectInfo  implements IBacklinksRedirectInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** *general status code* you can find the full list of the response codes [here](/v3/appendix/errors) **Note:** we strongly recommend designing a necessary system for handling related exceptional or error conditions */

    status_code?: number | undefined;

    
    /** *indirect link URL* */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksRedirectInfo) {

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
            this.type = data["type"];
            this.status_code = data["status_code"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): BacklinksRedirectInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksRedirectInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["status_code"] = this.status_code;
        data["url"] = this.url;
        return data;
    }
}