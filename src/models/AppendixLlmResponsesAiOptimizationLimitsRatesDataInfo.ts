export interface IAppendixLlmResponsesAiOptimizationLimitsRatesDataInfo   {
        
        live?: number | undefined
        
        task_post?: number | undefined
        
        tasks_ready?: number | undefined
        
        task_get?: number | undefined
        
        models?: number | undefined

    [key: string]: any;

    }

export class AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo  implements IAppendixLlmResponsesAiOptimizationLimitsRatesDataInfo {

    live?: number | undefined;

    task_post?: number | undefined;

    tasks_ready?: number | undefined;

    task_get?: number | undefined;

    models?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixLlmResponsesAiOptimizationLimitsRatesDataInfo) {

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
            this.live = data["live"];
            this.task_post = data["task_post"];
            this.tasks_ready = data["tasks_ready"];
            this.task_get = data["task_get"];
            this.models = data["models"];
        }
    }

    static fromJS(data: any): AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["live"] = this.live;
        data["task_post"] = this.task_post;
        data["tasks_ready"] = this.tasks_ready;
        data["task_get"] = this.task_get;
        data["models"] = this.models;
        return data;
    }
}