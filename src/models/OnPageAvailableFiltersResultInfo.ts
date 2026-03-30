export interface IOnPageAvailableFiltersResultInfo   {
        
        resources?: { [key: string]: string; } | undefined
        
        pages?: { [key: string]: string; } | undefined
        
        non_indexable?: { [key: string]: string; } | undefined
        
        links?: { [key: string]: string; } | undefined
        
        pages_by_resource?: { [key: string]: string; } | undefined
        
        redirect_chains?: { [key: string]: string; } | undefined
        
        keyword_density?: { [key: string]: string; } | undefined
        
        invalid_resources?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class OnPageAvailableFiltersResultInfo  implements IOnPageAvailableFiltersResultInfo {

    resources?: { [key: string]: string; } | undefined;

    pages?: { [key: string]: string; } | undefined;

    non_indexable?: { [key: string]: string; } | undefined;

    links?: { [key: string]: string; } | undefined;

    pages_by_resource?: { [key: string]: string; } | undefined;

    redirect_chains?: { [key: string]: string; } | undefined;

    keyword_density?: { [key: string]: string; } | undefined;

    invalid_resources?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IOnPageAvailableFiltersResultInfo) {

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
            this.resources = data["resources"];
            this.pages = data["pages"];
            this.non_indexable = data["non_indexable"];
            this.links = data["links"];
            this.pages_by_resource = data["pages_by_resource"];
            this.redirect_chains = data["redirect_chains"];
            this.keyword_density = data["keyword_density"];
            this.invalid_resources = data["invalid_resources"];
        }
    }

    static fromJS(data: any): OnPageAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["resources"] = this.resources;
        data["pages"] = this.pages;
        data["non_indexable"] = this.non_indexable;
        data["links"] = this.links;
        data["pages_by_resource"] = this.pages_by_resource;
        data["redirect_chains"] = this.redirect_chains;
        data["keyword_density"] = this.keyword_density;
        data["invalid_resources"] = this.invalid_resources;
        return data;
    }
}