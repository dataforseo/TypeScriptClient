export interface IBusinessListingAggregationInfo   {
        
        /** *the most mentioned related categories* top categories displayed with the number of businesses in each category */
        top_categories?: { [key: string]: number; } | undefined
        
        /** *the most mentioned counties* country codes with the biggest number of businesses in the category */
        top_countries?: { [key: string]: number; } | undefined
        
        /** *number of unique websites* */
        websites_count?: number | undefined
        
        /** *item types* the number of items in the `items` array */
        count?: number | undefined
        
        /** *the most mentioned service details* service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute */
        top_attributes?: { [key: string]: number; } | undefined
        
        /** *top keywords mentioned in customer reviews* contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword */
        top_place_topics?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class BusinessListingAggregationInfo  implements IBusinessListingAggregationInfo {

    
    /** *the most mentioned related categories* top categories displayed with the number of businesses in each category */

    top_categories?: { [key: string]: number; } | undefined;

    
    /** *the most mentioned counties* country codes with the biggest number of businesses in the category */

    top_countries?: { [key: string]: number; } | undefined;

    
    /** *number of unique websites* */

    websites_count?: number | undefined;

    
    /** *item types* the number of items in the `items` array */

    count?: number | undefined;

    
    /** *the most mentioned service details* service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute */

    top_attributes?: { [key: string]: number; } | undefined;

    
    /** *top keywords mentioned in customer reviews* contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword */

    top_place_topics?: { [key: string]: number; } | undefined;

    [key: string]: any;


    constructor(data?: IBusinessListingAggregationInfo) {

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
            this.top_categories = data["top_categories"];
            this.top_countries = data["top_countries"];
            this.websites_count = data["websites_count"];
            this.count = data["count"];
            this.top_attributes = data["top_attributes"];
            this.top_place_topics = data["top_place_topics"];
        }
    }

    static fromJS(data: any): BusinessListingAggregationInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessListingAggregationInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["top_categories"] = this.top_categories;
        data["top_countries"] = this.top_countries;
        data["websites_count"] = this.websites_count;
        data["count"] = this.count;
        data["top_attributes"] = this.top_attributes;
        data["top_place_topics"] = this.top_place_topics;
        return data;
    }
}