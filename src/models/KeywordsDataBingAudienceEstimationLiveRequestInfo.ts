export interface IKeywordsDataBingAudienceEstimationLiveRequestInfo   {
        
        /** full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840 */
        location_code?: number | undefined
        
        /** GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius (in km)” format
the data will be provided for the country the specified coordinates belong to
example:
29.6821525,-82.4098881,100 */
        location_coordinate?: string | undefined
        
        /** selection of age ranges for targeting
possible values: eighteen_to_twenty_four, fifty_to_sixty_four, sixty_five_and_above, thirteen_to_seventeen, thirty_five_to_forty_nine, twenty_five_to_thirty_four, unknown, zero_to_twelve */
        age?: string[] | undefined
        
        /** desired bid setting value in USD
maximum value: 1000 */
        bid?: number | undefined
        
        /** daily campaign budget value in USD
maximum value: 10000 */
        daily_budget?: number | undefined
        
        /** gender to target
possible values: male, female, unknown */
        gender?: string[] | undefined
        
        /** industry of LinkedIn profile targeting
if you use this field, you can receive the list of available industry names  with industry_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/industries
example: 806301758 */
        industry?: string[] | undefined
        
        /** job function of LinkedIn profile targeting
if you use this field, you can receive the list of available job function names  with job_function_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/job_functions
example: 806300451 */
        job_function?: string[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingAudienceEstimationLiveRequestInfo  implements IKeywordsDataBingAudienceEstimationLiveRequestInfo {

    
    /** full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom */

    location_name?: string | undefined;

    
    /** search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840 */

    location_code?: number | undefined;

    
    /** GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius (in km)” format
the data will be provided for the country the specified coordinates belong to
example:
29.6821525,-82.4098881,100 */

    location_coordinate?: string | undefined;

    
    /** selection of age ranges for targeting
possible values: eighteen_to_twenty_four, fifty_to_sixty_four, sixty_five_and_above, thirteen_to_seventeen, thirty_five_to_forty_nine, twenty_five_to_thirty_four, unknown, zero_to_twelve */

    age?: string[] | undefined;

    
    /** desired bid setting value in USD
maximum value: 1000 */

    bid?: number | undefined;

    
    /** daily campaign budget value in USD
maximum value: 10000 */

    daily_budget?: number | undefined;

    
    /** gender to target
possible values: male, female, unknown */

    gender?: string[] | undefined;

    
    /** industry of LinkedIn profile targeting
if you use this field, you can receive the list of available industry names  with industry_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/industries
example: 806301758 */

    industry?: string[] | undefined;

    
    /** job function of LinkedIn profile targeting
if you use this field, you can receive the list of available job function names  with job_function_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/job_functions
example: 806300451 */

    job_function?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingAudienceEstimationLiveRequestInfo) {

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
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.age = data["age"];
            this.bid = data["bid"];
            this.daily_budget = data["daily_budget"];
            this.gender = data["gender"];
            this.industry = data["industry"];
            this.job_function = data["job_function"];
        }
    }

    static fromJS(data: any): KeywordsDataBingAudienceEstimationLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingAudienceEstimationLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["age"] = this.age;
        data["bid"] = this.bid;
        data["daily_budget"] = this.daily_budget;
        data["gender"] = this.gender;
        data["industry"] = this.industry;
        data["job_function"] = this.job_function;
        return data;
    }
}