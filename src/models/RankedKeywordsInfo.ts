export interface IRankedKeywordsInfo   {
        
        /** number of keywords for which the page is ranked in top 3 search results */
        page_from_keywords_count_top_3?: number | undefined
        
        /** number of keywords for which the page is ranked in top 10 search results */
        page_from_keywords_count_top_10?: number | undefined
        
        /** number of keywords for which the page is ranked in top 100 search results */
        page_from_keywords_count_top_100?: number | undefined

    [key: string]: any;

    }

export class RankedKeywordsInfo  implements IRankedKeywordsInfo {
    
    /** number of keywords for which the page is ranked in top 3 search results */

    page_from_keywords_count_top_3?: number | undefined;
    
    /** number of keywords for which the page is ranked in top 10 search results */

    page_from_keywords_count_top_10?: number | undefined;
    
    /** number of keywords for which the page is ranked in top 100 search results */

    page_from_keywords_count_top_100?: number | undefined;

    [key: string]: any;


    constructor(data?: IRankedKeywordsInfo) {

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
            this.page_from_keywords_count_top_3 = data["page_from_keywords_count_top_3"];
            this.page_from_keywords_count_top_10 = data["page_from_keywords_count_top_10"];
            this.page_from_keywords_count_top_100 = data["page_from_keywords_count_top_100"];
        }
    }

    static fromJS(data: any): RankedKeywordsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new RankedKeywordsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["page_from_keywords_count_top_3"] = this.page_from_keywords_count_top_3;
        data["page_from_keywords_count_top_10"] = this.page_from_keywords_count_top_10;
        data["page_from_keywords_count_top_100"] = this.page_from_keywords_count_top_100;
        return data;
    }
}