export interface IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo   {
        
        /** distribution of websites by country
contains country codes and number of websites per country */
        countries?: { [key: string]: number; } | undefined
        
        /** distribution of websites by language
contains language codes and number of websites per language */
        languages?: { [key: string]: number; } | undefined
        
        /** distribution of websites by content language
contains content language codes and number of websites per language */
        content_languages?: { [key: string]: number; } | undefined
        
        /** distribution of websites by keywords
contains keywords found in the websites’ titles, descriptions or meta keywords, and number of websites using each keyword */
        keywords?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo  implements IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo {

    
    /** distribution of websites by country
contains country codes and number of websites per country */

    countries?: { [key: string]: number; } | undefined;

    
    /** distribution of websites by language
contains language codes and number of websites per language */

    languages?: { [key: string]: number; } | undefined;

    
    /** distribution of websites by content language
contains content language codes and number of websites per language */

    content_languages?: { [key: string]: number; } | undefined;

    
    /** distribution of websites by keywords
contains keywords found in the websites’ titles, descriptions or meta keywords, and number of websites using each keyword */

    keywords?: { [key: string]: number; } | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo) {

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
            this.countries = data["countries"];
            this.languages = data["languages"];
            this.content_languages = data["content_languages"];
            this.keywords = data["keywords"];
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["countries"] = this.countries;
        data["languages"] = this.languages;
        data["content_languages"] = this.content_languages;
        data["keywords"] = this.keywords;
        return data;
    }
}