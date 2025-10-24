import { Info, IInfo } from "./Info";


export interface IBusinessDataBusinessListingsAvailableFiltersResultInfo   {
        
        search?: Info | undefined
        
        categories_aggregation?: Info | undefined

    [key: string]: any;

    }

export class BusinessDataBusinessListingsAvailableFiltersResultInfo  implements IBusinessDataBusinessListingsAvailableFiltersResultInfo {

    search?: Info | undefined;

    categories_aggregation?: Info | undefined;

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
            this.search = data["search"] ? Info.fromJS(data["search"]) : <any>undefined;
            this.categories_aggregation = data["categories_aggregation"] ? Info.fromJS(data["categories_aggregation"]) : <any>undefined;
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

        
        
        data["search"] = this.search ? Info.fromJS(this.search)?.toJSON() : <any>undefined;
        data["categories_aggregation"] = this.categories_aggregation ? Info.fromJS(this.categories_aggregation)?.toJSON() : <any>undefined;
        return data;
    }
}