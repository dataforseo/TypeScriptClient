import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";


export interface IAppendixTrBusinessDataDayLimitsRatesDataInfo   {
        
        reviews?: AppendixInfo | undefined
        
        search?: AppendixInfo | undefined

    [key: string]: any;

    }

export class AppendixTrBusinessDataDayLimitsRatesDataInfo  implements IAppendixTrBusinessDataDayLimitsRatesDataInfo {

    reviews?: AppendixInfo | undefined;

    search?: AppendixInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixTrBusinessDataDayLimitsRatesDataInfo) {

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
            this.reviews = data["reviews"] ? AppendixInfo.fromJS(data["reviews"]) : <any>undefined;
            this.search = data["search"] ? AppendixInfo.fromJS(data["search"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixTrBusinessDataDayLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixTrBusinessDataDayLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["reviews"] = this.reviews ? AppendixInfo.fromJS(this.reviews)?.toJSON() : <any>undefined;
        data["search"] = this.search ? AppendixInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        return data;
    }
}