import { BaseDataforseoLabsApiElementItem, IBaseDataforseoLabsApiElementItem } from "./BaseDataforseoLabsApiElementItem";


export interface IRankedSerpElement   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *contains data on the SERP element*             the list of supported SERP elements can be found below */
        serp_item?: BaseDataforseoLabsApiElementItem | undefined
        
        /** *direct URL to search engine results*             you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** *types of search results in SERP*             contains types of search results (items) found in SERP             possible item types:             `answer_box`, `app`, `carousel`, `multi_carousel`, `featured_snippet`, `google_flights`, `google_reviews`, `third_party_reviews`, `google_posts`, `images`, `jobs`, `knowledge_graph`, `local_pack`, `hotels_pack`, `map`, `organic`, `paid`, `people_also_ask`, `related_searches`, `people_also_search`, `shopping`, `top_stories`, `twitter`, `video`, `events`, `mention_carousel`, `recipes`, `top_sights`, `scholarly_articles`, `popular_products`, `podcasts`, `questions_and_answers`, `find_results_on`, `stocks_box`, `visual_stories`, `commercial_units`, `local_services`, `google_hotels`, `math_solver`, `currency_box`, `product_considerations`, `found_on_web`, `short_videos`, `refine_products`, `explore_brands`, `perspectives`, `discussions_and_forums`, `compare_sites`, `courses`, `ai_overview`;             **note** that the actual results will be returned only for `organic`, `paid`, `featured_snippet`, and `local_pack` elements */
        serp_item_types?: string[] | undefined
        
        /** *number of search results for the returned keyword* */
        se_results_count?: number | undefined
        
        /** *difficulty of ranking in the first top-10 organic results for a keyword*             indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;             calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;             learn more about the metric in [this help center guide](https://dataforseo.com/help-center/what-is-keyword-difficulty-and-how-is-it-calculated) */
        keyword_difficulty?: number | undefined
        
        /** *lost ranked elements*             indicates how many ranked elements of this target were previously presented in SERPs, but weren't found during the last check */
        is_lost?: boolean | undefined
        
        /** *date and time when keyword data was updated*             in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”             example:             `2019-11-15 12:57:46 +00:00` */
        last_updated_time?: string | undefined
        
        /** *previous to the most recent date and time when SERP data was updated*             in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”             example:             `2019-10-15 12:57:46 +00:00` */
        previous_updated_time?: string | undefined

    [key: string]: any;

    }

export class RankedSerpElement  implements IRankedSerpElement {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *contains data on the SERP element*             the list of supported SERP elements can be found below */

    serp_item?: BaseDataforseoLabsApiElementItem | undefined;

    
    /** *direct URL to search engine results*             you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** *types of search results in SERP*             contains types of search results (items) found in SERP             possible item types:             `answer_box`, `app`, `carousel`, `multi_carousel`, `featured_snippet`, `google_flights`, `google_reviews`, `third_party_reviews`, `google_posts`, `images`, `jobs`, `knowledge_graph`, `local_pack`, `hotels_pack`, `map`, `organic`, `paid`, `people_also_ask`, `related_searches`, `people_also_search`, `shopping`, `top_stories`, `twitter`, `video`, `events`, `mention_carousel`, `recipes`, `top_sights`, `scholarly_articles`, `popular_products`, `podcasts`, `questions_and_answers`, `find_results_on`, `stocks_box`, `visual_stories`, `commercial_units`, `local_services`, `google_hotels`, `math_solver`, `currency_box`, `product_considerations`, `found_on_web`, `short_videos`, `refine_products`, `explore_brands`, `perspectives`, `discussions_and_forums`, `compare_sites`, `courses`, `ai_overview`;             **note** that the actual results will be returned only for `organic`, `paid`, `featured_snippet`, and `local_pack` elements */

    serp_item_types?: string[] | undefined;

    
    /** *number of search results for the returned keyword* */

    se_results_count?: number | undefined;

    
    /** *difficulty of ranking in the first top-10 organic results for a keyword*             indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;             calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;             learn more about the metric in [this help center guide](https://dataforseo.com/help-center/what-is-keyword-difficulty-and-how-is-it-calculated) */

    keyword_difficulty?: number | undefined;

    
    /** *lost ranked elements*             indicates how many ranked elements of this target were previously presented in SERPs, but weren't found during the last check */

    is_lost?: boolean | undefined;

    
    /** *date and time when keyword data was updated*             in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”             example:             `2019-11-15 12:57:46 +00:00` */

    last_updated_time?: string | undefined;

    
    /** *previous to the most recent date and time when SERP data was updated*             in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”             example:             `2019-10-15 12:57:46 +00:00` */

    previous_updated_time?: string | undefined;

    [key: string]: any;


    constructor(data?: IRankedSerpElement) {

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
            this.serp_item = data["serp_item"] ? BaseDataforseoLabsApiElementItem.fromJS(data["serp_item"]) : <any>undefined;
            this.check_url = data["check_url"];
            this.serp_item_types = data["serp_item_types"];
            this.se_results_count = data["se_results_count"];
            this.keyword_difficulty = data["keyword_difficulty"];
            this.is_lost = data["is_lost"];
            this.last_updated_time = data["last_updated_time"];
            this.previous_updated_time = data["previous_updated_time"];
        }
    }

    static fromJS(data: any): RankedSerpElement {
        data = typeof data === 'object' ? data : {};


        let result = new RankedSerpElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["serp_item"] = this.serp_item ? BaseDataforseoLabsApiElementItem.fromJS(this.serp_item)?.toJSON() : <any>undefined;
        data["check_url"] = this.check_url;
        data["serp_item_types"] = this.serp_item_types;
        data["se_results_count"] = this.se_results_count;
        data["keyword_difficulty"] = this.keyword_difficulty;
        data["is_lost"] = this.is_lost;
        data["last_updated_time"] = this.last_updated_time;
        data["previous_updated_time"] = this.previous_updated_time;
        return data;
    }
}