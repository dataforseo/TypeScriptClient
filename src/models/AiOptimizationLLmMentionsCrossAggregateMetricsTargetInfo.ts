import { BaseAiOptimizationLLmMentionsTargetElement, IBaseAiOptimizationLLmMentionsTargetElement } from "./BaseAiOptimizationLLmMentionsTargetElement";


export interface IAiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo   {
        
        target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined
        
        /**  */
        aggregation_key?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo  implements IAiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo {

    target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined;
    
    /**  */

    aggregation_key?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo) {

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
            this.aggregation_key = data["aggregation_key"];
        }
    }

    static fromJS(data: any): AiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo();
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
        data["aggregation_key"] = this.aggregation_key;
        return data;
    }
}