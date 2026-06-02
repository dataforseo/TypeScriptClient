export interface IMerchantAmazonProductsLiveAdvancedRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in this fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://www.amazon.com/s/?field-keywords=shoes&language=en_US */
        url?: string | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations with their location_name parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locationsexample:HA1,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations with their location_code parameters by making a separate request to thehttps://api.dataforseo.com/v3/merchant/amazon/locationsexample:9045969 */
        location_code?: number | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages with their language_name parameters by making a separate request to thehttps://api.dataforseo.com/v3/merchant/amazon/languagesexample:English (United Kingdom) */
        language_name?: string | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages with their language_code parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languagesexample:en_GB */
        language_code?: string | undefined
        
        /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:amazon.com, amazon.co.uk, amazon.fr, etc. */
        se_domain?: string | undefined
        
        /** parsing depthoptional fieldnumber of results to be retrieved from the Amazon results pagedefault value: 100max value: 700Your account will be billed per each SERP containing up to 100 results; Setting depth above 100 may result in additional charges if the search engine returns more than 100 results;The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 7Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** amazon product departmentoptional fieldspecify one of the following amazon departments for extracting product listings:'Arts & Crafts', 'Automotive', 'Baby', 'Beauty & Personal Care', 'Books', 'Computers', 'Digital Music', 'Electronics', 'Kindle Store', 'Prime Video', 'Women's Fashion', 'Men's Fashion', 'Girls' Fashion', 'Boys' Fashion', 'Deals', 'Health & Household', 'Home & Kitchen', 'Industrial & Scientific', 'Luggage', 'Movies & TV', 'Music, CDs & Vinyl', 'Pet Supplies', 'Software', 'Sports & Outdoors', 'Tools & Home Improvement', 'Toys & Games', 'Video Games' */
        department?: string | undefined
        
        /** additional parameters of the search queryoptional fieldyou can use the following Amazon search URL parameters for customizing the searchexample:&low-price=52 - search for products that cost more than 52 USD;&high-price=45 - search for products that cost less than 45 USD;&sort=relevancerank - sort results by relevance;&sort=featured-rank - sort results by featured products;&sort=price-asc-rank - sort by ascending price;&sort=price-desc-rank - sort by descending price;&sort=review-rank - sort by the average customer reviews value;&sort=date-desc-rank - sort by the newest arrivalNote that search_param values will be ignored if any of the following parameters is used: price_min, price_max, sort_by */
        search_param?: string | undefined
        
        /** minimum product priceoptional fieldminimum price of the returned products listed on Amazon for the specified queryexample:5Note: if you specify price_min, the search_param parameter will be ignored */
        price_min?: number | undefined
        
        /** maximum product priceoptional fieldmaximum price of the returned products listed on Amazon for the specified queryexample:100Note: if you specify price_max, the search_param parameter will be ignored */
        price_max?: number | undefined
        
        /** results sorting rulesoptional fieldthe following sorting rules are supported:relevance, price_low_to_high, price_high_to_low, featured, avg_customer_review, newest_arrivalexample:sort_by:'relevance'Note: if you specify sort_by, the search_param parameter will be ignored */
        sort_by?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class MerchantAmazonProductsLiveAdvancedRequestInfo  implements IMerchantAmazonProductsLiveAdvancedRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in this fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://www.amazon.com/s/?field-keywords=shoes&language=en_US */

    url?: string | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations with their location_name parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locationsexample:HA1,England,United Kingdom */

    location_name?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations with their location_code parameters by making a separate request to thehttps://api.dataforseo.com/v3/merchant/amazon/locationsexample:9045969 */

    location_code?: number | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages with their language_name parameters by making a separate request to thehttps://api.dataforseo.com/v3/merchant/amazon/languagesexample:English (United Kingdom) */

    language_name?: string | undefined;
    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages with their language_code parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languagesexample:en_GB */

    language_code?: string | undefined;
    
    /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:amazon.com, amazon.co.uk, amazon.fr, etc. */

    se_domain?: string | undefined;
    
    /** parsing depthoptional fieldnumber of results to be retrieved from the Amazon results pagedefault value: 100max value: 700Your account will be billed per each SERP containing up to 100 results; Setting depth above 100 may result in additional charges if the search engine returns more than 100 results;The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 7Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */

    max_crawl_pages?: number | undefined;
    
    /** amazon product departmentoptional fieldspecify one of the following amazon departments for extracting product listings:'Arts & Crafts', 'Automotive', 'Baby', 'Beauty & Personal Care', 'Books', 'Computers', 'Digital Music', 'Electronics', 'Kindle Store', 'Prime Video', 'Women's Fashion', 'Men's Fashion', 'Girls' Fashion', 'Boys' Fashion', 'Deals', 'Health & Household', 'Home & Kitchen', 'Industrial & Scientific', 'Luggage', 'Movies & TV', 'Music, CDs & Vinyl', 'Pet Supplies', 'Software', 'Sports & Outdoors', 'Tools & Home Improvement', 'Toys & Games', 'Video Games' */

    department?: string | undefined;
    
    /** additional parameters of the search queryoptional fieldyou can use the following Amazon search URL parameters for customizing the searchexample:&low-price=52 - search for products that cost more than 52 USD;&high-price=45 - search for products that cost less than 45 USD;&sort=relevancerank - sort results by relevance;&sort=featured-rank - sort results by featured products;&sort=price-asc-rank - sort by ascending price;&sort=price-desc-rank - sort by descending price;&sort=review-rank - sort by the average customer reviews value;&sort=date-desc-rank - sort by the newest arrivalNote that search_param values will be ignored if any of the following parameters is used: price_min, price_max, sort_by */

    search_param?: string | undefined;
    
    /** minimum product priceoptional fieldminimum price of the returned products listed on Amazon for the specified queryexample:5Note: if you specify price_min, the search_param parameter will be ignored */

    price_min?: number | undefined;
    
    /** maximum product priceoptional fieldmaximum price of the returned products listed on Amazon for the specified queryexample:100Note: if you specify price_max, the search_param parameter will be ignored */

    price_max?: number | undefined;
    
    /** results sorting rulesoptional fieldthe following sorting rules are supported:relevance, price_low_to_high, price_high_to_low, featured, avg_customer_review, newest_arrivalexample:sort_by:'relevance'Note: if you specify sort_by, the search_param parameter will be ignored */

    sort_by?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonProductsLiveAdvancedRequestInfo) {

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
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.se_domain = data["se_domain"];
            this.depth = data["depth"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.department = data["department"];
            this.search_param = data["search_param"];
            this.price_min = data["price_min"];
            this.price_max = data["price_max"];
            this.sort_by = data["sort_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): MerchantAmazonProductsLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonProductsLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["url"] = this.url;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["se_domain"] = this.se_domain;
        data["depth"] = this.depth;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["department"] = this.department;
        data["search_param"] = this.search_param;
        data["price_min"] = this.price_min;
        data["price_max"] = this.price_max;
        data["sort_by"] = this.sort_by;
        data["tag"] = this.tag;
        return data;
    }
}