import { AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveItem, IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveItem } from "./AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveItem";


export interface IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo   {
        
        /** *total number of results* */
        total_count?: number | undefined
        
        /** *offset in the results array of the returned mentions data* `offset` specified in the request */
        offset?: number | undefined
        
        /** *number of items in the results array* */
        items_count?: number | undefined
        
        /** *aggregated mentions metrics summary* contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensionsin this case, the value will be `null` */
        aggregated_metrics?: any | undefined
        
        /** *contains relevant mentions data* */
        items?: AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo  implements IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo {

    
    /** *total number of results* */

    total_count?: number | undefined;

    
    /** *offset in the results array of the returned mentions data* `offset` specified in the request */

    offset?: number | undefined;

    
    /** *number of items in the results array* */

    items_count?: number | undefined;

    
    /** *aggregated mentions metrics summary* contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensionsin this case, the value will be `null` */

    aggregated_metrics?: any | undefined;

    
    /** *contains relevant mentions data* */

    items?: AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo) {

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
            this.total_count = data["total_count"];
            this.offset = data["offset"];
            this.items_count = data["items_count"];
            this.aggregated_metrics = data["aggregated_metrics"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["offset"] = this.offset;
        data["items_count"] = this.items_count;
        data["aggregated_metrics"] = this.aggregated_metrics;
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