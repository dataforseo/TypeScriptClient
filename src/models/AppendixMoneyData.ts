import { AppendixLimitsMoneyData, IAppendixLimitsMoneyData } from "./AppendixLimitsMoneyData";
import { AppendixStatisticsDataInfo, IAppendixStatisticsDataInfo } from "./AppendixStatisticsDataInfo";


export interface IAppendixMoneyData   {
        
        /** *total amount of money deposited to your account* */
        total?: number | undefined
        
        /** *amount of money left in your account* */
        balance?: number | undefined
        
        /** *cost limits* */
        limits?: AppendixLimitsMoneyData | undefined
        
        /** *statistics of your spending* */
        statistics?: AppendixStatisticsDataInfo | undefined

    [key: string]: any;

    }

export class AppendixMoneyData  implements IAppendixMoneyData {

    
    /** *total amount of money deposited to your account* */

    total?: number | undefined;

    
    /** *amount of money left in your account* */

    balance?: number | undefined;

    
    /** *cost limits* */

    limits?: AppendixLimitsMoneyData | undefined;

    
    /** *statistics of your spending* */

    statistics?: AppendixStatisticsDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixMoneyData) {

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
            this.total = data["total"];
            this.balance = data["balance"];
            this.limits = data["limits"] ? AppendixLimitsMoneyData.fromJS(data["limits"]) : <any>undefined;
            this.statistics = data["statistics"] ? AppendixStatisticsDataInfo.fromJS(data["statistics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixMoneyData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixMoneyData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total"] = this.total;
        data["balance"] = this.balance;
        data["limits"] = this.limits ? AppendixLimitsMoneyData.fromJS(this.limits)?.toJSON() : <any>undefined;
        data["statistics"] = this.statistics ? AppendixStatisticsDataInfo.fromJS(this.statistics)?.toJSON() : <any>undefined;
        return data;
    }
}