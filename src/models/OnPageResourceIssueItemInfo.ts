export interface IOnPageResourceIssueItemInfo   {
        
        /** line where the error was found */
        line?: number | undefined
        
        /** column where the error was found */
        column?: number | undefined
        
        /** text message of the error the full list of possible HTML errors can be found here */
        message?: string | undefined
        
        /** general status code you can find the full list of the response codes here Note: we strongly recommend designing a necessary system for handling related exceptional or error conditions */
        status_code?: number | undefined

    [key: string]: any;

    }

export class OnPageResourceIssueItemInfo  implements IOnPageResourceIssueItemInfo {

    
    /** line where the error was found */

    line?: number | undefined;

    
    /** column where the error was found */

    column?: number | undefined;

    
    /** text message of the error the full list of possible HTML errors can be found here */

    message?: string | undefined;

    
    /** general status code you can find the full list of the response codes here Note: we strongly recommend designing a necessary system for handling related exceptional or error conditions */

    status_code?: number | undefined;

    [key: string]: any;


    constructor(data?: IOnPageResourceIssueItemInfo) {

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
            this.line = data["line"];
            this.column = data["column"];
            this.message = data["message"];
            this.status_code = data["status_code"];
        }
    }

    static fromJS(data: any): OnPageResourceIssueItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageResourceIssueItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["line"] = this.line;
        data["column"] = this.column;
        data["message"] = this.message;
        data["status_code"] = this.status_code;
        return data;
    }
}