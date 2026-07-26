import { BaseAiOptimizationLLmMentionsTargetElement, IBaseAiOptimizationLLmMentionsTargetElement } from "./BaseAiOptimizationLLmMentionsTargetElement";


export interface IAiOptimizationLLmMentionsMultiTargetMetricsRequestInfo   {
        
        target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined
        
        /** key for grouping the results required field groups results for comparison and serves as a label for the group; you can specify up to 250 characters in the key field */
        key?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo  implements IAiOptimizationLLmMentionsMultiTargetMetricsRequestInfo {

    target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined;

    
    /** key for grouping the results required field groups results for comparison and serves as a label for the group; you can specify up to 250 characters in the key field */

    key?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLLmMentionsMultiTargetMetricsRequestInfo) {

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
            if (Array.isArray(data["target"])) {
                this.target = [];
                for (let item of data["target"]) {
                    this.target.push(BaseAiOptimizationLLmMentionsTargetElement.fromJS(item));
                }
            }
            this.key = data["key"];
        }
    }

    static fromJS(data: any): AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = null;
        if (Array.isArray(this.target)) {
            data["target"] = [];
            for (let item of this.target) {
                if (item && typeof item.toJSON === "function") {
                    data["target"].push(item?.toJSON());
                }
            }
        }
        data["key"] = this.key;
        return data;
    }
}