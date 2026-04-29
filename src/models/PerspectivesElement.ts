export interface IPerspectivesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** website domain */
        domain?: string | undefined
        
        /** the date when the page source of the element was published */
        date?: string | undefined
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class PerspectivesElement  implements IPerspectivesElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** website domain */

    domain?: string | undefined;
    
    /** the date when the page source of the element was published */

    date?: string | undefined;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IPerspectivesElement) {

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
            this.description = data["description"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.date = data["date"];
            this.source = data["source"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): PerspectivesElement {
        data = typeof data === 'object' ? data : {};


        let result = new PerspectivesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["date"] = this.date;
        data["source"] = this.source;
        data["timestamp"] = this.timestamp;
        return data;
    }
}