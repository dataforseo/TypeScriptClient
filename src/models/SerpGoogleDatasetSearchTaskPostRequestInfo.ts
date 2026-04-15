export interface ISerpGoogleDatasetSearchTaskPostRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”.learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine language codeoptional fieldpossible value:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 20max value: 700Your account will be billed per each SERP containing up to 20 results;Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically; */
        depth?: number | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */
        device?: string | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serveronly value: advanced */
        postback_data?: string | undefined
        
        /** full name of search engine languageoptional fieldif you use this field, you don't need to specify language_codepossible value:English */
        language_name?: string | undefined
        
        /** device operating systemoptional fieldpossible values: windows, macosdefault value: windows */
        os?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** last time the dataset was updatedoptional fieldpossible values: 1m, 1y, 3y */
        last_updated?: string | undefined
        
        /** file formats of the datasetoptional fieldpossible values: other, archive, text, image, document, tabular */
        file_formats?: string[] | undefined
        
        /** usage rights of the datasetoptional fieldpossible values: commercial, noncommercial */
        usage_rights?: string | undefined
        
        /** indicates whether displayed datasets are freeoptional fieldpossible values: true, false */
        is_free?: boolean | undefined
        
        /** dataset topicsoptional fieldpossible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering */
        topics?: string[] | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetSearchTaskPostRequestInfo  implements ISerpGoogleDatasetSearchTaskPostRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”.learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** search engine language codeoptional fieldpossible value:en */

    language_code?: string | undefined;
    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 20max value: 700Your account will be billed per each SERP containing up to 20 results;Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically; */

    depth?: number | undefined;
    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */

    device?: string | undefined;
    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;
    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serveronly value: advanced */

    postback_data?: string | undefined;
    
    /** full name of search engine languageoptional fieldif you use this field, you don't need to specify language_codepossible value:English */

    language_name?: string | undefined;
    
    /** device operating systemoptional fieldpossible values: windows, macosdefault value: windows */

    os?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** last time the dataset was updatedoptional fieldpossible values: 1m, 1y, 3y */

    last_updated?: string | undefined;
    
    /** file formats of the datasetoptional fieldpossible values: other, archive, text, image, document, tabular */

    file_formats?: string[] | undefined;
    
    /** usage rights of the datasetoptional fieldpossible values: commercial, noncommercial */

    usage_rights?: string | undefined;
    
    /** indicates whether displayed datasets are freeoptional fieldpossible values: true, false */

    is_free?: boolean | undefined;
    
    /** dataset topicsoptional fieldpossible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering */

    topics?: string[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleDatasetSearchTaskPostRequestInfo) {

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
            this.keyword = data["keyword"];
            this.language_code = data["language_code"];
            this.depth = data["depth"];
            this.priority = data["priority"];
            this.device = data["device"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
            this.last_updated = data["last_updated"];
            this.file_formats = data["file_formats"];
            this.usage_rights = data["usage_rights"];
            this.is_free = data["is_free"];
            this.topics = data["topics"];
        }
    }

    static fromJS(data: any): SerpGoogleDatasetSearchTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleDatasetSearchTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["priority"] = this.priority;
        data["device"] = this.device;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        data["last_updated"] = this.last_updated;
        data["file_formats"] = this.file_formats;
        data["usage_rights"] = this.usage_rights;
        data["is_free"] = this.is_free;
        data["topics"] = this.topics;
        return data;
    }
}