export interface ILastModified   {
        
        /** date and time when the header was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null */
        header?: string | undefined
        
        /** date and time when the sitemap was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null */
        sitemap?: string | undefined
        
        /** date and time when the meta tag was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null */
        meta_tag?: string | undefined

    [key: string]: any;

    }

export class LastModified  implements ILastModified {

    
    /** date and time when the header was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null */

    header?: string | undefined;

    
    /** date and time when the sitemap was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null */

    sitemap?: string | undefined;

    
    /** date and time when the meta tag was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null */

    meta_tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ILastModified) {

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
            this.header = data["header"];
            this.sitemap = data["sitemap"];
            this.meta_tag = data["meta_tag"];
        }
    }

    static fromJS(data: any): LastModified {
        data = typeof data === 'object' ? data : {};


        let result = new LastModified();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["header"] = this.header;
        data["sitemap"] = this.sitemap;
        data["meta_tag"] = this.meta_tag;
        return data;
    }
}