export interface IBacklinksAvailableFiltersResultInfo   {
        
        content_duplicates?: { [key: string]: string; } | undefined
        
        /** filters available for the backlinks endpoint: */
        backlinks?: { [key: string]: string; } | undefined
        
        domain_pages?: { [key: string]: string; } | undefined
        
        anchors?: { [key: string]: string; } | undefined
        
        referring_domains?: { [key: string]: string; } | undefined
        
        domain_intersection?: { [key: string]: string; } | undefined
        
        /** filters available for the page intersection endpoint: */
        page_intersection?: { [key: string]: string; } | undefined
        
        referring_networks?: { [key: string]: string; } | undefined
        
        domain_pages_summary?: { [key: string]: string; } | undefined
        
        competitors?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class BacklinksAvailableFiltersResultInfo  implements IBacklinksAvailableFiltersResultInfo {

    content_duplicates?: { [key: string]: string; } | undefined;

    
    /** filters available for the backlinks endpoint: */

    backlinks?: { [key: string]: string; } | undefined;

    domain_pages?: { [key: string]: string; } | undefined;

    anchors?: { [key: string]: string; } | undefined;

    referring_domains?: { [key: string]: string; } | undefined;

    domain_intersection?: { [key: string]: string; } | undefined;

    
    /** filters available for the page intersection endpoint: */

    page_intersection?: { [key: string]: string; } | undefined;

    referring_networks?: { [key: string]: string; } | undefined;

    domain_pages_summary?: { [key: string]: string; } | undefined;

    competitors?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksAvailableFiltersResultInfo) {

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
            this.content_duplicates = data["content_duplicates"];
            this.backlinks = data["backlinks"];
            this.domain_pages = data["domain_pages"];
            this.anchors = data["anchors"];
            this.referring_domains = data["referring_domains"];
            this.domain_intersection = data["domain_intersection"];
            this.page_intersection = data["page_intersection"];
            this.referring_networks = data["referring_networks"];
            this.domain_pages_summary = data["domain_pages_summary"];
            this.competitors = data["competitors"];
        }
    }

    static fromJS(data: any): BacklinksAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["content_duplicates"] = this.content_duplicates;
        data["backlinks"] = this.backlinks;
        data["domain_pages"] = this.domain_pages;
        data["anchors"] = this.anchors;
        data["referring_domains"] = this.referring_domains;
        data["domain_intersection"] = this.domain_intersection;
        data["page_intersection"] = this.page_intersection;
        data["referring_networks"] = this.referring_networks;
        data["domain_pages_summary"] = this.domain_pages_summary;
        data["competitors"] = this.competitors;
        return data;
    }
}