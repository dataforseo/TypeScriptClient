export interface IAggregatedMetricsItemInfo   {
        
        /** grouping identifier
the specific identifier for the grouping dimension */
        key?: string | undefined
        
        /** total LLM mentions count
the number of times the target keyword or domain were mentioned in relation to this specific grouping key */
        mentions?: number | undefined
        
        /** aggregated AI search volume for mentions within this grouping
learn more about this metric here */
        ai_search_volume?: number | undefined

    [key: string]: any;

    }

export class AggregatedMetricsItemInfo  implements IAggregatedMetricsItemInfo {

    
    /** grouping identifier
the specific identifier for the grouping dimension */

    key?: string | undefined;

    
    /** total LLM mentions count
the number of times the target keyword or domain were mentioned in relation to this specific grouping key */

    mentions?: number | undefined;

    
    /** aggregated AI search volume for mentions within this grouping
learn more about this metric here */

    ai_search_volume?: number | undefined;

    [key: string]: any;


    constructor(data?: IAggregatedMetricsItemInfo) {

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
            this.key = data["key"];
            this.mentions = data["mentions"];
            this.ai_search_volume = data["ai_search_volume"];
        }
    }

    static fromJS(data: any): AggregatedMetricsItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AggregatedMetricsItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["key"] = this.key;
        data["mentions"] = this.mentions;
        data["ai_search_volume"] = this.ai_search_volume;
        return data;
    }
}