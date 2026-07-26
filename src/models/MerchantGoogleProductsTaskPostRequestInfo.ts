export interface IMerchantGoogleProductsTaskPostRequestInfo   {
        
        /** keyword required field you can specify up to 700 characters in the keyword filed all %## will be decoded (plus character ‘+’ will be decoded to a space character) if you need to use the “%” character for your keyword, please specify it as “%25”; learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** direct URL of the search query optional field you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method. example: https://www.google.com/search?q=fish&hl=en&gl=US&gws_rd=cr&uule=w+CAIQIFISCQs2MuSEtepUEUK33kOSuTsc */
        url?: string | undefined
        
        /** task priority optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priority You will be additionally charged for the tasks with high execution priority. The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** full name of the location required field if you don’t specify location_code or location_coordinate if you use this field, you don’t need to specify location_code or location_coordinate you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations example: London,England,United Kingdom */
        location_name?: string | undefined
        
        /** location code required field if you don’t specify location_name or location_coordinate if you use this field, you don’t need to specify location_name or location_coordinate you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations example: 2840 */
        location_code?: number | undefined
        
        /** GPS coordinates of a location required field if you don’t specify location_name or location_code if you use this field, you don’t need to specify location_name or location_code location_coordinate parameter should be specified in the “latitude,longitude,radius” format the maximum number of decimal digits for “latitude” and “longitude”: 7 the minimum value for “radius”: 199.9 example: 53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** full name of the language required field if you don’t specify language_code if you use this field, you don’t need to specify language_code you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages example: English */
        language_name?: string | undefined
        
        /** language code required field if you don’t specify language_name if you use this field, you don’t need to specify language_name you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages example: en */
        language_code?: string | undefined
        
        /** search engine domain optional field we choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field example: google.co.uk, google.com.au, google.de, etc. */
        se_domain?: string | undefined
        
        /** parsing depth optional field number of results to be retrieved from Google Shopping SERP default value: 40 max value: 120 Your account will be billed per each SERP containing up to 40 results; Setting depth above 40 may result in additional charges if the search engine returns more than 40 results; The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** page crawl limit optional field number of search results pages to crawl max value: 7 Note: the max_crawl_pages and depth parameters complement each other; learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** additional parameters of the search query optional field you can use the following search URL parameters for customizing the search; example: &tbs=ppr_min:45 – search for products that cost more than 45 USD; &tbs=ppr_max:50 – search for products that cost less than 50 USD; &tbs=p_ord:p – sort by ascending price; &tbs=p_ord:pd – sort by descending price; &tbs=p_ord:rv – sort by review score; &tbs=ppr_max:50,p_ord:rv – sort by review score with the maximum price of 50 USD.; &udm=28 – use new Google Shopping markup with 40 SERP results returned by default (the cost for one SERP is deducted accordingly); the maximum depth is 200; this parameter must be specified without tbm=shop in the url; &shoprs=$value – specify advanced filtering and sorting in the new Shopping markup; replace $value with a string in protobuf Base64 format; learn more on our help center. Note that search_param values will be ignored if any of the following parameters are used: price_min, price_max, sort_by */
        search_param?: string | undefined
        
        /** minimum product price optional field minimum price of the returned products listed on Google Shopping for the specified query example: 5 Note: if you specify price_min, the search_param parameter will be ignored */
        price_min?: number | undefined
        
        /** maximum product price optional field maximum price of the returned products listed on Google Shopping for the specified query example: 100 Note: if you specify price_max, the search_param parameter will be ignored */
        price_max?: number | undefined
        
        /** results sorting rules optional field the following sorting rules are supported: review_score, price_low_to_high, price_high_to_low example: sort_by:'review_score' Note: if you specify sort_by, the search_param parameter will be ignored */
        sort_by?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** URL for sending task results optional field once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/postbackscript?id=$id http://your-server.com/postbackscript?id=$id&tag=$tag Note: special characters in postback_url will be urlencoded; i.a., the # character will be encoded into %23 learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatype required field if you specify postback_url corresponds to the datatype that will be sent to your server possible values: advanced, html */
        postback_data?: string | undefined
        
        /** notification URL of a completed task optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/pingscript?id=$id http://your-server.com/pingscript?id=$id&tag=$tag Note: special characters in pingback_url will be urlencoded; i.a., the # character will be encoded into %23 learn more on our Help Center */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class MerchantGoogleProductsTaskPostRequestInfo  implements IMerchantGoogleProductsTaskPostRequestInfo {

    
    /** keyword required field you can specify up to 700 characters in the keyword filed all %## will be decoded (plus character ‘+’ will be decoded to a space character) if you need to use the “%” character for your keyword, please specify it as “%25”; learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** direct URL of the search query optional field you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method. example: https://www.google.com/search?q=fish&hl=en&gl=US&gws_rd=cr&uule=w+CAIQIFISCQs2MuSEtepUEUK33kOSuTsc */

    url?: string | undefined;

    
    /** task priority optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priority You will be additionally charged for the tasks with high execution priority. The cost can be calculated on the Pricing page. */

    priority?: number | undefined;

    
    /** full name of the location required field if you don’t specify location_code or location_coordinate if you use this field, you don’t need to specify location_code or location_coordinate you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations example: London,England,United Kingdom */

    location_name?: string | undefined;

    
    /** location code required field if you don’t specify location_name or location_coordinate if you use this field, you don’t need to specify location_name or location_coordinate you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations example: 2840 */

    location_code?: number | undefined;

    
    /** GPS coordinates of a location required field if you don’t specify location_name or location_code if you use this field, you don’t need to specify location_name or location_code location_coordinate parameter should be specified in the “latitude,longitude,radius” format the maximum number of decimal digits for “latitude” and “longitude”: 7 the minimum value for “radius”: 199.9 example: 53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;

    
    /** full name of the language required field if you don’t specify language_code if you use this field, you don’t need to specify language_code you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages example: English */

    language_name?: string | undefined;

    
    /** language code required field if you don’t specify language_name if you use this field, you don’t need to specify language_name you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages example: en */

    language_code?: string | undefined;

    
    /** search engine domain optional field we choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field example: google.co.uk, google.com.au, google.de, etc. */

    se_domain?: string | undefined;

    
    /** parsing depth optional field number of results to be retrieved from Google Shopping SERP default value: 40 max value: 120 Your account will be billed per each SERP containing up to 40 results; Setting depth above 40 may result in additional charges if the search engine returns more than 40 results; The cost can be calculated on the Pricing page. */

    depth?: number | undefined;

    
    /** page crawl limit optional field number of search results pages to crawl max value: 7 Note: the max_crawl_pages and depth parameters complement each other; learn more at our help center */

    max_crawl_pages?: number | undefined;

    
    /** additional parameters of the search query optional field you can use the following search URL parameters for customizing the search; example: &tbs=ppr_min:45 – search for products that cost more than 45 USD; &tbs=ppr_max:50 – search for products that cost less than 50 USD; &tbs=p_ord:p – sort by ascending price; &tbs=p_ord:pd – sort by descending price; &tbs=p_ord:rv – sort by review score; &tbs=ppr_max:50,p_ord:rv – sort by review score with the maximum price of 50 USD.; &udm=28 – use new Google Shopping markup with 40 SERP results returned by default (the cost for one SERP is deducted accordingly); the maximum depth is 200; this parameter must be specified without tbm=shop in the url; &shoprs=$value – specify advanced filtering and sorting in the new Shopping markup; replace $value with a string in protobuf Base64 format; learn more on our help center. Note that search_param values will be ignored if any of the following parameters are used: price_min, price_max, sort_by */

    search_param?: string | undefined;

    
    /** minimum product price optional field minimum price of the returned products listed on Google Shopping for the specified query example: 5 Note: if you specify price_min, the search_param parameter will be ignored */

    price_min?: number | undefined;

    
    /** maximum product price optional field maximum price of the returned products listed on Google Shopping for the specified query example: 100 Note: if you specify price_max, the search_param parameter will be ignored */

    price_max?: number | undefined;

    
    /** results sorting rules optional field the following sorting rules are supported: review_score, price_low_to_high, price_high_to_low example: sort_by:'review_score' Note: if you specify sort_by, the search_param parameter will be ignored */

    sort_by?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    
    /** URL for sending task results optional field once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/postbackscript?id=$id http://your-server.com/postbackscript?id=$id&tag=$tag Note: special characters in postback_url will be urlencoded; i.a., the # character will be encoded into %23 learn more on our Help Center */

    postback_url?: string | undefined;

    
    /** postback_url datatype required field if you specify postback_url corresponds to the datatype that will be sent to your server possible values: advanced, html */

    postback_data?: string | undefined;

    
    /** notification URL of a completed task optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/pingscript?id=$id http://your-server.com/pingscript?id=$id&tag=$tag Note: special characters in pingback_url will be urlencoded; i.a., the # character will be encoded into %23 learn more on our Help Center */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleProductsTaskPostRequestInfo) {

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
            this.url = data["url"];
            this.priority = data["priority"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.se_domain = data["se_domain"];
            this.depth = data["depth"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.search_param = data["search_param"];
            this.price_min = data["price_min"];
            this.price_max = data["price_max"];
            this.sort_by = data["sort_by"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): MerchantGoogleProductsTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleProductsTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["url"] = this.url;
        data["priority"] = this.priority;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["se_domain"] = this.se_domain;
        data["depth"] = this.depth;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["search_param"] = this.search_param;
        data["price_min"] = this.price_min;
        data["price_max"] = this.price_max;
        data["sort_by"] = this.sort_by;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}