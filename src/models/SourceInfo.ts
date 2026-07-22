export interface ISourceInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** source title */
        title?: string | undefined
        
        /** source description */
        snippet?: string | undefined
        
        /** source domain in SERP */
        domain?: string | undefined
        
        /** source URL */
        url?: string | undefined
        
        /** source thumbnail */
        thumbnail?: string | undefined
        
        /** source name */
        source_name?: string | undefined
        
        /** date and time when the result was publishedin the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”example:2019-11-15 12:57:46 +00:00 */
        publication_date?: string | undefined
        
        /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */
        markdown?: string | undefined

    [key: string]: any;

    }

export class SourceInfo  implements ISourceInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** source title */

    title?: string | undefined;

    
    /** source description */

    snippet?: string | undefined;

    
    /** source domain in SERP */

    domain?: string | undefined;

    
    /** source URL */

    url?: string | undefined;

    
    /** source thumbnail */

    thumbnail?: string | undefined;

    
    /** source name */

    source_name?: string | undefined;

    
    /** date and time when the result was publishedin the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”example:2019-11-15 12:57:46 +00:00 */

    publication_date?: string | undefined;

    
    /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */

    markdown?: string | undefined;

    [key: string]: any;


    constructor(data?: ISourceInfo) {

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
            this.title = data["title"];
            this.snippet = data["snippet"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.thumbnail = data["thumbnail"];
            this.source_name = data["source_name"];
            this.publication_date = data["publication_date"];
            this.markdown = data["markdown"];
        }
    }

    static fromJS(data: any): SourceInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SourceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["snippet"] = this.snippet;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["thumbnail"] = this.thumbnail;
        data["source_name"] = this.source_name;
        data["publication_date"] = this.publication_date;
        data["markdown"] = this.markdown;
        return data;
    }
}