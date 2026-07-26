export interface IMessageInfo   {
        
        /** level of error can take the following values: fatal, error, warning, info */
        level?: string | undefined
        
        /** message associated with an error message providing the details of the detected error */
        message?: string | undefined

    [key: string]: any;

    }

export class MessageInfo  implements IMessageInfo {

    
    /** level of error can take the following values: fatal, error, warning, info */

    level?: string | undefined;

    
    /** message associated with an error message providing the details of the detected error */

    message?: string | undefined;

    [key: string]: any;


    constructor(data?: IMessageInfo) {

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
            this.level = data["level"];
            this.message = data["message"];
        }
    }

    static fromJS(data: any): MessageInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MessageInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["level"] = this.level;
        data["message"] = this.message;
        return data;
    }
}