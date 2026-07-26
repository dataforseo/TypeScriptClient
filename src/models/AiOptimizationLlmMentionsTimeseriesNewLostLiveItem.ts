export interface IAiOptimizationLlmMentionsTimeseriesNewLostLiveItem   {
        
        /** *date timestamp*  date format: `'yyyy-mm-dd'` */
        date?: string | undefined
        
        /** *new LLM mentions* indicates the LLM responses that contain the target at the `date_to` timestamp, did not contain it at the `date_from` timestamp */
        new_mentions?: number | undefined
        
        /** *lost LLM mentions* indicates the LLM responses that contained the specified target at the `date_from` timestamp, do not contain it at the `date_to` timestamp */
        lost_mentions?: number | undefined
        
        /** *ai_search_volume increment* indicates the increase of `ai_search_volume` values between the current timestamp and the previous one learn more about this metric [here](https://dataforseo.com/help-center/how-ai-search-volume-metrics-work-in-the-llm-mentions-timeseries-endpoints) */
        new_ai_search_volume?: number | undefined
        
        /** *ai_search_volume decrement* indicates the decrease of `ai_search_volume` values between the current timestamp and the previous one learn more about this metric [here](https://dataforseo.com/help-center/how-ai-search-volume-metrics-work-in-the-llm-mentions-timeseries-endpoints) */
        lost_ai_search_volume?: number | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTimeseriesNewLostLiveItem  implements IAiOptimizationLlmMentionsTimeseriesNewLostLiveItem {

    
    /** *date timestamp*  date format: `'yyyy-mm-dd'` */

    date?: string | undefined;

    
    /** *new LLM mentions* indicates the LLM responses that contain the target at the `date_to` timestamp, did not contain it at the `date_from` timestamp */

    new_mentions?: number | undefined;

    
    /** *lost LLM mentions* indicates the LLM responses that contained the specified target at the `date_from` timestamp, do not contain it at the `date_to` timestamp */

    lost_mentions?: number | undefined;

    
    /** *ai_search_volume increment* indicates the increase of `ai_search_volume` values between the current timestamp and the previous one learn more about this metric [here](https://dataforseo.com/help-center/how-ai-search-volume-metrics-work-in-the-llm-mentions-timeseries-endpoints) */

    new_ai_search_volume?: number | undefined;

    
    /** *ai_search_volume decrement* indicates the decrease of `ai_search_volume` values between the current timestamp and the previous one learn more about this metric [here](https://dataforseo.com/help-center/how-ai-search-volume-metrics-work-in-the-llm-mentions-timeseries-endpoints) */

    lost_ai_search_volume?: number | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTimeseriesNewLostLiveItem) {

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
            this.date = data["date"];
            this.new_mentions = data["new_mentions"];
            this.lost_mentions = data["lost_mentions"];
            this.new_ai_search_volume = data["new_ai_search_volume"];
            this.lost_ai_search_volume = data["lost_ai_search_volume"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTimeseriesNewLostLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTimeseriesNewLostLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["date"] = this.date;
        data["new_mentions"] = this.new_mentions;
        data["lost_mentions"] = this.lost_mentions;
        data["new_ai_search_volume"] = this.new_ai_search_volume;
        data["lost_ai_search_volume"] = this.lost_ai_search_volume;
        return data;
    }
}