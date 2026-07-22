import { SpellInfo, ISpellInfo } from "./SpellInfo";
import { Dataset, IDataset } from "./Dataset";


export interface ISerpGoogleDatasetSearchLiveAdvancedResultInfo   {
        
        keyword?: string | undefined
        
        se_domain?: string | undefined
        
        language_code?: string | undefined
        
        check_url?: string | undefined
        
        datetime?: string | undefined
        
        spell?: SpellInfo | undefined
        
        item_types?: string[] | undefined
        
        se_results_count?: number | undefined
        
        items_count?: number | undefined
        
        items?: Dataset[] | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetSearchLiveAdvancedResultInfo  implements ISerpGoogleDatasetSearchLiveAdvancedResultInfo {

    keyword?: string | undefined;

    se_domain?: string | undefined;

    language_code?: string | undefined;

    check_url?: string | undefined;

    datetime?: string | undefined;

    spell?: SpellInfo | undefined;

    item_types?: string[] | undefined;

    se_results_count?: number | undefined;

    items_count?: number | undefined;

    items?: Dataset[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleDatasetSearchLiveAdvancedResultInfo) {

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
            this.se_domain = data["se_domain"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.spell = data["spell"] ? SpellInfo.fromJS(data["spell"]) : <any>undefined;
            this.item_types = data["item_types"];
            this.se_results_count = data["se_results_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(Dataset.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleDatasetSearchLiveAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleDatasetSearchLiveAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["se_domain"] = this.se_domain;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["spell"] = this.spell ? SpellInfo.fromJS(this.spell)?.toJSON() : <any>undefined;
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