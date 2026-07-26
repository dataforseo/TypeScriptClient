import { PriceInfo, IPriceInfo } from "./PriceInfo";


export interface IKnowledgeGraphShoppingElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** pricing details contains the pricing details of the product or service featured in the result; if there is none, equals null */
        price?: PriceInfo | undefined
        
        /** reference source name or title */
        source?: string | undefined
        
        /** text alongside the link title */
        snippet?: string | undefined
        
        /** merchant account provider ecommerce site that hosts products or websites of individual sellers under the same merchant account example: by Google */
        marketplace?: string | undefined
        
        /** URL to the merchant account provider ecommerce site that hosts products or websites of individual sellers under the same merchant account */
        marketplace_url?: string | undefined

    [key: string]: any;

    }

export class KnowledgeGraphShoppingElement  implements IKnowledgeGraphShoppingElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of the element */

    title?: string | undefined;

    
    /** URL */

    url?: string | undefined;

    
    /** domain where a link points */

    domain?: string | undefined;

    
    /** pricing details contains the pricing details of the product or service featured in the result; if there is none, equals null */

    price?: PriceInfo | undefined;

    
    /** reference source name or title */

    source?: string | undefined;

    
    /** text alongside the link title */

    snippet?: string | undefined;

    
    /** merchant account provider ecommerce site that hosts products or websites of individual sellers under the same merchant account example: by Google */

    marketplace?: string | undefined;

    
    /** URL to the merchant account provider ecommerce site that hosts products or websites of individual sellers under the same merchant account */

    marketplace_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphShoppingElement) {

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
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.source = data["source"];
            this.snippet = data["snippet"];
            this.marketplace = data["marketplace"];
            this.marketplace_url = data["marketplace_url"];
        }
    }

    static fromJS(data: any): KnowledgeGraphShoppingElement {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphShoppingElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["source"] = this.source;
        data["snippet"] = this.snippet;
        data["marketplace"] = this.marketplace;
        data["marketplace_url"] = this.marketplace_url;
        return data;
    }
}