export interface IDataforseoLabsGoogleSerpCompetitorsLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** domain name of the detected SERP competitor */
        domain?: string | undefined
        
        /** the average position of the domain for the specified keywords
the arithmetic mean of values in the keywords_positions array */
        avg_position?: number | undefined
        
        /** the median position of the domain for the specified keywords
the median of the values in the keywords_positions array */
        median_position?: number | undefined
        
        /** the margin between the greatest possible and actual keyword positions
represents the relative visibility rate of the domain in SERP for the specified keywords
calculated as sum(100-keywords_positions) */
        rating?: number | undefined
        
        /** estimated traffic volume
represents the estimated monthly traffic that specified keywords are driving to the website
calculated as the sum of the products of the specified keywords’ search volume values and CTR (click-through-rate) rates at certain positions in SERP
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** the number of specified keywords the domain has positions for in SERPs */
        keywords_count?: number | undefined
        
        /** SERP visibility rate
represents the website visibility rate based on the SERP positions of the specified keywords
Keywords with positions in the range from 1 to 10 are assigned the visibility index from 1 to 0.1, respectively
Keywords with positions in the range from 11 to 20 have the fixed visibility index of 0.05
keywords with positions from 20 to 100 have the visibility index equal to 0 */
        visibility?: number | undefined
        
        /** the number of SERP elements relevant to the domain
represents the number of search results in SERP relevant to the domain for the specified keywords */
        relevant_serp_items?: number | undefined
        
        /** keyword positions
SERP positions the related domain holds in SERP for the specified keywords */
        keywords_positions?: { [key: string]: number[]; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleSerpCompetitorsLiveItem  implements IDataforseoLabsGoogleSerpCompetitorsLiveItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** domain name of the detected SERP competitor */

    domain?: string | undefined;
    
    /** the average position of the domain for the specified keywords
the arithmetic mean of values in the keywords_positions array */

    avg_position?: number | undefined;
    
    /** the median position of the domain for the specified keywords
the median of the values in the keywords_positions array */

    median_position?: number | undefined;
    
    /** the margin between the greatest possible and actual keyword positions
represents the relative visibility rate of the domain in SERP for the specified keywords
calculated as sum(100-keywords_positions) */

    rating?: number | undefined;
    
    /** estimated traffic volume
represents the estimated monthly traffic that specified keywords are driving to the website
calculated as the sum of the products of the specified keywords’ search volume values and CTR (click-through-rate) rates at certain positions in SERP
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** the number of specified keywords the domain has positions for in SERPs */

    keywords_count?: number | undefined;
    
    /** SERP visibility rate
represents the website visibility rate based on the SERP positions of the specified keywords
Keywords with positions in the range from 1 to 10 are assigned the visibility index from 1 to 0.1, respectively
Keywords with positions in the range from 11 to 20 have the fixed visibility index of 0.05
keywords with positions from 20 to 100 have the visibility index equal to 0 */

    visibility?: number | undefined;
    
    /** the number of SERP elements relevant to the domain
represents the number of search results in SERP relevant to the domain for the specified keywords */

    relevant_serp_items?: number | undefined;
    
    /** keyword positions
SERP positions the related domain holds in SERP for the specified keywords */

    keywords_positions?: { [key: string]: number[]; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleSerpCompetitorsLiveItem) {

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
            this.domain = data["domain"];
            this.avg_position = data["avg_position"];
            this.median_position = data["median_position"];
            this.rating = data["rating"];
            this.etv = data["etv"];
            this.keywords_count = data["keywords_count"];
            this.visibility = data["visibility"];
            this.relevant_serp_items = data["relevant_serp_items"];
            this.keywords_positions = data["keywords_positions"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleSerpCompetitorsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleSerpCompetitorsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["domain"] = this.domain;
        data["avg_position"] = this.avg_position;
        data["median_position"] = this.median_position;
        data["rating"] = this.rating;
        data["etv"] = this.etv;
        data["keywords_count"] = this.keywords_count;
        data["visibility"] = this.visibility;
        data["relevant_serp_items"] = this.relevant_serp_items;
        data["keywords_positions"] = this.keywords_positions;
        return data;
    }
}