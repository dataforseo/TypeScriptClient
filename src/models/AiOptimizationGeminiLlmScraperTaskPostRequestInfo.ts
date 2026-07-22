export interface IAiOptimizationGeminiLlmScraperTaskPostRequestInfo   {
        
        /** keyword
required field
you can specify up to 2000 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** full name of search engine location
required field if you don't specify location_code or location_coordinate
if you use this field, you don't need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locations
example:
United States */
        location_name?: string | undefined
        
        /** search engine location code
required field if you don't specify location_name or location_coordinate
if you use this field, you don't need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locations
example:
2840 */
        location_code?: number | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** full name of search engine language
required field if you don't specify language_code;
if you use this field, you don't need to specify language_code;
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languages
example:
English */
        language_name?: string | undefined
        
        /** search engine language code
required field if you don't specify language_name;
if you use this field, you don't need to specify language_name;
you can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languages
example:
en */
        language_code?: string | undefined
        
        /** return expanded citation bar in HTML results
optional field
when enabled, the HTML endpoint will return data from the expanded citation bar;
default value: false */
        expand_citations?: boolean | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced, html */
        postback_data?: string | undefined
        
        /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationGeminiLlmScraperTaskPostRequestInfo  implements IAiOptimizationGeminiLlmScraperTaskPostRequestInfo {

    
    /** keyword
required field
you can specify up to 2000 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */

    priority?: number | undefined;

    
    /** full name of search engine location
required field if you don't specify location_code or location_coordinate
if you use this field, you don't need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locations
example:
United States */

    location_name?: string | undefined;

    
    /** search engine location code
required field if you don't specify location_name or location_coordinate
if you use this field, you don't need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locations
example:
2840 */

    location_code?: number | undefined;

    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;

    
    /** full name of search engine language
required field if you don't specify language_code;
if you use this field, you don't need to specify language_code;
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languages
example:
English */

    language_name?: string | undefined;

    
    /** search engine language code
required field if you don't specify language_name;
if you use this field, you don't need to specify language_name;
you can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languages
example:
en */

    language_code?: string | undefined;

    
    /** return expanded citation bar in HTML results
optional field
when enabled, the HTML endpoint will return data from the expanded citation bar;
default value: false */

    expand_citations?: boolean | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    
    /** URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;

    
    /** postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced, html */

    postback_data?: string | undefined;

    
    /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationGeminiLlmScraperTaskPostRequestInfo) {

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
            this.priority = data["priority"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.expand_citations = data["expand_citations"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): AiOptimizationGeminiLlmScraperTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationGeminiLlmScraperTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["priority"] = this.priority;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["expand_citations"] = this.expand_citations;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}