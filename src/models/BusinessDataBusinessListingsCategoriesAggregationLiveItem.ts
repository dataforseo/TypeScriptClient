import { BusinessListingAggregationInfo, IBusinessListingAggregationInfo } from "./BusinessListingAggregationInfo";


export interface IBusinessDataBusinessListingsCategoriesAggregationLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *business categories* Google My Business general category that best describes the cluster of related categories */
        categories?: string[] | undefined
        
        /** *aggregation of the category* */
        aggregation?: BusinessListingAggregationInfo | undefined

    [key: string]: any;

    }

export class BusinessDataBusinessListingsCategoriesAggregationLiveItem  implements IBusinessDataBusinessListingsCategoriesAggregationLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *business categories* Google My Business general category that best describes the cluster of related categories */

    categories?: string[] | undefined;

    
    /** *aggregation of the category* */

    aggregation?: BusinessListingAggregationInfo | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataBusinessListingsCategoriesAggregationLiveItem) {

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
            this.categories = data["categories"];
            this.aggregation = data["aggregation"] ? BusinessListingAggregationInfo.fromJS(data["aggregation"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BusinessDataBusinessListingsCategoriesAggregationLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataBusinessListingsCategoriesAggregationLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["categories"] = this.categories;
        data["aggregation"] = this.aggregation ? BusinessListingAggregationInfo.fromJS(this.aggregation)?.toJSON() : <any>undefined;
        return data;
    }
}