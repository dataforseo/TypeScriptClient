export interface IFormatsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** type of file format of the dataset for example: zip, html, csv */
        format?: string | undefined
        
        /** file size in bytes */
        size?: number | undefined

    [key: string]: any;

    }

export class FormatsElement  implements IFormatsElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** type of file format of the dataset for example: zip, html, csv */

    format?: string | undefined;

    
    /** file size in bytes */

    size?: number | undefined;

    [key: string]: any;


    constructor(data?: IFormatsElement) {

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
            this.format = data["format"];
            this.size = data["size"];
        }
    }

    static fromJS(data: any): FormatsElement {
        data = typeof data === 'object' ? data : {};


        let result = new FormatsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["format"] = this.format;
        data["size"] = this.size;
        return data;
    }
}