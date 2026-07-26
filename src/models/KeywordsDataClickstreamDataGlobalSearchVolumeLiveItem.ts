import { CountryDistribution, ICountryDistribution } from "./CountryDistribution";


export interface IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem   {
        
        /** keyword keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character) */
        keyword?: string | undefined
        
        /** clickstream-based average monthly search volume rate represents the (approximate) number of searches for the given keyword idea based on clickstream you can learn more about clickstream search volume in this Help Center article */
        search_volume?: number | undefined
        
        /** distribution of clickstream by countries represents clickstream-based search volume in available countries, as well as its respective percentage of global search volume */
        country_distribution?: CountryDistribution[] | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem  implements IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem {

    
    /** keyword keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character) */

    keyword?: string | undefined;

    
    /** clickstream-based average monthly search volume rate represents the (approximate) number of searches for the given keyword idea based on clickstream you can learn more about clickstream search volume in this Help Center article */

    search_volume?: number | undefined;

    
    /** distribution of clickstream by countries represents clickstream-based search volume in available countries, as well as its respective percentage of global search volume */

    country_distribution?: CountryDistribution[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem) {

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
            this.search_volume = data["search_volume"];
            if (Array.isArray(data["country_distribution"])) {
                this.country_distribution = [];
                for (let item of data["country_distribution"]) {
                    this.country_distribution.push(CountryDistribution.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["search_volume"] = this.search_volume;
        data["country_distribution"] = null;
        if (Array.isArray(this.country_distribution)) {
            data["country_distribution"] = [];
            for (let item of this.country_distribution) {
                if (item && typeof item.toJSON === "function") {
                    data["country_distribution"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}