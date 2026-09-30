export interface ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo   {
        
        /** ID of the video required field you can find video ID in the URL or 'youtube_video' item of YouTube Organic result example: Y8Wu4rSNJms */
        video_id?: string | undefined
        
        /** search engine location code required field if you don't specify location_name  if you use this field, you don't need to specify location_name you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations example: 2840 */
        location_code?: number | undefined
        
        /** search engine language code required field if you don't specify language_name if you use this field, you don't need to specify language_name you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages example: en */
        language_code?: string | undefined
        
        /** device type optional field only value: desktop */
        device?: string | undefined
        
        /** full name of search engine location required field if you don't specify location_code if you use this field, you don't need to specify location_code you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations example: United States */
        location_name?: string | undefined
        
        /** full name of search engine language required field if you don't specify language_code if you use this field, you don't need to specify language_code you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages example: English */
        language_name?: string | undefined
        
        /** device operating system optional field choose from the following values: windows, macos default value: windows */
        os?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** language code of original text you can get the language code from YouTube Video Info result */
        subtitles_language?: string | undefined
        
        /** language code of translated text possible values: 'az', 'ay', 'ak', 'sq', 'am', 'en', 'ar', 'hy', 'as', 'af', 'eu', 'be', 'bn', 'my', 'bg', 'bs', 'bho', 'cy', 'hu', 'vi', 'haw', 'ht', 'gl', 'lg', 'el', 'ka', 'gn', 'gu', 'gd', 'da', 'fy', 'zu', 'iw', 'ig', 'yi', 'id', 'ga', 'is', 'es', 'it', 'yo', 'kk', 'kn', 'ca', 'qu', 'rw', 'ky', 'zh-Hant', 'zh-Hans', 'ko', 'co', 'xh', 'ku', 'km', 'lo', 'la', 'lv', 'ln', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'dv', 'mt', 'mi', 'mr', 'mn', 'und', 'de', 'ne', 'nl', 'no', 'ny', 'or', 'om', 'pa', 'fa', 'pl', 'pt', 'ps', 'ro', 'ru', 'sm', 'sa', 'ceb', 'nso', 'sr', 'si', 'sd', 'sk', 'sl', 'so', 'sw', 'su', 'tg', 'th', 'ta', 'tt', 'te', 'ti', 'ts', 'tr', 'tk', 'uz', 'ug', 'uk', 'ur', 'fil', 'fi', 'fr', 'ha', 'hi', 'hmn', 'hr', 'cs', 'sv', 'sn', 'ee', 'eo', 'et', 'st', 'jv', 'ja', 'kri' */
        subtitles_translate_language?: string | undefined

    [key: string]: any;

    }

export class SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo  implements ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo {

    
    /** ID of the video required field you can find video ID in the URL or 'youtube_video' item of YouTube Organic result example: Y8Wu4rSNJms */

    video_id?: string | undefined;

    
    /** search engine location code required field if you don't specify location_name  if you use this field, you don't need to specify location_name you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations example: 2840 */

    location_code?: number | undefined;

    
    /** search engine language code required field if you don't specify language_name if you use this field, you don't need to specify language_name you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages example: en */

    language_code?: string | undefined;

    
    /** device type optional field only value: desktop */

    device?: string | undefined;

    
    /** full name of search engine location required field if you don't specify location_code if you use this field, you don't need to specify location_code you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations example: United States */

    location_name?: string | undefined;

    
    /** full name of search engine language required field if you don't specify language_code if you use this field, you don't need to specify language_code you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages example: English */

    language_name?: string | undefined;

    
    /** device operating system optional field choose from the following values: windows, macos default value: windows */

    os?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    
    /** language code of original text you can get the language code from YouTube Video Info result */

    subtitles_language?: string | undefined;

    
    /** language code of translated text possible values: 'az', 'ay', 'ak', 'sq', 'am', 'en', 'ar', 'hy', 'as', 'af', 'eu', 'be', 'bn', 'my', 'bg', 'bs', 'bho', 'cy', 'hu', 'vi', 'haw', 'ht', 'gl', 'lg', 'el', 'ka', 'gn', 'gu', 'gd', 'da', 'fy', 'zu', 'iw', 'ig', 'yi', 'id', 'ga', 'is', 'es', 'it', 'yo', 'kk', 'kn', 'ca', 'qu', 'rw', 'ky', 'zh-Hant', 'zh-Hans', 'ko', 'co', 'xh', 'ku', 'km', 'lo', 'la', 'lv', 'ln', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'dv', 'mt', 'mi', 'mr', 'mn', 'und', 'de', 'ne', 'nl', 'no', 'ny', 'or', 'om', 'pa', 'fa', 'pl', 'pt', 'ps', 'ro', 'ru', 'sm', 'sa', 'ceb', 'nso', 'sr', 'si', 'sd', 'sk', 'sl', 'so', 'sw', 'su', 'tg', 'th', 'ta', 'tt', 'te', 'ti', 'ts', 'tr', 'tk', 'uz', 'ug', 'uk', 'ur', 'fil', 'fi', 'fr', 'ha', 'hi', 'hmn', 'hr', 'cs', 'sv', 'sn', 'ee', 'eo', 'et', 'st', 'jv', 'ja', 'kri' */

    subtitles_translate_language?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
            this.subtitles_language = data["subtitles_language"];
            this.subtitles_translate_language = data["subtitles_translate_language"];
        }
    }

    static fromJS(data: any): SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["video_id"] = this.video_id;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        data["subtitles_language"] = this.subtitles_language;
        data["subtitles_translate_language"] = this.subtitles_translate_language;
        return data;
    }
}