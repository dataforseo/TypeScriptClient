export interface ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo   {
        
        /** ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4 */
        video_id?: string | undefined
        
        /** full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States */
        location_name?: string | undefined
        
        /** search engine location code
required field if you don’t specify location_name 
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840 */
        location_code?: number | undefined
        
        /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English */
        language_name?: string | undefined
        
        /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en */
        language_code?: string | undefined
        
        /** device type
optional field
only value: desktop */
        device?: string | undefined
        
        /** device operating system
optional field
choose from the following values: windows, macos
default value: windows */
        os?: string | undefined
        
        /** parsing depth
optional field
number of results in SERP
default value: 20
max value: 200
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance */
        depth?: number | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class SerpYoutubeVideoCommentsLiveAdvancedRequestInfo  implements ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo {

    
    /** ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4 */

    video_id?: string | undefined;

    
    /** full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States */

    location_name?: string | undefined;

    
    /** search engine location code
required field if you don’t specify location_name 
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840 */

    location_code?: number | undefined;

    
    /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English */

    language_name?: string | undefined;

    
    /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en */

    language_code?: string | undefined;

    
    /** device type
optional field
only value: desktop */

    device?: string | undefined;

    
    /** device operating system
optional field
choose from the following values: windows, macos
default value: windows */

    os?: string | undefined;

    
    /** parsing depth
optional field
number of results in SERP
default value: 20
max value: 200
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance */

    depth?: number | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo) {

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
            this.video_id = data["video_id"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.os = data["os"];
            this.depth = data["depth"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpYoutubeVideoCommentsLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoCommentsLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["video_id"] = this.video_id;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["os"] = this.os;
        data["depth"] = this.depth;
        data["tag"] = this.tag;
        return data;
    }
}