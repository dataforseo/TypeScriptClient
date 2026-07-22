import { AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem, IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem } from "./AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem";


export interface IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResultInfo   {
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains specified keywords with their AI search volume rates */
        items?: AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResultInfo  implements IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResultInfo {

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** number of results returned in the items array */

    items_count?: number | undefined;

    
    /** contains specified keywords with their AI search volume rates */

    items?: AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResultInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["items_count"] = this.items_count;
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