export interface IBusinessDataBusinessListingsAvailableFiltersResultInfo   {
        
        search?: { [key: string]: string; } | undefined
        
        categories_aggregation?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class BusinessDataBusinessListingsAvailableFiltersResultInfo  implements IBusinessDataBusinessListingsAvailableFiltersResultInfo {

    search?: { [key: string]: string; } | undefined;

    categories_aggregation?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataBusinessListingsAvailableFiltersResultInfo) {

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
            this.search = data["search"];
            this.categories_aggregation = data["categories_aggregation"];
        }
    }

    static fromJS(data: any): BusinessDataBusinessListingsAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataBusinessListingsAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search"] = this.search;
        data["categories_aggregation"] = this.categories_aggregation;
        return data;
    }
}