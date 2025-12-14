import { AiOptimizationResultTotalInfo, IAiOptimizationResultTotalInfo } from "./AiOptimizationResultTotalInfo";
import { AiOptimizationLlmMentionssLiveItem, IAiOptimizationLlmMentionssLiveItem } from "./AiOptimizationLlmMentionssLiveItem";


export interface IAiOptimizationLlmMentionsTopPagesLiveResultInfo   {
        
        /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all found top pages, grouped by various dimensions */
        total?: AiOptimizationResultTotalInfo | undefined
        
        /** individual pages results
array containing detailed mention metrics for each of the found top pages */
        items?: AiOptimizationLlmMentionssLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTopPagesLiveResultInfo  implements IAiOptimizationLlmMentionsTopPagesLiveResultInfo {
    
    /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all found top pages, grouped by various dimensions */

    total?: AiOptimizationResultTotalInfo | undefined;
    
    /** individual pages results
array containing detailed mention metrics for each of the found top pages */

    items?: AiOptimizationLlmMentionssLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopPagesLiveResultInfo) {

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
            this.total = data["total"] ? AiOptimizationResultTotalInfo.fromJS(data["total"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOptimizationLlmMentionssLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopPagesLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopPagesLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total"] = this.total ? AiOptimizationResultTotalInfo.fromJS(this.total)?.toJSON() : <any>undefined;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}