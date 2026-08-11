export interface IShortVideosElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *title of a given link element* */
        title?: string | undefined
        
        /** *source URL* */
        url?: string | undefined
        
        /** *domain where a link points* */
        domain?: string | undefined
        
        /** *reference source name or title* */
        source?: string | undefined

    [key: string]: any;

    }

export class ShortVideosElement  implements IShortVideosElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *title of a given link element* */

    title?: string | undefined;

    
    /** *source URL* */

    url?: string | undefined;

    
    /** *domain where a link points* */

    domain?: string | undefined;

    
    /** *reference source name or title* */

    source?: string | undefined;

    [key: string]: any;


    constructor(data?: IShortVideosElement) {

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
            this.source = data["source"];
        }
    }

    static fromJS(data: any): ShortVideosElement {
        data = typeof data === 'object' ? data : {};


        let result = new ShortVideosElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["source"] = this.source;
        return data;
    }
}