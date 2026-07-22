export interface ILlmMessageChainItem   {
        
        /** role of the user from whom the message originates */
        role?: string | undefined
        
        /** message text */
        message?: string | undefined

    [key: string]: any;

    }

export class LlmMessageChainItem  implements ILlmMessageChainItem {

    
    /** role of the user from whom the message originates */

    role?: string | undefined;

    
    /** message text */

    message?: string | undefined;

    [key: string]: any;


    constructor(data?: ILlmMessageChainItem) {

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
            this.role = data["role"];
            this.message = data["message"];
        }
    }

    static fromJS(data: any): LlmMessageChainItem {
        data = typeof data === 'object' ? data : {};


        let result = new LlmMessageChainItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["role"] = this.role;
        data["message"] = this.message;
        return data;
    }
}