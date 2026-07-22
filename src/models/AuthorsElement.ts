export interface IAuthorsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** name of the dataset author */
        name?: string | undefined
        
        /** author’s link URL */
        url?: string | undefined
        
        /** author’s link domain */
        domain?: string | undefined

    [key: string]: any;

    }

export class AuthorsElement  implements IAuthorsElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** name of the dataset author */

    name?: string | undefined;

    
    /** author’s link URL */

    url?: string | undefined;

    
    /** author’s link domain */

    domain?: string | undefined;

    [key: string]: any;


    constructor(data?: IAuthorsElement) {

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
            this.name = data["name"];
            this.url = data["url"];
            this.domain = data["domain"];
        }
    }

    static fromJS(data: any): AuthorsElement {
        data = typeof data === 'object' ? data : {};


        let result = new AuthorsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["name"] = this.name;
        data["url"] = this.url;
        data["domain"] = this.domain;
        return data;
    }
}