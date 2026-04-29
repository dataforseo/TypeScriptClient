export interface IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo   {
        
        /** business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories */
        categories?: string[] | undefined
        
        /** description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 characters */
        description?: string | undefined
        
        /** title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 characters */
        title?: string | undefined
        
        /** indicates whether the business is verified by its owner on Google Maps
optional field */
        is_claimed?: boolean | undefined
        
        /** GPS coordinates of a location
optional field
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 1
the maximum value for “radius”: 100000
example:
53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['rating.value','>',3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/business_data/business_listings/available_filters
the full list of possible filters is available here.
learn more about the initial dataset filters in this help center article. */
        initial_dataset_filters?: any[] | undefined
        
        /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the aggregated categories
default value: 10 */
        internal_list_limit?: number | undefined
        
        /** the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** the maximum number of returned businesses
optional field */
        offset?: number | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo  implements IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo {
    
    /** business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories */

    categories?: string[] | undefined;
    
    /** description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 characters */

    description?: string | undefined;
    
    /** title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 characters */

    title?: string | undefined;
    
    /** indicates whether the business is verified by its owner on Google Maps
optional field */

    is_claimed?: boolean | undefined;
    
    /** GPS coordinates of a location
optional field
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 1
the maximum value for “radius”: 100000
example:
53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['rating.value','>',3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/business_data/business_listings/available_filters
the full list of possible filters is available here.
learn more about the initial dataset filters in this help center article. */

    initial_dataset_filters?: any[] | undefined;
    
    /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the aggregated categories
default value: 10 */

    internal_list_limit?: number | undefined;
    
    /** the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;
    
    /** the maximum number of returned businesses
optional field */

    offset?: number | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo) {

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
            this.categories = data["categories"];
            this.description = data["description"];
            this.title = data["title"];
            this.is_claimed = data["is_claimed"];
            this.location_coordinate = data["location_coordinate"];
            this.initial_dataset_filters = data["initial_dataset_filters"];
            this.internal_list_limit = data["internal_list_limit"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["categories"] = this.categories;
        data["description"] = this.description;
        data["title"] = this.title;
        data["is_claimed"] = this.is_claimed;
        data["location_coordinate"] = this.location_coordinate;
        data["initial_dataset_filters"] = this.initial_dataset_filters;
        data["internal_list_limit"] = this.internal_list_limit;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["tag"] = this.tag;
        return data;
    }
}