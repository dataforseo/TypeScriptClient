import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixLlmResponsesAiOptimizationPriceData   {
        
        live?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        models?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        task_get?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        task_post?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixLlmResponsesAiOptimizationPriceData  implements IAppendixLlmResponsesAiOptimizationPriceData {

    live?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    models?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    task_get?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    task_post?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixLlmResponsesAiOptimizationPriceData) {

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
            this.live = data["live"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["live"]) : <any>undefined;
            this.models = data["models"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["models"]) : <any>undefined;
            this.task_get = data["task_get"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_get"]) : <any>undefined;
            this.task_post = data["task_post"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_post"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixLlmResponsesAiOptimizationPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixLlmResponsesAiOptimizationPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["live"] = this.live ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.live)?.toJSON() : <any>undefined;
        data["models"] = this.models ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.models)?.toJSON() : <any>undefined;
        data["task_get"] = this.task_get ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_get)?.toJSON() : <any>undefined;
        data["task_post"] = this.task_post ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_post)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}