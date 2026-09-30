export interface IAppDataAppleAppListTaskPostRequestInfo   {
        
        /** app collectionrequired fieldapp collection on App Store from which apps will be collected;you can specify the following values:top_free_ios, top_paid_ios, top_grossing_ios, new_ios, new_free_ios, new_paid_ios */
        app_collection?: string | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_codeif you use this field, you don't need to specify location_codeyou can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locationsexample:West Los Angeles,California,United States */
        location_name?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locationsexample:9061121 */
        location_code?: number | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languagesexample:English */
        language_name?: string | undefined
        
        /** 'search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages with their language_code_by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languagesexample:en */
        language_code?: string | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** parsing depthoptional fieldnumber of apps to be returned from the App Store SERP;default value: 100maximum value: 100Your account will be billed per each SERP containing up to 100 results; The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** application category on the App Storeoptional fieldyou can filter the results by app category;example:lifestyle;you can review the full list of available categories here or by making a separate request to https://api.dataforseo.com/v3/app_data/apple/categories */
        app_category?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded; i.a., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:advanced */
        postback_data?: string | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded; i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class AppDataAppleAppListTaskPostRequestInfo  implements IAppDataAppleAppListTaskPostRequestInfo {

    
    /** app collectionrequired fieldapp collection on App Store from which apps will be collected;you can specify the following values:top_free_ios, top_paid_ios, top_grossing_ios, new_ios, new_free_ios, new_paid_ios */

    app_collection?: string | undefined;

    
    /** full name of search engine locationrequired field if you don't specify location_codeif you use this field, you don't need to specify location_codeyou can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locationsexample:West Los Angeles,California,United States */

    location_name?: string | undefined;

    
    /** search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locationsexample:9061121 */

    location_code?: number | undefined;

    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languagesexample:English */

    language_name?: string | undefined;

    
    /** 'search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages with their language_code_by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languagesexample:en */

    language_code?: string | undefined;

    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;

    
    /** parsing depthoptional fieldnumber of apps to be returned from the App Store SERP;default value: 100maximum value: 100Your account will be billed per each SERP containing up to 100 results; The cost can be calculated on the Pricing page. */

    depth?: number | undefined;

    
    /** application category on the App Storeoptional fieldyou can filter the results by app category;example:lifestyle;you can review the full list of available categories here or by making a separate request to https://api.dataforseo.com/v3/app_data/apple/categories */

    app_category?: string | undefined;

    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded; i.a., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;

    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:advanced */

    postback_data?: string | undefined;

    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded; i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleAppListTaskPostRequestInfo) {

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
            this.app_collection = data["app_collection"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.priority = data["priority"];
            this.depth = data["depth"];
            this.app_category = data["app_category"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): AppDataAppleAppListTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppListTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_collection"] = this.app_collection;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["priority"] = this.priority;
        data["depth"] = this.depth;
        data["app_category"] = this.app_category;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}