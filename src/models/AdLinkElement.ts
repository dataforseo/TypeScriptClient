export interface IAdLinkElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** reference page title */
        title?: string | undefined
        
        /** link description */
        description?: string | undefined
        
        /** reference page URL */
        url?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** the identifier of the ad */
        ad_aclk?: string | undefined

    [key: string]: any;

    }

export class AdLinkElement  implements IAdLinkElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** reference page title */

    title?: string | undefined;
    
    /** link description */

    description?: string | undefined;
    
    /** reference page URL */

    url?: string | undefined;
    
    /** domain where a link points */

    domain?: string | undefined;
    
    /** the identifier of the ad */

    ad_aclk?: string | undefined;

    [key: string]: any;


    constructor(data?: IAdLinkElement) {

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
            this.ad_aclk = data["ad_aclk"];
        }
    }

    static fromJS(data: any): AdLinkElement {
        data = typeof data === 'object' ? data : {};


        let result = new AdLinkElement();
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
        data["ad_aclk"] = this.ad_aclk;
        return data;
    }
}