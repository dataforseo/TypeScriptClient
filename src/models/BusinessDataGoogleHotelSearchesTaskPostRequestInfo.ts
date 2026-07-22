export interface IBusinessDataGoogleHotelSearchesTaskPostRequestInfo   {
        
        /** keyword
optional field
the keyword you specify is used to search for the list of hotels;
if you don’t use this field, we will return the list of hotels found in a specified location;
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
Note: in order to obtain accurate search results, the location name is appended to the keyword automatically
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
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
London,England,United Kingdom
Note: in order to obtain accurate search results, the location_name you specify will be automatically appended to the keyword */
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
        
        /** show hotels from the displayed area
optional field
can take the values: true, false
default value: true
if set to false the search_this_area mode will be turned off
Note: if the search_this_area mode is turned off, the location_name won’t be appended to the keyword during search
learn more about this parameter on our Help Center */
        search_this_area?: boolean | undefined
        
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
        
        /** parsing depth
optional field
number of results in Google Hotels
default value: 18 organic results
max value: 140
Note: your account will be billed per each 18 organic results regardless of paid listings in the response;
thus, setting a depth above 18 may result in additional charges if Google Hotels return more than 18 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance */
        depth?: number | undefined
        
        /** check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: 'yyyy-mm-dd'
example:
'2019-01-15'
Note: the value cannot precede the today’s date */
        check_in?: string | undefined
        
        /** check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: 'yyyy-mm-dd'
example:
'2019-01-15'
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days */
        check_out?: string | undefined
        
        /** currency
optional field
example:
'USD' */
        currency?: string | undefined
        
        /** number of adults
optional field
if you don’t specify this field, the default value of 2 will be applied;
note that you can specify up to 6 persons including both adults and children
example:
1 */
        adults?: number | undefined
        
        /** number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
age of child can be from 0 to 17;
note that you can specify up to 6 persons including both adults and children
set the following value if you want to include one 14-year-old child:
[14]
set the following value if you want to include one 13-year-old child and one 8-year-old child:
[13,8] */
        children?: string[] | undefined
        
        /** hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5] */
        stars?: string[] | undefined
        
        /** minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5 */
        min_rating?: number | undefined
        
        /** results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
relevance – sort by most relevant
lowest_price – sort by the lowest price
highest_rating – sort by highest rating
most_reviewed – sort by most reviewed
default value: relevance */
        sort_by?: string | undefined
        
        /** minimum price per night
optional field
the currency of this value depends on the currency field
example:
100 */
        min_price?: number | undefined
        
        /** maximum price per night
optional field
the currency of this value depends on the currency field
example:
600 */
        max_price?: number | undefined
        
        /** hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false */
        free_cancellation?: boolean | undefined
        
        /** search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false */
        is_vacation_rentals?: boolean | undefined
        
        /** hotel amenities
optional field
you can use this field to specify different hotel amenities
example:
  [
            'free_parking',
            'pets_allowed'
        ]

possible values:
'air_conditioning',
'all_inclusive_available',
'bar',
'free_breakfast',
'fitness_center',
'kid_friendly',
'free_parking',
'pets_allowed',
'pool',
'restaurant',
'room_service',
'spa',
'free_wifi',
'parking',
'indoor_pool',
'outdoor_pool',
'wheelchair_accessible',
'beach_access' */
        amenities?: string[] | undefined
        
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

export class BusinessDataGoogleHotelSearchesTaskPostRequestInfo  implements IBusinessDataGoogleHotelSearchesTaskPostRequestInfo {

    
    /** keyword
optional field
the keyword you specify is used to search for the list of hotels;
if you don’t use this field, we will return the list of hotels found in a specified location;
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
Note: in order to obtain accurate search results, the location name is appended to the keyword automatically
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

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
London,England,United Kingdom
Note: in order to obtain accurate search results, the location_name you specify will be automatically appended to the keyword */

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

    
    /** show hotels from the displayed area
optional field
can take the values: true, false
default value: true
if set to false the search_this_area mode will be turned off
Note: if the search_this_area mode is turned off, the location_name won’t be appended to the keyword during search
learn more about this parameter on our Help Center */

    search_this_area?: boolean | undefined;

    
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

    
    /** parsing depth
optional field
number of results in Google Hotels
default value: 18 organic results
max value: 140
Note: your account will be billed per each 18 organic results regardless of paid listings in the response;
thus, setting a depth above 18 may result in additional charges if Google Hotels return more than 18 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance */

    depth?: number | undefined;

    
    /** check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: 'yyyy-mm-dd'
example:
'2019-01-15'
Note: the value cannot precede the today’s date */

    check_in?: string | undefined;

    
    /** check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: 'yyyy-mm-dd'
example:
'2019-01-15'
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days */

    check_out?: string | undefined;

    
    /** currency
optional field
example:
'USD' */

    currency?: string | undefined;

    
    /** number of adults
optional field
if you don’t specify this field, the default value of 2 will be applied;
note that you can specify up to 6 persons including both adults and children
example:
1 */

    adults?: number | undefined;

    
    /** number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
age of child can be from 0 to 17;
note that you can specify up to 6 persons including both adults and children
set the following value if you want to include one 14-year-old child:
[14]
set the following value if you want to include one 13-year-old child and one 8-year-old child:
[13,8] */

    children?: string[] | undefined;

    
    /** hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5] */

    stars?: string[] | undefined;

    
    /** minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5 */

    min_rating?: number | undefined;

    
    /** results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
relevance – sort by most relevant
lowest_price – sort by the lowest price
highest_rating – sort by highest rating
most_reviewed – sort by most reviewed
default value: relevance */

    sort_by?: string | undefined;

    
    /** minimum price per night
optional field
the currency of this value depends on the currency field
example:
100 */

    min_price?: number | undefined;

    
    /** maximum price per night
optional field
the currency of this value depends on the currency field
example:
600 */

    max_price?: number | undefined;

    
    /** hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false */

    free_cancellation?: boolean | undefined;

    
    /** search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false */

    is_vacation_rentals?: boolean | undefined;

    
    /** hotel amenities
optional field
you can use this field to specify different hotel amenities
example:
  [
            'free_parking',
            'pets_allowed'
        ]

possible values:
'air_conditioning',
'all_inclusive_available',
'bar',
'free_breakfast',
'fitness_center',
'kid_friendly',
'free_parking',
'pets_allowed',
'pool',
'restaurant',
'room_service',
'spa',
'free_wifi',
'parking',
'indoor_pool',
'outdoor_pool',
'wheelchair_accessible',
'beach_access' */

    amenities?: string[] | undefined;

    
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


    constructor(data?: IBusinessDataGoogleHotelSearchesTaskPostRequestInfo) {

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
            this.priority = data["priority"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.search_this_area = data["search_this_area"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.depth = data["depth"];
            this.check_in = data["check_in"];
            this.check_out = data["check_out"];
            this.currency = data["currency"];
            this.adults = data["adults"];
            this.children = data["children"];
            this.stars = data["stars"];
            this.min_rating = data["min_rating"];
            this.sort_by = data["sort_by"];
            this.min_price = data["min_price"];
            this.max_price = data["max_price"];
            this.free_cancellation = data["free_cancellation"];
            this.is_vacation_rentals = data["is_vacation_rentals"];
            this.amenities = data["amenities"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): BusinessDataGoogleHotelSearchesTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleHotelSearchesTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["priority"] = this.priority;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["search_this_area"] = this.search_this_area;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["check_in"] = this.check_in;
        data["check_out"] = this.check_out;
        data["currency"] = this.currency;
        data["adults"] = this.adults;
        data["children"] = this.children;
        data["stars"] = this.stars;
        data["min_rating"] = this.min_rating;
        data["sort_by"] = this.sort_by;
        data["min_price"] = this.min_price;
        data["max_price"] = this.max_price;
        data["free_cancellation"] = this.free_cancellation;
        data["is_vacation_rentals"] = this.is_vacation_rentals;
        data["amenities"] = this.amenities;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}