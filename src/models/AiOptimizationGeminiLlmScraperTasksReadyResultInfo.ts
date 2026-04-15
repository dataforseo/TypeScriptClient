export interface IAiOptimizationGeminiLlmScraperTasksReadyResultInfo   {
        
        /** task identifier of the completed taskunique task identifier in our system in the UUID format */
        id?: string | undefined
        
        /** search engine specified when setting the task */
        se?: string | undefined
        
        /** search engine functionexample: llm_scraper */
        function?: string | undefined
        
        /** date when the task was posted (in the UTC format) */
        date_posted?: string | undefined
        
        /** user-defined task identifier */
        tag?: string | undefined
        
        /** URL for collecting the results of the Advanced taskif the Advanced function is not supported in the specified endpoint, the value will be null */
        endpoint_advanced?: string | undefined
        
        /** URL for collecting the results of the HTML taskif the HTML function is not supported in the specified endpoint, the value will be null */
        endpoint_html?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationGeminiLlmScraperTasksReadyResultInfo  implements IAiOptimizationGeminiLlmScraperTasksReadyResultInfo {
    
    /** task identifier of the completed taskunique task identifier in our system in the UUID format */

    id?: string | undefined;
    
    /** search engine specified when setting the task */

    se?: string | undefined;
    
    /** search engine functionexample: llm_scraper */

    function?: string | undefined;
    
    /** date when the task was posted (in the UTC format) */

    date_posted?: string | undefined;
    
    /** user-defined task identifier */

    tag?: string | undefined;
    
    /** URL for collecting the results of the Advanced taskif the Advanced function is not supported in the specified endpoint, the value will be null */

    endpoint_advanced?: string | undefined;
    
    /** URL for collecting the results of the HTML taskif the HTML function is not supported in the specified endpoint, the value will be null */

    endpoint_html?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationGeminiLlmScraperTasksReadyResultInfo) {

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
            this.id = data["id"];
            this.se = data["se"];
            this.function = data["function"];
            this.date_posted = data["date_posted"];
            this.tag = data["tag"];
            this.endpoint_advanced = data["endpoint_advanced"];
            this.endpoint_html = data["endpoint_html"];
        }
    }

    static fromJS(data: any): AiOptimizationGeminiLlmScraperTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationGeminiLlmScraperTasksReadyResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["se"] = this.se;
        data["function"] = this.function;
        data["date_posted"] = this.date_posted;
        data["tag"] = this.tag;
        data["endpoint_advanced"] = this.endpoint_advanced;
        data["endpoint_html"] = this.endpoint_html;
        return data;
    }
}