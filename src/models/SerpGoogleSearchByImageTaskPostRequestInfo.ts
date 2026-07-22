export interface ISerpGoogleSearchByImageTaskPostRequestInfo   {
        
        /** URL of the imagerequired fieldthe results will be based on the image you specified in this fieldexample:https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg */
        image_url?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languagesexample:en */
        language_code?: string | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:advanced, html */
        postback_data?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleSearchByImageTaskPostRequestInfo  implements ISerpGoogleSearchByImageTaskPostRequestInfo {

    
    /** URL of the imagerequired fieldthe results will be based on the image you specified in this fieldexample:https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg */

    image_url?: string | undefined;

    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/locationsexample:2840 */

    location_code?: number | undefined;

    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languagesexample:en */

    language_code?: string | undefined;

    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string | undefined;

    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;

    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:advanced, html */

    postback_data?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleSearchByImageTaskPostRequestInfo) {

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
            this.image_url = data["image_url"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
        }
    }

    static fromJS(data: any): SerpGoogleSearchByImageTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleSearchByImageTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["image_url"] = this.image_url;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        return data;
    }
}