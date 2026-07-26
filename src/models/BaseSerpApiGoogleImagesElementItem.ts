import { SerpApiCarouselElement, ISerpApiCarouselElement } from "./SerpApiCarouselElement";
import { AiModeRectangleInfo, IAiModeRectangleInfo } from "./AiModeRectangleInfo";


export interface IBaseSerpApiGoogleImagesElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP for the target domain absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class BaseSerpApiGoogleImagesElementItem  implements IBaseSerpApiGoogleImagesElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP for the target domain absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiGoogleImagesElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): BaseSerpApiGoogleImagesElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "carousel") {

            let result = new SerpApiGoogleImagesCarouselElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "images_search") {

            let result = new SerpApiGoogleImagesImagesSearchElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            let result = new SerpApiGoogleImagesRelatedSearchesElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiGoogleImagesElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["xpath"] = this.xpath;
        return data;
    }
}

 
export interface ISerpApiGoogleImagesCarouselElementItem  extends IBaseSerpApiGoogleImagesElementItem    {
        
        page?: number | undefined
        
        /** the alignment of the element in SERP can take the following values: left, right */
        position?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** items of the element */
        items?: SerpApiCarouselElement[] | undefined
        
        /** rectangle parameters contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null */
        rectangle?: AiModeRectangleInfo | undefined

    [key: string]: any;

    }

export class SerpApiGoogleImagesCarouselElementItem  extends BaseSerpApiGoogleImagesElementItem   implements ISerpApiGoogleImagesCarouselElementItem {

    page?: number | undefined;

    
    /** the alignment of the element in SERP can take the following values: left, right */

    position?: string | undefined;

    
    /** title of the element */

    title?: string | undefined;

    
    /** items of the element */

    items?: SerpApiCarouselElement[] | undefined;

    
    /** rectangle parameters contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null */

    rectangle?: AiModeRectangleInfo | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleImagesCarouselElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.page = data["page"];
            this.position = data["position"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(SerpApiCarouselElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? AiModeRectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SerpApiGoogleImagesCarouselElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleImagesCarouselElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["page"] = this.page;
        data["position"] = this.position;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? AiModeRectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface ISerpApiGoogleImagesImagesSearchElementItem  extends IBaseSerpApiGoogleImagesElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** subtitle of the result in SERP */
        subtitle?: string | undefined
        
        /** the alt tag of the image */
        alt?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** the URL of the source image */
        source_url?: string | undefined
        
        /** the URL of the cached version of the image stored on Google’s servers */
        encoded_url?: string | undefined

    [key: string]: any;

    }

export class SerpApiGoogleImagesImagesSearchElementItem  extends BaseSerpApiGoogleImagesElementItem   implements ISerpApiGoogleImagesImagesSearchElementItem {

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** subtitle of the result in SERP */

    subtitle?: string | undefined;

    
    /** the alt tag of the image */

    alt?: string | undefined;

    
    /** search URL with refinement parameters */

    url?: string | undefined;

    
    /** the URL of the source image */

    source_url?: string | undefined;

    
    /** the URL of the cached version of the image stored on Google’s servers */

    encoded_url?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleImagesImagesSearchElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.subtitle = data["subtitle"];
            this.alt = data["alt"];
            this.url = data["url"];
            this.source_url = data["source_url"];
            this.encoded_url = data["encoded_url"];
        }
    }

    static fromJS(data: any): SerpApiGoogleImagesImagesSearchElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleImagesImagesSearchElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["subtitle"] = this.subtitle;
        data["alt"] = this.alt;
        data["url"] = this.url;
        data["source_url"] = this.source_url;
        data["encoded_url"] = this.encoded_url;
        return data;
    }
}

 
export interface ISerpApiGoogleImagesRelatedSearchesElementItem  extends IBaseSerpApiGoogleImagesElementItem    {
        
        page?: number | undefined
        
        /** the alignment of the element in SERP can take the following values: left, right */
        position?: string | undefined
        
        /** items of the element */
        items?: string[] | undefined
        
        /** rectangle parameters contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null */
        rectangle?: AiModeRectangleInfo | undefined

    [key: string]: any;

    }

export class SerpApiGoogleImagesRelatedSearchesElementItem  extends BaseSerpApiGoogleImagesElementItem   implements ISerpApiGoogleImagesRelatedSearchesElementItem {

    page?: number | undefined;

    
    /** the alignment of the element in SERP can take the following values: left, right */

    position?: string | undefined;

    
    /** items of the element */

    items?: string[] | undefined;

    
    /** rectangle parameters contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null */

    rectangle?: AiModeRectangleInfo | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleImagesRelatedSearchesElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.page = data["page"];
            this.position = data["position"];
            this.items = data["items"];
            this.rectangle = data["rectangle"] ? AiModeRectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SerpApiGoogleImagesRelatedSearchesElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleImagesRelatedSearchesElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["page"] = this.page;
        data["position"] = this.position;
        data["items"] = this.items;
        data["rectangle"] = this.rectangle ? AiModeRectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}