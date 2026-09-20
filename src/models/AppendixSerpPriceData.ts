import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixAKeywordsDataPriceDataInfo, IAppendixAKeywordsDataPriceDataInfo } from "./AppendixAKeywordsDataPriceDataInfo";
import { AppendixSerpPriceDataInfo, IAppendixSerpPriceDataInfo } from "./AppendixSerpPriceDataInfo";


export interface IAppendixSerpPriceData   {
        
        tasks_fixed?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        ai_summary?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        jobs?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        live?: AppendixSerpPriceDataInfo | undefined
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        screenshot?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        task_get?: AppendixSerpPriceDataInfo | undefined
        
        task_post?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixSerpPriceData  implements IAppendixSerpPriceData {

    tasks_fixed?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    ai_summary?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    jobs?: AppendixAKeywordsDataPriceDataInfo | undefined;

    languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    live?: AppendixSerpPriceDataInfo | undefined;

    locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    screenshot?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    task_get?: AppendixSerpPriceDataInfo | undefined;

    task_post?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixSerpPriceData) {

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
            this.tasks_fixed = data["tasks_fixed"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_fixed"]) : <any>undefined;
            this.ai_summary = data["ai_summary"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["ai_summary"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.id_list = data["id_list"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["id_list"]) : <any>undefined;
            this.jobs = data["jobs"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["jobs"]) : <any>undefined;
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
            this.live = data["live"] ? AppendixSerpPriceDataInfo.fromJS(data["live"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.screenshot = data["screenshot"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["screenshot"]) : <any>undefined;
            this.task_get = data["task_get"] ? AppendixSerpPriceDataInfo.fromJS(data["task_get"]) : <any>undefined;
            this.task_post = data["task_post"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_post"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixSerpPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixSerpPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["tasks_fixed"] = this.tasks_fixed ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_fixed)?.toJSON() : <any>undefined;
        data["ai_summary"] = this.ai_summary ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.ai_summary)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.id_list)?.toJSON() : <any>undefined;
        data["jobs"] = this.jobs ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.jobs)?.toJSON() : <any>undefined;
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        data["live"] = this.live ? AppendixSerpPriceDataInfo.fromJS(this.live)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["screenshot"] = this.screenshot ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.screenshot)?.toJSON() : <any>undefined;
        data["task_get"] = this.task_get ? AppendixSerpPriceDataInfo.fromJS(this.task_get)?.toJSON() : <any>undefined;
        data["task_post"] = this.task_post ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_post)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}