import { PageContentInfo, IPageContentInfo } from "./PageContentInfo";


export interface IContentParsingElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *date and time when the content was fethced*             example:             `'2022-11-01 10:02:52 +00:00'` */
        fetch_time?: string | undefined
        
        /** *general status code*             you can find the full list of the response codes [here](/v3/appendix/errors)             **Note:** we strongly recommend designing a necessary system for handling related exceptional or error conditions */
        status_code?: number | undefined
        
        /** *parsed content of the page* */
        page_content?: PageContentInfo | undefined
        
        /** *page content in the markdown format*             page content in the [text-to-HTML markdown format](https://daringfireball.net/projects/markdown/)             specify `markdown_view` as `true` in the request to return the value */
        page_as_markdown?: string | undefined

    [key: string]: any;

    }

export class ContentParsingElement  implements IContentParsingElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *date and time when the content was fethced*             example:             `'2022-11-01 10:02:52 +00:00'` */

    fetch_time?: string | undefined;

    
    /** *general status code*             you can find the full list of the response codes [here](/v3/appendix/errors)             **Note:** we strongly recommend designing a necessary system for handling related exceptional or error conditions */

    status_code?: number | undefined;

    
    /** *parsed content of the page* */

    page_content?: PageContentInfo | undefined;

    
    /** *page content in the markdown format*             page content in the [text-to-HTML markdown format](https://daringfireball.net/projects/markdown/)             specify `markdown_view` as `true` in the request to return the value */

    page_as_markdown?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentParsingElement) {

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
            this.fetch_time = data["fetch_time"];
            this.status_code = data["status_code"];
            this.page_content = data["page_content"] ? PageContentInfo.fromJS(data["page_content"]) : <any>undefined;
            this.page_as_markdown = data["page_as_markdown"];
        }
    }

    static fromJS(data: any): ContentParsingElement {
        data = typeof data === 'object' ? data : {};


        let result = new ContentParsingElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["fetch_time"] = this.fetch_time;
        data["status_code"] = this.status_code;
        data["page_content"] = this.page_content ? PageContentInfo.fromJS(this.page_content)?.toJSON() : <any>undefined;
        data["page_as_markdown"] = this.page_as_markdown;
        return data;
    }
}