export interface IExploreBrandsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the row */
        title?: string | undefined
        
        /** URL of element */
        url?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** URL of the image */
        image_url?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class ExploreBrandsElement  implements IExploreBrandsElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of the row */

    title?: string | undefined;

    
    /** URL of element */

    url?: string | undefined;

    
    /** domain where a link points */

    domain?: string | undefined;

    
    /** description of the results element in SERP */

    description?: string | undefined;

    
    /** URL of the image */

    image_url?: string | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    constructor(data?: IExploreBrandsElement) {

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
            this.description = data["description"];
            this.image_url = data["image_url"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): ExploreBrandsElement {
        data = typeof data === 'object' ? data : {};


        let result = new ExploreBrandsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["description"] = this.description;
        data["image_url"] = this.image_url;
        data["xpath"] = this.xpath;
        return data;
    }
}