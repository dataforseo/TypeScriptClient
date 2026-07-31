export interface IAppendixErrorsResultInfo   {
        
        /** *code* */
        code?: number | undefined
        
        /** *message* */
        message?: string | undefined

    [key: string]: any;

    }

export class AppendixErrorsResultInfo  implements IAppendixErrorsResultInfo {

    
    /** *code* */

    code?: number | undefined;

    
    /** *message* */

    message?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppendixErrorsResultInfo) {

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
            this.code = data["code"];
            this.message = data["message"];
        }
    }

    static fromJS(data: any): AppendixErrorsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixErrorsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["code"] = this.code;
        data["message"] = this.message;
        return data;
    }
}