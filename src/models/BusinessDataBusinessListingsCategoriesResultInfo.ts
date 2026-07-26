export interface IBusinessDataBusinessListingsCategoriesResultInfo   {
        
        /** *full name of the category* */
        category_name?: string | undefined
        
        /** *number of businesses in the category* */
        business_count?: number | undefined

    [key: string]: any;

    }

export class BusinessDataBusinessListingsCategoriesResultInfo  implements IBusinessDataBusinessListingsCategoriesResultInfo {

    
    /** *full name of the category* */

    category_name?: string | undefined;

    
    /** *number of businesses in the category* */

    business_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataBusinessListingsCategoriesResultInfo) {

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
            this.category_name = data["category_name"];
            this.business_count = data["business_count"];
        }
    }

    static fromJS(data: any): BusinessDataBusinessListingsCategoriesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataBusinessListingsCategoriesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category_name"] = this.category_name;
        data["business_count"] = this.business_count;
        return data;
    }
}