import { SpellInfo, ISpellInfo } from "./SpellInfo";
import { RefinementChipsInfo, IRefinementChipsInfo } from "./RefinementChipsInfo";
import { BaseSerpApiGoogleFinanceElementItem, IBaseSerpApiGoogleFinanceElementItem } from "./BaseSerpApiGoogleFinanceElementItem";


export interface ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo   {
        
        /** keyword received in a POST array the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */
        keyword?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to search engine results you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** autocorrection of the search engine if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection */
        spell?: SpellInfo | undefined
        
        /** search refinement chips in this case, the value will be null */
        refinement_chips?: RefinementChipsInfo | undefined
        
        /** types of search results in SERP contains types of search results (items) found in SERP; possible item types: google_finance_hero_groups, google_finance_interested, google_finance_news, google_finance_earnings_calendar, google_finance_most_followed, google_finance_market_trends, google_finance_people_also_search */
        item_types?: string[] | undefined
        
        /** total number of results in SERP */
        se_results_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** market indexes related to the market trends element possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: BaseSerpApiGoogleFinanceElementItem[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceExploreTaskGetAdvancedResultInfo  implements ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo {

    
    /** keyword received in a POST array the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */

    keyword?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to search engine results you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** date and time when the result was received in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** autocorrection of the search engine if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection */

    spell?: SpellInfo | undefined;

    
    /** search refinement chips in this case, the value will be null */

    refinement_chips?: RefinementChipsInfo | undefined;

    
    /** types of search results in SERP contains types of search results (items) found in SERP; possible item types: google_finance_hero_groups, google_finance_interested, google_finance_news, google_finance_earnings_calendar, google_finance_most_followed, google_finance_market_trends, google_finance_people_also_search */

    item_types?: string[] | undefined;

    
    /** total number of results in SERP */

    se_results_count?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** market indexes related to the market trends element possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: BaseSerpApiGoogleFinanceElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo) {

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
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiGoogleFinanceElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceExploreTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceExploreTaskGetAdvancedResultInfo();
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