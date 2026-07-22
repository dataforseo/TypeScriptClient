export interface ISearchResults   {
        
        /** result description */
        description?: string | undefined
        
        /** breadcrumb */
        breadcrumb?: string | undefined
        
        /** rank in the results */
        rank?: number | undefined
        
        /** source title */
        title?: string | undefined
        
        /** source domain */
        domain?: string | undefined
        
        /** source URL */
        url?: string | undefined
        
        /** date and time when the result was published
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00 */
        publication_date?: string | undefined

    [key: string]: any;

    }

export class SearchResults  implements ISearchResults {

    
    /** result description */

    description?: string | undefined;

    
    /** breadcrumb */

    breadcrumb?: string | undefined;

    
    /** rank in the results */

    rank?: number | undefined;

    
    /** source title */

    title?: string | undefined;

    
    /** source domain */

    domain?: string | undefined;

    
    /** source URL */

    url?: string | undefined;

    
    /** date and time when the result was published
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00 */

    publication_date?: string | undefined;

    [key: string]: any;


    constructor(data?: ISearchResults) {

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
            this.description = data["description"];
            this.breadcrumb = data["breadcrumb"];
            this.rank = data["rank"];
            this.title = data["title"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.publication_date = data["publication_date"];
        }
    }

    static fromJS(data: any): SearchResults {
        data = typeof data === 'object' ? data : {};


        let result = new SearchResults();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["description"] = this.description;
        data["breadcrumb"] = this.breadcrumb;
        data["rank"] = this.rank;
        data["title"] = this.title;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["publication_date"] = this.publication_date;
        return data;
    }
}