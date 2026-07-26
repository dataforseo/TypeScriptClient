export interface ISources   {
        
        /** *source description* */
        snippet?: string | undefined
        
        /** *source name* */
        source_name?: string | undefined
        
        /** *source thumbnail* */
        thumbnail?: string | undefined
        
        /** *content of the element in markdown format* content of the result formatted in the [markdown markup language](https://en.wikipedia.org/wiki/Markdown) */
        markdown?: string | undefined
        
        /** *rank in the results* */
        rank?: number | undefined
        
        /** *source title* */
        title?: string | undefined
        
        /** *source domain* */
        domain?: string | undefined
        
        /** *source URL* */
        url?: string | undefined
        
        /** *date and time when the result was published* in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes” example: `2019-11-15 12:57:46 +00:00` */
        publication_date?: string | undefined

    [key: string]: any;

    }

export class Sources  implements ISources {

    
    /** *source description* */

    snippet?: string | undefined;

    
    /** *source name* */

    source_name?: string | undefined;

    
    /** *source thumbnail* */

    thumbnail?: string | undefined;

    
    /** *content of the element in markdown format* content of the result formatted in the [markdown markup language](https://en.wikipedia.org/wiki/Markdown) */

    markdown?: string | undefined;

    
    /** *rank in the results* */

    rank?: number | undefined;

    
    /** *source title* */

    title?: string | undefined;

    
    /** *source domain* */

    domain?: string | undefined;

    
    /** *source URL* */

    url?: string | undefined;

    
    /** *date and time when the result was published* in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes” example: `2019-11-15 12:57:46 +00:00` */

    publication_date?: string | undefined;

    [key: string]: any;


    constructor(data?: ISources) {

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
            this.snippet = data["snippet"];
            this.source_name = data["source_name"];
            this.thumbnail = data["thumbnail"];
            this.markdown = data["markdown"];
            this.rank = data["rank"];
            this.title = data["title"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.publication_date = data["publication_date"];
        }
    }

    static fromJS(data: any): Sources {
        data = typeof data === 'object' ? data : {};


        let result = new Sources();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["snippet"] = this.snippet;
        data["source_name"] = this.source_name;
        data["thumbnail"] = this.thumbnail;
        data["markdown"] = this.markdown;
        data["rank"] = this.rank;
        data["title"] = this.title;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["publication_date"] = this.publication_date;
        return data;
    }
}