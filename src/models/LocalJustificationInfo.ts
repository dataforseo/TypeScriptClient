export interface ILocalJustificationInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** text snippet of local justification */
        text?: string | undefined

    [key: string]: any;

    }

export class LocalJustificationInfo  implements ILocalJustificationInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** text snippet of local justification */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: ILocalJustificationInfo) {

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
            this.text = data["text"];
        }
    }

    static fromJS(data: any): LocalJustificationInfo {
        data = typeof data === 'object' ? data : {};


        let result = new LocalJustificationInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["text"] = this.text;
        return data;
    }
}