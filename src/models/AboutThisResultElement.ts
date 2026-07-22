/** @deprecated */

export interface IAboutThisResultElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** result’s URL */
        url?: string | undefined
        
        /** source of additional information about the result */
        source?: string | undefined
        
        /** additional information about the result
description of the website from Wikipedia or another additional context */
        source_info?: string | undefined
        
        /** URL to full information from the 'source' */
        source_url?: string | undefined
        
        /** the language of the result */
        language?: string | undefined
        
        /** location for which the result is relevant */
        location?: string | undefined
        
        /** matching search terms that appear in the result */
        search_terms?: string[] | undefined
        
        /** related search terms that appear in the result */
        related_terms?: string[] | undefined

    [key: string]: any;

    }

/** @deprecated */
export class AboutThisResultElement  implements IAboutThisResultElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** result’s URL */

    url?: string | undefined;

    
    /** source of additional information about the result */

    source?: string | undefined;

    
    /** additional information about the result
description of the website from Wikipedia or another additional context */

    source_info?: string | undefined;

    
    /** URL to full information from the 'source' */

    source_url?: string | undefined;

    
    /** the language of the result */

    language?: string | undefined;

    
    /** location for which the result is relevant */

    location?: string | undefined;

    
    /** matching search terms that appear in the result */

    search_terms?: string[] | undefined;

    
    /** related search terms that appear in the result */

    related_terms?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IAboutThisResultElement) {

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
            this.url = data["url"];
            this.source = data["source"];
            this.source_info = data["source_info"];
            this.source_url = data["source_url"];
            this.language = data["language"];
            this.location = data["location"];
            this.search_terms = data["search_terms"];
            this.related_terms = data["related_terms"];
        }
    }

    static fromJS(data: any): AboutThisResultElement {
        data = typeof data === 'object' ? data : {};


        let result = new AboutThisResultElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["url"] = this.url;
        data["source"] = this.source;
        data["source_info"] = this.source_info;
        data["source_url"] = this.source_url;
        data["language"] = this.language;
        data["location"] = this.location;
        data["search_terms"] = this.search_terms;
        data["related_terms"] = this.related_terms;
        return data;
    }
}