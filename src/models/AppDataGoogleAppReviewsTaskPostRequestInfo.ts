export interface IAppDataGoogleAppReviewsTaskPostRequestInfo   {
        
        /** id of the app required field ID of the mobile application on Google Play; you can find the ID in the URL of every app listed on Google Play; example: https://play.google.com/store/apps/details?id=org.telegram.messenger */
        app_id?: string | undefined
        
        /** full name of search engine location required field if you don’t specify location_code if you use this field, you don’t need to specify location_code you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations example: West Los Angeles,California,United States */
        location_name?: string | undefined
        
        /** search engine location code required field if you don’t specify location_name if you use this field, you don’t need to specify location_name you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations example: 9061121 */
        location_code?: number | undefined
        
        /** full name of search engine language required field if you don’t specify language_code if you use this field, you don’t need to specify language_code you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages example: English */
        language_name?: string | undefined
        
        /** search engine language code required field if you don’t specify language_name if you use this field, you don’t need to specify language_name you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages example: en */
        language_code?: string | undefined
        
        /** task priority optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priority You will be additionally charged for the tasks with high execution priority. The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** parsing depth optional field number of reviews to be returned in the API response; we strongly recommend setting the parsing depth in the multiples of 150, because our system processes 150 reviews in a row; default value: 150; maximum value: 100000; Your account will be billed per each SERP containing up to 150 results; Setting depth above 150 may result in additional charges if the search engine returns more than 150 results; The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** filter reviews by rating optional field you can use this field to filter the results; possible types of filtering: 5 — return reviews with five-star rating only; 4 — return reviews with four-star rating only; 3 — return reviews with three-star rating only; 2 — return reviews with two-star rating only; 1 — return reviews with one-star rating only; by default, the API returns all reviews regardless of the number of stars */
        rating?: number | undefined
        
        /** results sorting parameters optional field you can use this field to sort the results; possible types of sorting: newest — sort by the most recent reviews; most_relevant — sort by the most relevant reviews; default rule: most_relevant */
        sort_by?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** URL for sending task results optional field once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/postbackscript?id=$id http://your-server.com/postbackscript?id=$id&tag=$tag Note: special characters in postback_url will be urlencoded; i.a., the # character will be encoded into %23 */
        postback_url?: string | undefined
        
        /** postback_url datatype required field if you specify postback_url corresponds to the datatype that will be sent to your server possible values: advanced, html */
        postback_data?: string | undefined
        
        /** notification URL of a completed task optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/pingscript?id=$id http://your-server.com/pingscript?id=$id&tag=$tag Note: special characters in pingback_url will be urlencoded; i.a., the # character will be encoded into %23 */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class AppDataGoogleAppReviewsTaskPostRequestInfo  implements IAppDataGoogleAppReviewsTaskPostRequestInfo {

    
    /** id of the app required field ID of the mobile application on Google Play; you can find the ID in the URL of every app listed on Google Play; example: https://play.google.com/store/apps/details?id=org.telegram.messenger */

    app_id?: string | undefined;

    
    /** full name of search engine location required field if you don’t specify location_code if you use this field, you don’t need to specify location_code you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations example: West Los Angeles,California,United States */

    location_name?: string | undefined;

    
    /** search engine location code required field if you don’t specify location_name if you use this field, you don’t need to specify location_name you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations example: 9061121 */

    location_code?: number | undefined;

    
    /** full name of search engine language required field if you don’t specify language_code if you use this field, you don’t need to specify language_code you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages example: English */

    language_name?: string | undefined;

    
    /** search engine language code required field if you don’t specify language_name if you use this field, you don’t need to specify language_name you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages example: en */

    language_code?: string | undefined;

    
    /** task priority optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priority You will be additionally charged for the tasks with high execution priority. The cost can be calculated on the Pricing page. */

    priority?: number | undefined;

    
    /** parsing depth optional field number of reviews to be returned in the API response; we strongly recommend setting the parsing depth in the multiples of 150, because our system processes 150 reviews in a row; default value: 150; maximum value: 100000; Your account will be billed per each SERP containing up to 150 results; Setting depth above 150 may result in additional charges if the search engine returns more than 150 results; The cost can be calculated on the Pricing page. */

    depth?: number | undefined;

    
    /** filter reviews by rating optional field you can use this field to filter the results; possible types of filtering: 5 — return reviews with five-star rating only; 4 — return reviews with four-star rating only; 3 — return reviews with three-star rating only; 2 — return reviews with two-star rating only; 1 — return reviews with one-star rating only; by default, the API returns all reviews regardless of the number of stars */

    rating?: number | undefined;

    
    /** results sorting parameters optional field you can use this field to sort the results; possible types of sorting: newest — sort by the most recent reviews; most_relevant — sort by the most relevant reviews; default rule: most_relevant */

    sort_by?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    
    /** URL for sending task results optional field once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/postbackscript?id=$id http://your-server.com/postbackscript?id=$id&tag=$tag Note: special characters in postback_url will be urlencoded; i.a., the # character will be encoded into %23 */

    postback_url?: string | undefined;

    
    /** postback_url datatype required field if you specify postback_url corresponds to the datatype that will be sent to your server possible values: advanced, html */

    postback_data?: string | undefined;

    
    /** notification URL of a completed task optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/pingscript?id=$id http://your-server.com/pingscript?id=$id&tag=$tag Note: special characters in pingback_url will be urlencoded; i.a., the # character will be encoded into %23 */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppDataGoogleAppReviewsTaskPostRequestInfo) {

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
            this.app_id = data["app_id"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.priority = data["priority"];
            this.depth = data["depth"];
            this.rating = data["rating"];
            this.sort_by = data["sort_by"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): AppDataGoogleAppReviewsTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataGoogleAppReviewsTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_id"] = this.app_id;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["priority"] = this.priority;
        data["depth"] = this.depth;
        data["rating"] = this.rating;
        data["sort_by"] = this.sort_by;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}