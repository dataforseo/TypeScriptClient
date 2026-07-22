export interface IAmazonLabelElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined

    [key: string]: any;

    }

export class AmazonLabelElement  implements IAmazonLabelElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of the element */

    title?: string | undefined;

    
    /** search URL with refinement parameters */

    url?: string | undefined;

    
    /** domain in SERP */

    domain?: string | undefined;

    [key: string]: any;


    constructor(data?: IAmazonLabelElement) {

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
            this.title = data["title"];
            this.url = data["url"];
            this.domain = data["domain"];
        }
    }

    static fromJS(data: any): AmazonLabelElement {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonLabelElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        return data;
    }
}