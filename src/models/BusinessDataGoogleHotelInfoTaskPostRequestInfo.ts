export interface IBusinessDataGoogleHotelInfoTaskPostRequestInfo   {
        
        /** unique hotel identifier
required field if you don’t specify keyword
if you use this field, you don’t need to specify keyword
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels_pack element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE */
        hotel_identifier?: string | undefined
        
        /** keyword
required field if you don’t specify hotel_identifier
if you use this field, you don’t need to specify hotel_identifier
the keyword you specify should indicate the name of the hotel entity
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25” */
        keyword?: string | undefined
        
        /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840 */
        location_code?: number | undefined
        
        /** GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement;
example:
53.476225,-2.243572 */
        location_coordinate?: string | undefined
        
        /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English */
        language_name?: string | undefined
        
        /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en */
        language_code?: string | undefined
        
        /** check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
the value must not be earlier than today’s date
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */
        check_in?: string | undefined
        
        /** check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */
        check_out?: string | undefined
        
        /** currency
optional field
example:
'USD' */
        currency?: string | undefined
        
        /** number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1 */
        adults?: number | undefined
        
        /** number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
set the following value if you want to include one 14-years-old child:
[14]
set the following value if you want to include one 13-years-old child and one 8-years-old child:
[13,8] */
        children?: string[] | undefined
        
        /** load hotel stay prices by dates
optional field
if you specify this parameter with true, the response will include the prices_by_dates array with hotel stay prices divided by dates
if you use this parameter, you will be charged double the base price for a request */
        load_prices_by_dates?: boolean | undefined
        
        /** start date to load prices by dates
optional field
to use this parameter, you must specify load_prices_by_dates with true
if this parameter is not specified, the start date is set to check_in date
date format: yyyy-mm-dd
example:
2025-05-20 */
        prices_start_date?: string | undefined
        
        /** end date to load prices by dates
optional field
to use this parameter, you must specify load_prices_by_dates with true
if this parameter is not specified, you will get prices by date for the month
date format: yyyy-mm-dd
example:
2025-05-21 */
        prices_end_date?: string | undefined
        
        /** predefined period for retrieving daily price data
optional field
to use this parameter, you must specify load_prices_by_dates with true
if the prices_start_date is not specified, the start date is set to check_in date
possible values: month, three_months, six_months, year
default value: month */
        prices_date_range?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255;
you can use this parameter to identify the task and match it with the result;
you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified;
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request;
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html */
        postback_data?: string | undefined
        
        /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified;
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable;
we will set the necessary values before sending the request;
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleHotelInfoTaskPostRequestInfo  implements IBusinessDataGoogleHotelInfoTaskPostRequestInfo {
    
    /** unique hotel identifier
required field if you don’t specify keyword
if you use this field, you don’t need to specify keyword
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels_pack element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE */

    hotel_identifier?: string | undefined;
    
    /** keyword
required field if you don’t specify hotel_identifier
if you use this field, you don’t need to specify hotel_identifier
the keyword you specify should indicate the name of the hotel entity
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25” */

    keyword?: string | undefined;
    
    /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840 */

    location_code?: number | undefined;
    
    /** GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement;
example:
53.476225,-2.243572 */

    location_coordinate?: string | undefined;
    
    /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English */

    language_name?: string | undefined;
    
    /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en */

    language_code?: string | undefined;
    
    /** check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
the value must not be earlier than today’s date
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */

    check_in?: string | undefined;
    
    /** check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */

    check_out?: string | undefined;
    
    /** currency
optional field
example:
'USD' */

    currency?: string | undefined;
    
    /** number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1 */

    adults?: number | undefined;
    
    /** number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
set the following value if you want to include one 14-years-old child:
[14]
set the following value if you want to include one 13-years-old child and one 8-years-old child:
[13,8] */

    children?: string[] | undefined;
    
    /** load hotel stay prices by dates
optional field
if you specify this parameter with true, the response will include the prices_by_dates array with hotel stay prices divided by dates
if you use this parameter, you will be charged double the base price for a request */

    load_prices_by_dates?: boolean | undefined;
    
    /** start date to load prices by dates
optional field
to use this parameter, you must specify load_prices_by_dates with true
if this parameter is not specified, the start date is set to check_in date
date format: yyyy-mm-dd
example:
2025-05-20 */

    prices_start_date?: string | undefined;
    
    /** end date to load prices by dates
optional field
to use this parameter, you must specify load_prices_by_dates with true
if this parameter is not specified, you will get prices by date for the month
date format: yyyy-mm-dd
example:
2025-05-21 */

    prices_end_date?: string | undefined;
    
    /** predefined period for retrieving daily price data
optional field
to use this parameter, you must specify load_prices_by_dates with true
if the prices_start_date is not specified, the start date is set to check_in date
possible values: month, three_months, six_months, year
default value: month */

    prices_date_range?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255;
you can use this parameter to identify the task and match it with the result;
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified;
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request;
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html */

    postback_data?: string | undefined;
    
    /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified;
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable;
we will set the necessary values before sending the request;
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleHotelInfoTaskPostRequestInfo) {

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
            this.hotel_identifier = data["hotel_identifier"];
            this.keyword = data["keyword"];
            this.priority = data["priority"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.check_in = data["check_in"];
            this.check_out = data["check_out"];
            this.currency = data["currency"];
            this.adults = data["adults"];
            this.children = data["children"];
            this.load_prices_by_dates = data["load_prices_by_dates"];
            this.prices_start_date = data["prices_start_date"];
            this.prices_end_date = data["prices_end_date"];
            this.prices_date_range = data["prices_date_range"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): BusinessDataGoogleHotelInfoTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleHotelInfoTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["hotel_identifier"] = this.hotel_identifier;
        data["keyword"] = this.keyword;
        data["priority"] = this.priority;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["check_in"] = this.check_in;
        data["check_out"] = this.check_out;
        data["currency"] = this.currency;
        data["adults"] = this.adults;
        data["children"] = this.children;
        data["load_prices_by_dates"] = this.load_prices_by_dates;
        data["prices_start_date"] = this.prices_start_date;
        data["prices_end_date"] = this.prices_end_date;
        data["prices_date_range"] = this.prices_date_range;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}