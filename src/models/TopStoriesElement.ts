export interface ITopStoriesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string | undefined
        
        /** website domain */
        domain?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** the date when the page source of the element was published */
        date?: string | undefined
        
        /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** badges relevant to the element */
        badges?: string[] | undefined

    [key: string]: any;

    }

export class TopStoriesElement  implements ITopStoriesElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string | undefined;
    
    /** website domain */

    domain?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** the date when the page source of the element was published */

    date?: string | undefined;
    
    /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** badges relevant to the element */

    badges?: string[] | undefined;

    [key: string]: any;


    constructor(data?: ITopStoriesElement) {

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
            this.source = data["source"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.date = data["date"];
            this.amp_version = data["amp_version"];
            this.timestamp = data["timestamp"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.badges = data["badges"];
        }
    }

    static fromJS(data: any): TopStoriesElement {
        data = typeof data === 'object' ? data : {};


        let result = new TopStoriesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["source"] = this.source;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["date"] = this.date;
        data["amp_version"] = this.amp_version;
        data["timestamp"] = this.timestamp;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["badges"] = this.badges;
        return data;
    }
}