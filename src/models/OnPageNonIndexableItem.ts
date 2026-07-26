export interface IOnPageNonIndexableItem   {
        
        /** the reason why the page is non-indexable can take the following values: robots_txt, meta_tag, http_header, attribute, too_many_redirects */
        reason?: string | undefined
        
        /** url of the non-indexable page */
        url?: string | undefined

    [key: string]: any;

    }

export class OnPageNonIndexableItem  implements IOnPageNonIndexableItem {

    
    /** the reason why the page is non-indexable can take the following values: robots_txt, meta_tag, http_header, attribute, too_many_redirects */

    reason?: string | undefined;

    
    /** url of the non-indexable page */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageNonIndexableItem) {

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
            this.reason = data["reason"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): OnPageNonIndexableItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageNonIndexableItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["reason"] = this.reason;
        data["url"] = this.url;
        return data;
    }
}