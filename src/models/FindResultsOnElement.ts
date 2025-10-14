export interface IFindResultsOnElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** website domain */
        domain?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string | undefined

    [key: string]: any;

    }

export class FindResultsOnElement  implements IFindResultsOnElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** website domain */

    domain?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string | undefined;

    [key: string]: any;


    constructor(data?: IFindResultsOnElement) {

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
            this.domain = data["domain"];
            this.url = data["url"];
            this.source = data["source"];
        }
    }

    static fromJS(data: any): FindResultsOnElement {
        data = typeof data === 'object' ? data : {};


        let result = new FindResultsOnElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["source"] = this.source;
        return data;
    }
}