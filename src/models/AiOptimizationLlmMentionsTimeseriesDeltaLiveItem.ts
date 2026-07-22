export interface IAiOptimizationLlmMentionsTimeseriesDeltaLiveItem   {
        
        /** date timestamp
 date format: 'yyyy-mm-dd' */
        date?: string | undefined
        
        /** LLM mentions count delta
the difference in mentions between the current timestamp and the previous one */
        delta_mentions?: number | undefined
        
        /** LLM mentions count delta
the difference in ai_search_volume values between the current timestamp and the previous one
learn more about this metric here */
        delta_ai_search_volume?: number | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTimeseriesDeltaLiveItem  implements IAiOptimizationLlmMentionsTimeseriesDeltaLiveItem {

    
    /** date timestamp
 date format: 'yyyy-mm-dd' */

    date?: string | undefined;

    
    /** LLM mentions count delta
the difference in mentions between the current timestamp and the previous one */

    delta_mentions?: number | undefined;

    
    /** LLM mentions count delta
the difference in ai_search_volume values between the current timestamp and the previous one
learn more about this metric here */

    delta_ai_search_volume?: number | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTimeseriesDeltaLiveItem) {

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
            this.delta_mentions = data["delta_mentions"];
            this.delta_ai_search_volume = data["delta_ai_search_volume"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTimeseriesDeltaLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTimeseriesDeltaLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["date"] = this.date;
        data["delta_mentions"] = this.delta_mentions;
        data["delta_ai_search_volume"] = this.delta_ai_search_volume;
        return data;
    }
}