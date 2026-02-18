export interface IBusinessDataTripadvisorReviewsTaskPostRequestInfo   {
        
        /** URL path of the business entity
required field if you do not specify keyword
URL path to the Tripadvisor page of the business entity;
examples:
Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html
https://www.tripadvisor.com/Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html */
        url_path?: string | undefined
        
        /** keyword
required field if you do not specify url_path
the keyword you specify should indicate a name of an existing business or prominent place on Tripadvisor;
you can specify up to 700 characters in the keyword filed;
all %## will be decoded (plus character ‘+’ will be decoded to a space character);
if you need to use the “%” character for your keyword, please specify it as “%25” */
        keyword?: string | undefined
        
        /** full name of search engine location
required field if you don’t specify location_code or url_path
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location code
required field if you don’t specify location_name or url_path
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854 */
        location_code?: number | undefined
        
        /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** full name of search engine language
optional field
if you use this field, your account will be charged for one extra request
you can receive the list of available languages with language_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/languages
example:
English
You will be additionally charged for setting a language parameter in this endpoint.
The cost can be calculated on the Pricing page. */
        language_name?: string | undefined
        
        /** search engine language code
optional field
if you use this field, your account will be charged for one extra request
you can receive the list of available languages with language_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/languages
example:
en
You will be additionally charged for setting a language parameter in this endpoint.
The cost can be calculated on the Pricing page. */
        language_code?: string | undefined
        
        /** parsing depth
optional field
number of reviews in SERP;
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row;
default value: 10;
max value: 4490
Your account will be billed per each SERP containing up to 10 results;
Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;
The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** Tripadvisor traveler rating for a place of interest
optional field
rating based on the written reviews by a traveler after they visited a place.
possible values: excellent, very_good, average, poor, terrible
you can specify several values at once */
        ratings?: string[] | undefined
        
        /** filter by type of travelers who left a review
optional field
possible values: families, couples, solo, business, friends
you can specify several values at once */
        visit_type?: string[] | undefined
        
        /** filter by months when a traveler made a visit
optional field
possible values: january, february, march, april, may, april, june, july, august, september, october, november, december
you can specify several values at once */
        months?: string[] | undefined
        
        /** search reviews containing a specified keyword
example:
dessert */
        search_reviews_keyword?: string | undefined
        
        /** results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
most_recent
detailed_reviews */
        sort_by?: string | undefined
        
        /** translate reviews according to the URL path
optional field
if set to true, returned reviews will be translated to the language matching the specified url_path;
for example, if url_path contains tripadvisor.it and translate_reviews is true, reviews will be translated to the Italian language;
default value: true
you can learn more about how reviews are translated in this Help Center article */
        translate_reviews?: boolean | undefined
        
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
i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorReviewsTaskPostRequestInfo  implements IBusinessDataTripadvisorReviewsTaskPostRequestInfo {
    
    /** URL path of the business entity
required field if you do not specify keyword
URL path to the Tripadvisor page of the business entity;
examples:
Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html
https://www.tripadvisor.com/Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html */

    url_path?: string | undefined;
    
    /** keyword
required field if you do not specify url_path
the keyword you specify should indicate a name of an existing business or prominent place on Tripadvisor;
you can specify up to 700 characters in the keyword filed;
all %## will be decoded (plus character ‘+’ will be decoded to a space character);
if you need to use the “%” character for your keyword, please specify it as “%25” */

    keyword?: string | undefined;
    
    /** full name of search engine location
required field if you don’t specify location_code or url_path
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** search engine location code
required field if you don’t specify location_name or url_path
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854 */

    location_code?: number | undefined;
    
    /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** full name of search engine language
optional field
if you use this field, your account will be charged for one extra request
you can receive the list of available languages with language_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/languages
example:
English
You will be additionally charged for setting a language parameter in this endpoint.
The cost can be calculated on the Pricing page. */

    language_name?: string | undefined;
    
    /** search engine language code
optional field
if you use this field, your account will be charged for one extra request
you can receive the list of available languages with language_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/languages
example:
en
You will be additionally charged for setting a language parameter in this endpoint.
The cost can be calculated on the Pricing page. */

    language_code?: string | undefined;
    
    /** parsing depth
optional field
number of reviews in SERP;
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row;
default value: 10;
max value: 4490
Your account will be billed per each SERP containing up to 10 results;
Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;
The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** Tripadvisor traveler rating for a place of interest
optional field
rating based on the written reviews by a traveler after they visited a place.
possible values: excellent, very_good, average, poor, terrible
you can specify several values at once */

    ratings?: string[] | undefined;
    
    /** filter by type of travelers who left a review
optional field
possible values: families, couples, solo, business, friends
you can specify several values at once */

    visit_type?: string[] | undefined;
    
    /** filter by months when a traveler made a visit
optional field
possible values: january, february, march, april, may, april, june, july, august, september, october, november, december
you can specify several values at once */

    months?: string[] | undefined;
    
    /** search reviews containing a specified keyword
example:
dessert */

    search_reviews_keyword?: string | undefined;
    
    /** results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
most_recent
detailed_reviews */

    sort_by?: string | undefined;
    
    /** translate reviews according to the URL path
optional field
if set to true, returned reviews will be translated to the language matching the specified url_path;
for example, if url_path contains tripadvisor.it and translate_reviews is true, reviews will be translated to the Italian language;
default value: true
you can learn more about how reviews are translated in this Help Center article */

    translate_reviews?: boolean | undefined;
    
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
i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorReviewsTaskPostRequestInfo) {

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
            this.url_path = data["url_path"];
            this.keyword = data["keyword"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.priority = data["priority"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.depth = data["depth"];
            this.ratings = data["ratings"];
            this.visit_type = data["visit_type"];
            this.months = data["months"];
            this.search_reviews_keyword = data["search_reviews_keyword"];
            this.sort_by = data["sort_by"];
            this.translate_reviews = data["translate_reviews"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorReviewsTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorReviewsTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url_path"] = this.url_path;
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["priority"] = this.priority;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["ratings"] = this.ratings;
        data["visit_type"] = this.visit_type;
        data["months"] = this.months;
        data["search_reviews_keyword"] = this.search_reviews_keyword;
        data["sort_by"] = this.sort_by;
        data["translate_reviews"] = this.translate_reviews;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}