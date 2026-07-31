export interface ISerpAiSummaryRequestInfo   {
        
        /** *task identifier* **required field** unique identifier of the associated task in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format you will be able to use it within **30 days** to request the results of the task at any time */
        task_id?: string | undefined
        
        /** *AI prompt* optional field additional task for AI summariser; any form of text, question or information that communicates to AI what response you're looking for; max number of symbols or characters you can specify: `2000`; **note:** your prompt has to be relevant to the keyword specified in the POST request to SERP API */
        prompt?: string | undefined
        
        /** *support extra SERP features* optional field if set to `true`, the AI model will consider the following extra SERP features, in addition to `organic` results: `answer_box`, `knowledge_graph`, `featured_snippet`; default value: `true` */
        support_extra?: boolean | undefined
        
        /** *fetch content from pages in SERPs* optional field if set to `true`, the API will fetch the content from pages featured in SERP results, and the AI model will consider this content when generating the summary in the result; default value: `false` */
        fetch_content?: boolean | undefined
        
        /** *include source links in the summary* optional field if set to `true`, the `summary` field in the API response will contain links to sources of the generated summary; default value: `false` */
        include_links?: boolean | undefined

    [key: string]: any;

    }

export class SerpAiSummaryRequestInfo  implements ISerpAiSummaryRequestInfo {

    
    /** *task identifier* **required field** unique identifier of the associated task in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format you will be able to use it within **30 days** to request the results of the task at any time */

    task_id?: string | undefined;

    
    /** *AI prompt* optional field additional task for AI summariser; any form of text, question or information that communicates to AI what response you're looking for; max number of symbols or characters you can specify: `2000`; **note:** your prompt has to be relevant to the keyword specified in the POST request to SERP API */

    prompt?: string | undefined;

    
    /** *support extra SERP features* optional field if set to `true`, the AI model will consider the following extra SERP features, in addition to `organic` results: `answer_box`, `knowledge_graph`, `featured_snippet`; default value: `true` */

    support_extra?: boolean | undefined;

    
    /** *fetch content from pages in SERPs* optional field if set to `true`, the API will fetch the content from pages featured in SERP results, and the AI model will consider this content when generating the summary in the result; default value: `false` */

    fetch_content?: boolean | undefined;

    
    /** *include source links in the summary* optional field if set to `true`, the `summary` field in the API response will contain links to sources of the generated summary; default value: `false` */

    include_links?: boolean | undefined;

    [key: string]: any;


    constructor(data?: ISerpAiSummaryRequestInfo) {

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
            this.task_id = data["task_id"];
            this.prompt = data["prompt"];
            this.support_extra = data["support_extra"];
            this.fetch_content = data["fetch_content"];
            this.include_links = data["include_links"];
        }
    }

    static fromJS(data: any): SerpAiSummaryRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpAiSummaryRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["task_id"] = this.task_id;
        data["prompt"] = this.prompt;
        data["support_extra"] = this.support_extra;
        data["fetch_content"] = this.fetch_content;
        data["include_links"] = this.include_links;
        return data;
    }
}