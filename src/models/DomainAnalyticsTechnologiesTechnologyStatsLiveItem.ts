export interface IDomainAnalyticsTechnologiesTechnologyStatsLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** date for which the data is provided */
        date?: string | undefined
        
        /** number of domains that use the specified technology */
        domains_count?: number | undefined
        
        /** distribution of websites by country
contains country codes and number of websites per country */
        countries?: { [key: string]: number; } | undefined
        
        /** distribution of websites by language
contains language codes and number of websites per language */
        languages?: { [key: string]: number; } | undefined
        
        /** distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article */
        domains_rank?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesTechnologyStatsLiveItem  implements IDomainAnalyticsTechnologiesTechnologyStatsLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** date for which the data is provided */

    date?: string | undefined;

    
    /** number of domains that use the specified technology */

    domains_count?: number | undefined;

    
    /** distribution of websites by country
contains country codes and number of websites per country */

    countries?: { [key: string]: number; } | undefined;

    
    /** distribution of websites by language
contains language codes and number of websites per language */

    languages?: { [key: string]: number; } | undefined;

    
    /** distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article */

    domains_rank?: { [key: string]: number; } | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesTechnologyStatsLiveItem) {

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
            this.type = data["type"];
            this.date = data["date"];
            this.domains_count = data["domains_count"];
            this.countries = data["countries"];
            this.languages = data["languages"];
            this.domains_rank = data["domains_rank"];
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesTechnologyStatsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesTechnologyStatsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["date"] = this.date;
        data["domains_count"] = this.domains_count;
        data["countries"] = this.countries;
        data["languages"] = this.languages;
        data["domains_rank"] = this.domains_rank;
        return data;
    }
}