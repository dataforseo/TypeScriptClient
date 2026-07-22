import { AppendixLimitsRatesData, IAppendixLimitsRatesData } from "./AppendixLimitsRatesData";
import { AppendixStatisticsDataInfo, IAppendixStatisticsDataInfo } from "./AppendixStatisticsDataInfo";


export interface IAppendixRatesData   {
        
        /** rate limits for API calls per a certain period of time */
        limits?: AppendixLimitsRatesData | undefined
        
        /** statisctics for API calls */
        statistics?: AppendixStatisticsDataInfo | undefined

    [key: string]: any;

    }

export class AppendixRatesData  implements IAppendixRatesData {

    
    /** rate limits for API calls per a certain period of time */

    limits?: AppendixLimitsRatesData | undefined;

    
    /** statisctics for API calls */

    statistics?: AppendixStatisticsDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixRatesData) {

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
            this.limits = data["limits"] ? AppendixLimitsRatesData.fromJS(data["limits"]) : <any>undefined;
            this.statistics = data["statistics"] ? AppendixStatisticsDataInfo.fromJS(data["statistics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixRatesData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixRatesData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["limits"] = this.limits ? AppendixLimitsRatesData.fromJS(this.limits)?.toJSON() : <any>undefined;
        data["statistics"] = this.statistics ? AppendixStatisticsDataInfo.fromJS(this.statistics)?.toJSON() : <any>undefined;
        return data;
    }
}