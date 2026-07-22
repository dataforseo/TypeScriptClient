import { AmazonInfo, IAmazonInfo } from "./AmazonInfo";


export interface IAmazonRankedSerpElement   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** contains data on the SERP element
the list of supported SERP elements can be found below */
        serp_item?: AmazonInfo | undefined
        
        /** direct URL to Amazon results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** direct URL to Amazon results
contains types of all search results (items) found in the returned SERP;
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches */
        serp_item_types?: string[] | undefined
        
        /** total number of results in Amazon SERP */
        se_results_count?: number | undefined
        
        /** date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        last_updated_time?: string | undefined
        
        /** previous to the most recent update of SERP data
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2020-09-12T00:07:43.0733218Z */
        previous_updated_time?: string | undefined

    [key: string]: any;

    }

export class AmazonRankedSerpElement  implements IAmazonRankedSerpElement {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** contains data on the SERP element
the list of supported SERP elements can be found below */

    serp_item?: AmazonInfo | undefined;

    
    /** direct URL to Amazon results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** direct URL to Amazon results
contains types of all search results (items) found in the returned SERP;
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches */

    serp_item_types?: string[] | undefined;

    
    /** total number of results in Amazon SERP */

    se_results_count?: number | undefined;

    
    /** date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    last_updated_time?: string | undefined;

    
    /** previous to the most recent update of SERP data
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2020-09-12T00:07:43.0733218Z */

    previous_updated_time?: string | undefined;

    [key: string]: any;


    constructor(data?: IAmazonRankedSerpElement) {

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
            this.se_type = data["se_type"];
            this.serp_item = data["serp_item"] ? AmazonInfo.fromJS(data["serp_item"]) : <any>undefined;
            this.check_url = data["check_url"];
            this.serp_item_types = data["serp_item_types"];
            this.se_results_count = data["se_results_count"];
            this.last_updated_time = data["last_updated_time"];
            this.previous_updated_time = data["previous_updated_time"];
        }
    }

    static fromJS(data: any): AmazonRankedSerpElement {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonRankedSerpElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["serp_item"] = this.serp_item ? AmazonInfo.fromJS(this.serp_item)?.toJSON() : <any>undefined;
        data["check_url"] = this.check_url;
        data["serp_item_types"] = this.serp_item_types;
        data["se_results_count"] = this.se_results_count;
        data["last_updated_time"] = this.last_updated_time;
        data["previous_updated_time"] = this.previous_updated_time;
        return data;
    }
}