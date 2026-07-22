export interface IKnowledgeGraphListElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** subtitle of the item */
        subtitle?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class KnowledgeGraphListElement  implements IKnowledgeGraphListElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** subtitle of the item */

    subtitle?: string | undefined;

    
    /** sitelink URL */

    url?: string | undefined;

    
    /** domain in SERP */

    domain?: string | undefined;

    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphListElement) {

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
            this.subtitle = data["subtitle"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.image_url = data["image_url"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): KnowledgeGraphListElement {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphListElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["subtitle"] = this.subtitle;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["image_url"] = this.image_url;
        data["xpath"] = this.xpath;
        return data;
    }
}