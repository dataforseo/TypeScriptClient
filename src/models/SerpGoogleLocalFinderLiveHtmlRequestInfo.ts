export interface ISerpGoogleLocalFinderLiveHtmlRequestInfo   {
        
        /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B” */
        keyword?: string | undefined
        
        /** search engine location code
required field if you don't specify location_name or location_coordinate
if you use this field, you don't need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840 */
        location_code?: number | undefined
        
        /** search engine language code
required field if you don't specify language_name
if you use this field, you don't need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:en */
        language_code?: string | undefined
        
        /** parsing depth
optional field
number of results in SERP
default value for desktop: 20
max value for desktop: 100
default value for mobile: 10
max value for mobile: 100
Your account will be billed per each SERP containing up to 20 results for desktop or up to 10 results for a mobile device;
Setting depth above 20 for desktop or above 10 for mobile may result in additional charges if the search engine returns more than 20 or 10 results respectively;
If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically
The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** device type
optional field
return results for a specific device type
can take the values:desktop, mobile
default value: desktop */
        device?: string | undefined
        
        /** full name of search engine location
required field if you don't specify location_code or location_coordinate
if you use this field, you don't need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom */
        location_name?: string | undefined
        
        /** full name of search engine language
required field if you don't specify language_code
if you use this field, you don't need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English */
        language_name?: string | undefined
        
        /** device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android */
        os?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** GPS coordinates of a location
required field if you don't specify location_name or location_code
if you use this field, you don't need to specify location_name or location_code
location_coordinate parameter should be specified in the 'latitude,longitude,zoom' format
if 'zoom' is not specified, 9z will be applied as a default value
the maximum number of decimal digits for 'latitude' and 'longitude': 7
the minimum value for 'zoom': 4z
the maximum value for 'zoom': 18z
example:
52.6178549,-155.352142,20z */
        location_coordinate?: string | undefined
        
        /** filter results by minimum rating
optional field
possible values for desktop: 3.5, 4, 4.5;
possible values for mobile: 2, 2.5, 3, 3.5, 4, 4.5 */
        min_rating?: string | undefined
        
        /** filter results by open hours
optional field
using this field, you can filter places in the results by the time a place is open for visitors
note that Google may also provide results that do not match this filter
possible values: 'open_now', '24_hours', '$day_value', '$day_value;$time_value';
instead of $day_value use one of these values: 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday';
instead of $time_value use one of these values: '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
example: 'tuesday;18' */
        time_filter?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleLocalFinderLiveHtmlRequestInfo  implements ISerpGoogleLocalFinderLiveHtmlRequestInfo {
    
    /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B” */

    keyword?: string | undefined;
    
    /** search engine location code
required field if you don't specify location_name or location_coordinate
if you use this field, you don't need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840 */

    location_code?: number | undefined;
    
    /** search engine language code
required field if you don't specify language_name
if you use this field, you don't need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:en */

    language_code?: string | undefined;
    
    /** parsing depth
optional field
number of results in SERP
default value for desktop: 20
max value for desktop: 100
default value for mobile: 10
max value for mobile: 100
Your account will be billed per each SERP containing up to 20 results for desktop or up to 10 results for a mobile device;
Setting depth above 20 for desktop or above 10 for mobile may result in additional charges if the search engine returns more than 20 or 10 results respectively;
If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically
The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** device type
optional field
return results for a specific device type
can take the values:desktop, mobile
default value: desktop */

    device?: string | undefined;
    
    /** full name of search engine location
required field if you don't specify location_code or location_coordinate
if you use this field, you don't need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** full name of search engine language
required field if you don't specify language_code
if you use this field, you don't need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English */

    language_name?: string | undefined;
    
    /** device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android */

    os?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** GPS coordinates of a location
required field if you don't specify location_name or location_code
if you use this field, you don't need to specify location_name or location_code
location_coordinate parameter should be specified in the 'latitude,longitude,zoom' format
if 'zoom' is not specified, 9z will be applied as a default value
the maximum number of decimal digits for 'latitude' and 'longitude': 7
the minimum value for 'zoom': 4z
the maximum value for 'zoom': 18z
example:
52.6178549,-155.352142,20z */

    location_coordinate?: string | undefined;
    
    /** filter results by minimum rating
optional field
possible values for desktop: 3.5, 4, 4.5;
possible values for mobile: 2, 2.5, 3, 3.5, 4, 4.5 */

    min_rating?: string | undefined;
    
    /** filter results by open hours
optional field
using this field, you can filter places in the results by the time a place is open for visitors
note that Google may also provide results that do not match this filter
possible values: 'open_now', '24_hours', '$day_value', '$day_value;$time_value';
instead of $day_value use one of these values: 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday';
instead of $time_value use one of these values: '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
example: 'tuesday;18' */

    time_filter?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleLocalFinderLiveHtmlRequestInfo) {

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
            this.depth = data["depth"];
            this.device = data["device"];
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
            this.location_coordinate = data["location_coordinate"];
            this.min_rating = data["min_rating"];
            this.time_filter = data["time_filter"];
        }
    }

    static fromJS(data: any): SerpGoogleLocalFinderLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocalFinderLiveHtmlRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["device"] = this.device;
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        data["location_coordinate"] = this.location_coordinate;
        data["min_rating"] = this.min_rating;
        data["time_filter"] = this.time_filter;
        return data;
    }
}