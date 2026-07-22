import { SpellInfo, ISpellInfo } from "./SpellInfo";
import { RefinementChipsInfo, IRefinementChipsInfo } from "./RefinementChipsInfo";
import { BaseSerpApiGoogleImagesElementItem, IBaseSerpApiGoogleImagesElementItem } from "./BaseSerpApiGoogleImagesElementItem";


export interface ISerpGoogleImagesLiveAdvancedResultInfo   {
        
        keyword?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        se_domain?: string | undefined
        
        location_code?: number | undefined
        
        language_code?: string | undefined
        
        check_url?: string | undefined
        
        datetime?: string | undefined
        
        spell?: SpellInfo | undefined
        
        refinement_chips?: RefinementChipsInfo | undefined
        
        item_types?: string[] | undefined
        
        se_results_count?: number | undefined
        
        items_count?: number | undefined
        
        items?: BaseSerpApiGoogleImagesElementItem[] | undefined

    [key: string]: any;

    }

export class SerpGoogleImagesLiveAdvancedResultInfo  implements ISerpGoogleImagesLiveAdvancedResultInfo {

    keyword?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    se_domain?: string | undefined;

    location_code?: number | undefined;

    language_code?: string | undefined;

    check_url?: string | undefined;

    datetime?: string | undefined;

    spell?: SpellInfo | undefined;

    refinement_chips?: RefinementChipsInfo | undefined;

    item_types?: string[] | undefined;

    se_results_count?: number | undefined;

    items_count?: number | undefined;

    items?: BaseSerpApiGoogleImagesElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleImagesLiveAdvancedResultInfo) {

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
                    this.items.push(BaseSerpApiGoogleImagesElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleImagesLiveAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleImagesLiveAdvancedResultInfo();
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