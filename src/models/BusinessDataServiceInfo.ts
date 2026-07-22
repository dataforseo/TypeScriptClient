import { PriceInfo, IPriceInfo } from "./PriceInfo";


export interface IBusinessDataServiceInfo   {
        
        /** business category
Google My Business general category that best describes the services provided by the business entity */
        category?: string | undefined
        
        /** title of the element in SERP
the name of the business entity for which the results are collected */
        title?: string | undefined
        
        /** additional information on the business entity */
        snippet?: string | undefined
        
        price?: PriceInfo | undefined

    [key: string]: any;

    }

export class BusinessDataServiceInfo  implements IBusinessDataServiceInfo {

    
    /** business category
Google My Business general category that best describes the services provided by the business entity */

    category?: string | undefined;

    
    /** title of the element in SERP
the name of the business entity for which the results are collected */

    title?: string | undefined;

    
    /** additional information on the business entity */

    snippet?: string | undefined;

    price?: PriceInfo | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataServiceInfo) {

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
            this.category = data["category"];
            this.title = data["title"];
            this.snippet = data["snippet"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BusinessDataServiceInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataServiceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category"] = this.category;
        data["title"] = this.title;
        data["snippet"] = this.snippet;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        return data;
    }
}