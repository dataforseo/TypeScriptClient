export interface ISerpInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** direct URL to search engine resultsyou can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** types of search results in SERPcontains types of search results (items) found in SERPpossible item types:answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, third_party_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box, product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums, compare_sites, courses, ai_overview;note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements */
        serp_item_types?: string[] | undefined
        
        /** number of search results for the returned keyword */
        se_results_count?: number | undefined
        
        /** date and time when keyword data was updatedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2019-11-15 12:57:46 +00:00 */
        last_updated_time?: string | undefined
        
        /** previous to the most recent date and time when SERP data was updatedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2019-10-15 12:57:46 +00:00 */
        previous_updated_time?: string | undefined

    [key: string]: any;

    }

export class SerpInfo  implements ISerpInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** direct URL to search engine resultsyou can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** types of search results in SERPcontains types of search results (items) found in SERPpossible item types:answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, third_party_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box, product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums, compare_sites, courses, ai_overview;note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements */

    serp_item_types?: string[] | undefined;

    
    /** number of search results for the returned keyword */

    se_results_count?: number | undefined;

    
    /** date and time when keyword data was updatedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2019-11-15 12:57:46 +00:00 */

    last_updated_time?: string | undefined;

    
    /** previous to the most recent date and time when SERP data was updatedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2019-10-15 12:57:46 +00:00 */

    previous_updated_time?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpInfo) {

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
            this.check_url = data["check_url"];
            this.serp_item_types = data["serp_item_types"];
            this.se_results_count = data["se_results_count"];
            this.last_updated_time = data["last_updated_time"];
            this.previous_updated_time = data["previous_updated_time"];
        }
    }

    static fromJS(data: any): SerpInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["check_url"] = this.check_url;
        data["serp_item_types"] = this.serp_item_types;
        data["se_results_count"] = this.se_results_count;
        data["last_updated_time"] = this.last_updated_time;
        data["previous_updated_time"] = this.previous_updated_time;
        return data;
    }
}