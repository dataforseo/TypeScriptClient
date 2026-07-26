export interface ISerpGoogleAutocompleteLiveAdvancedRequestInfo   {
        
        /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field all %## will be decoded (plus character ‘+’ will be decoded to a space character) if you need to use the “%” character for your `keyword`, please specify it as “%25”; if you need to use the “+” character for your `keyword`, please specify it as “%2B”; learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keyword?: string | undefined
        
        /** *search engine location code* **required field if you don't specify** `location_name`; you can receive the list of available locations of the search engines with their `location_code` by making a separate request to `https://api.dataforseo.com/v3/serp/google/locations` example: `2840` */
        location_code?: number | undefined
        
        /** *search engine language code* **required field if you don't specify** `language_name` **if you use this field, you don't need to specify `language_name`**; you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/languages`**example:**`en` */
        language_code?: string | undefined
        
        /** *search bar cursor pointer* optional field the horizontal numerical position of the cursor pointer within the keyword in the search bar; by modifying the position of the cursor pointer, you will obtain different autocomplete suggestions for the same seed keyword; minimal value: `0` default value: the number of the last character of the specified `keyword` example: `|which query are s` - `'cursor_pointer': 0` `which query is s|` - `'cursor_pointer': 16` `which que|ry is s` - `'cursor_pointer': 9` */
        cursor_pointer?: number | undefined
        
        /** *full name of search engine location* **required field if you don't specify** `location_code` **if you use this field, you don't need to specify `location_code`**; you can receive the list of available locations of the search engine with their `location_name` by making a separate request to `https://api.dataforseo.com/v3/serp/google/autocomplete/locations` example: `London,England,United Kingdom` */
        location_name?: string | undefined
        
        /** *full name of search engine language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`**; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to `https://api.dataforseo.com/v3/serp/google/languages` example: `English` */
        language_name?: string | undefined
        
        /** *search client for autocomplete* optional field autocomplete results may differ depending on the search client; possible values: `chrome` — used when google search is opened in google chrome; `chrome-omni` — used in the address bar in chrome; `gws-wiz` — used in google search home page; `gws-wiz-serp` — used in google search engine results page; `safari` — used when google search is opened in safari browser; `firefox` — used when google search is opened in firefox browser; `psy-ab` — may be used when google search is opened in google chrome browser; `toolbar` — returns XML; `youtube` — returns JSONP; `gws-wiz-local` — used in google local; `img` — used in google's image search; `products-cc` — used in google shopping search */
        client?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAutocompleteLiveAdvancedRequestInfo  implements ISerpGoogleAutocompleteLiveAdvancedRequestInfo {

    
    /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field all %## will be decoded (plus character ‘+’ will be decoded to a space character) if you need to use the “%” character for your `keyword`, please specify it as “%25”; if you need to use the “+” character for your `keyword`, please specify it as “%2B”; learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keyword?: string | undefined;

    
    /** *search engine location code* **required field if you don't specify** `location_name`; you can receive the list of available locations of the search engines with their `location_code` by making a separate request to `https://api.dataforseo.com/v3/serp/google/locations` example: `2840` */

    location_code?: number | undefined;

    
    /** *search engine language code* **required field if you don't specify** `language_name` **if you use this field, you don't need to specify `language_name`**; you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/languages`**example:**`en` */

    language_code?: string | undefined;

    
    /** *search bar cursor pointer* optional field the horizontal numerical position of the cursor pointer within the keyword in the search bar; by modifying the position of the cursor pointer, you will obtain different autocomplete suggestions for the same seed keyword; minimal value: `0` default value: the number of the last character of the specified `keyword` example: `|which query are s` - `'cursor_pointer': 0` `which query is s|` - `'cursor_pointer': 16` `which que|ry is s` - `'cursor_pointer': 9` */

    cursor_pointer?: number | undefined;

    
    /** *full name of search engine location* **required field if you don't specify** `location_code` **if you use this field, you don't need to specify `location_code`**; you can receive the list of available locations of the search engine with their `location_name` by making a separate request to `https://api.dataforseo.com/v3/serp/google/autocomplete/locations` example: `London,England,United Kingdom` */

    location_name?: string | undefined;

    
    /** *full name of search engine language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`**; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to `https://api.dataforseo.com/v3/serp/google/languages` example: `English` */

    language_name?: string | undefined;

    
    /** *search client for autocomplete* optional field autocomplete results may differ depending on the search client; possible values: `chrome` — used when google search is opened in google chrome; `chrome-omni` — used in the address bar in chrome; `gws-wiz` — used in google search home page; `gws-wiz-serp` — used in google search engine results page; `safari` — used when google search is opened in safari browser; `firefox` — used when google search is opened in firefox browser; `psy-ab` — may be used when google search is opened in google chrome browser; `toolbar` — returns XML; `youtube` — returns JSONP; `gws-wiz-local` — used in google local; `img` — used in google's image search; `products-cc` — used in google shopping search */

    client?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAutocompleteLiveAdvancedRequestInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.cursor_pointer = data["cursor_pointer"];
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.client = data["client"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpGoogleAutocompleteLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAutocompleteLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["cursor_pointer"] = this.cursor_pointer;
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["client"] = this.client;
        data["tag"] = this.tag;
        return data;
    }
}