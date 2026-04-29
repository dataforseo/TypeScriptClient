export interface IUncrawlableResourcesMeta   {
        
        /** actual content type of the resource */
        content_type?: string | undefined
        
        /** expected content types for the resourcelist of content types that were expected by the crawler based on how the resource is referenced on the page */
        expected_content_types?: string[] | undefined

    [key: string]: any;

    }

export class UncrawlableResourcesMeta  implements IUncrawlableResourcesMeta {
    
    /** actual content type of the resource */

    content_type?: string | undefined;
    
    /** expected content types for the resourcelist of content types that were expected by the crawler based on how the resource is referenced on the page */

    expected_content_types?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IUncrawlableResourcesMeta) {

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
            this.content_type = data["content_type"];
            this.expected_content_types = data["expected_content_types"];
        }
    }

    static fromJS(data: any): UncrawlableResourcesMeta {
        data = typeof data === 'object' ? data : {};


        let result = new UncrawlableResourcesMeta();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["content_type"] = this.content_type;
        data["expected_content_types"] = this.expected_content_types;
        return data;
    }
}