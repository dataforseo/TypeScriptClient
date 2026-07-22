export interface ISerpGoogleDatasetInfoTaskPostRequestInfo   {
        
        /** ID of the datasetrequired fieldyou can find dataset ID in the dataset URL or dataset item of Google Dataset Search resultexample:L2cvMTFqbl85ZHN6MQ== */
        dataset_id?: string | undefined
        
        /** search engine language codeoptional fieldif you use this field, you don't need to specify language_namepossible value:en */
        language_code?: string | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priority
You will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */
        device?: string | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible value: advanced */
        postback_data?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetInfoTaskPostRequestInfo  implements ISerpGoogleDatasetInfoTaskPostRequestInfo {

    
    /** ID of the datasetrequired fieldyou can find dataset ID in the dataset URL or dataset item of Google Dataset Search resultexample:L2cvMTFqbl85ZHN6MQ== */

    dataset_id?: string | undefined;

    
    /** search engine language codeoptional fieldif you use this field, you don't need to specify language_namepossible value:en */

    language_code?: string | undefined;

    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priority
You will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;

    
    /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */

    device?: string | undefined;

    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string | undefined;

    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;

    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible value: advanced */

    postback_data?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleDatasetInfoTaskPostRequestInfo) {

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
            this.dataset_id = data["dataset_id"];
            this.language_code = data["language_code"];
            this.priority = data["priority"];
            this.device = data["device"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
        }
    }

    static fromJS(data: any): SerpGoogleDatasetInfoTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleDatasetInfoTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["dataset_id"] = this.dataset_id;
        data["language_code"] = this.language_code;
        data["priority"] = this.priority;
        data["device"] = this.device;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        return data;
    }
}