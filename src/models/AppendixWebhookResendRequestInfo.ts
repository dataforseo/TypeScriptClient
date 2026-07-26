export interface IAppendixWebhookResendRequestInfo   {
        
        /** task identifier unique task identifier in our system in the UUID format you can specify up to 100 identifiers; each identifier in the task array must be specified as a separate object */
        id?: string | undefined

    [key: string]: any;

    }

export class AppendixWebhookResendRequestInfo  implements IAppendixWebhookResendRequestInfo {

    
    /** task identifier unique task identifier in our system in the UUID format you can specify up to 100 identifiers; each identifier in the task array must be specified as a separate object */

    id?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppendixWebhookResendRequestInfo) {

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
        }
    }

    static fromJS(data: any): AppendixWebhookResendRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixWebhookResendRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        return data;
    }
}