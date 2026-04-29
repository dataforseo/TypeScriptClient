export interface IRefineProductsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** keyword for the related refined search */
        keyword?: string | undefined
        
        /** type of search refinement */
        refine_type?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class RefineProductsElement  implements IRefineProductsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** keyword for the related refined search */

    keyword?: string | undefined;
    
    /** type of search refinement */

    refine_type?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    constructor(data?: IRefineProductsElement) {

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
            this.image_url = data["image_url"];
            this.keyword = data["keyword"];
            this.refine_type = data["refine_type"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): RefineProductsElement {
        data = typeof data === 'object' ? data : {};


        let result = new RefineProductsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["image_url"] = this.image_url;
        data["keyword"] = this.keyword;
        data["refine_type"] = this.refine_type;
        data["xpath"] = this.xpath;
        return data;
    }
}