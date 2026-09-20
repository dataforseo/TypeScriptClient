import { AppendixTaskGetProductGoogleMerchantPriceDataInfo, IAppendixTaskGetProductGoogleMerchantPriceDataInfo } from "./AppendixTaskGetProductGoogleMerchantPriceDataInfo";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixAmazonMerchantPriceDataInfo   {
        
        live?: AppendixTaskGetProductGoogleMerchantPriceDataInfo | undefined
        
        task_get?: AppendixTaskGetProductGoogleMerchantPriceDataInfo | undefined
        
        task_post?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixAmazonMerchantPriceDataInfo  implements IAppendixAmazonMerchantPriceDataInfo {

    live?: AppendixTaskGetProductGoogleMerchantPriceDataInfo | undefined;

    task_get?: AppendixTaskGetProductGoogleMerchantPriceDataInfo | undefined;

    task_post?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAmazonMerchantPriceDataInfo) {

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
            this.live = data["live"] ? AppendixTaskGetProductGoogleMerchantPriceDataInfo.fromJS(data["live"]) : <any>undefined;
            this.task_get = data["task_get"] ? AppendixTaskGetProductGoogleMerchantPriceDataInfo.fromJS(data["task_get"]) : <any>undefined;
            this.task_post = data["task_post"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_post"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAmazonMerchantPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAmazonMerchantPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["live"] = this.live ? AppendixTaskGetProductGoogleMerchantPriceDataInfo.fromJS(this.live)?.toJSON() : <any>undefined;
        data["task_get"] = this.task_get ? AppendixTaskGetProductGoogleMerchantPriceDataInfo.fromJS(this.task_get)?.toJSON() : <any>undefined;
        data["task_post"] = this.task_post ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_post)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}