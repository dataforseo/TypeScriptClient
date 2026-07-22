import { SpellInfo, ISpellInfo } from "./SpellInfo";
import { RefinementChipsInfo, IRefinementChipsInfo } from "./RefinementChipsInfo";
import { BaseSerpApiElementItem, IBaseSerpApiElementItem } from "./BaseSerpApiElementItem";


export interface ISerpGoogleOrganicTaskGetRegularResultInfo   {
        
        /** keyword received in a POST arraykeyword is returned with decoded %## (plus symbol '+' will be decoded to a space character) */
        keyword?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to search engine resultsyou can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was receivedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** autocorrection of the search engineif the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection;if there is none, the value is null */
        spell?: SpellInfo | undefined
        
        /** search refinement chipsif there are none, the value is null */
        refinement_chips?: RefinementChipsInfo | undefined
        
        /** types of search results found in SERPcontains types of all search results (items) found in the returned SERPpossible item types:answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, third_party_reviews,  images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, recipes, top_sights, scholarly_articles, popular_products, questions_and_answers, find_results_on, stocks_box, commercial_units, local_services, google_hotels, math_solver, currency_box, product_considerations, short_videos, refine_products, perspectives, discussions_and_forums, compare_sites, ai_overviewnote that this array contains all types of search results found in the returned SERP;however, this endpoint provides data for featured_snippet, organic and paid types only;to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint */
        item_types?: string[] | undefined
        
        /** total number of results in SERP */
        se_results_count?: number | undefined
        
        /** total search results pages retrievedtotal number of retrieved SERPs in the result */
        pages_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** items in SERP */
        items?: BaseSerpApiElementItem[] | undefined

    [key: string]: any;

    }

export class SerpGoogleOrganicTaskGetRegularResultInfo  implements ISerpGoogleOrganicTaskGetRegularResultInfo {

    
    /** keyword received in a POST arraykeyword is returned with decoded %## (plus symbol '+' will be decoded to a space character) */

    keyword?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to search engine resultsyou can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** date and time when the result was receivedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** autocorrection of the search engineif the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection;if there is none, the value is null */

    spell?: SpellInfo | undefined;

    
    /** search refinement chipsif there are none, the value is null */

    refinement_chips?: RefinementChipsInfo | undefined;

    
    /** types of search results found in SERPcontains types of all search results (items) found in the returned SERPpossible item types:answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, third_party_reviews,  images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, recipes, top_sights, scholarly_articles, popular_products, questions_and_answers, find_results_on, stocks_box, commercial_units, local_services, google_hotels, math_solver, currency_box, product_considerations, short_videos, refine_products, perspectives, discussions_and_forums, compare_sites, ai_overviewnote that this array contains all types of search results found in the returned SERP;however, this endpoint provides data for featured_snippet, organic and paid types only;to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint */

    item_types?: string[] | undefined;

    
    /** total number of results in SERP */

    se_results_count?: number | undefined;

    
    /** total search results pages retrievedtotal number of retrieved SERPs in the result */

    pages_count?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** items in SERP */

    items?: BaseSerpApiElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleOrganicTaskGetRegularResultInfo) {

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
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.spell = data["spell"] ? SpellInfo.fromJS(data["spell"]) : <any>undefined;
            this.refinement_chips = data["refinement_chips"] ? RefinementChipsInfo.fromJS(data["refinement_chips"]) : <any>undefined;
            this.item_types = data["item_types"];
            this.se_results_count = data["se_results_count"];
            this.pages_count = data["pages_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleOrganicTaskGetRegularResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleOrganicTaskGetRegularResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["spell"] = this.spell ? SpellInfo.fromJS(this.spell)?.toJSON() : <any>undefined;
        data["refinement_chips"] = this.refinement_chips ? RefinementChipsInfo.fromJS(this.refinement_chips)?.toJSON() : <any>undefined;
        data["item_types"] = this.item_types;
        data["se_results_count"] = this.se_results_count;
        data["pages_count"] = this.pages_count;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}