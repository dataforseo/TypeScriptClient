import { LinkElement, ILinkElement } from "./LinkElement";
import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { AiModeAiOverviewReferenceInfo, IAiModeAiOverviewReferenceInfo } from "./AiModeAiOverviewReferenceInfo";
import { VideoElement, IVideoElement } from "./VideoElement";
import { AiModeAiOverviewShoppingElementInfo, IAiModeAiOverviewShoppingElementInfo } from "./AiModeAiOverviewShoppingElementInfo";


export interface IBaseSerpApiBingAiOverviewElementItem   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseSerpApiBingAiOverviewElementItem  implements IBaseSerpApiBingAiOverviewElementItem {
    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiBingAiOverviewElementItem) {

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
        }
    }

    static fromJS(data: any): BaseSerpApiBingAiOverviewElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "ai_overview_element") {

            let result = new SerpApiBingAiOverviewElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_video_element") {

            let result = new SerpApiBingAiOverviewVideoElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_videos_element") {

            let result = new SerpApiBingAiOverviewVideosElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_images_element") {

            let result = new SerpApiBingAiOverviewImagesElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_organic_element") {

            let result = new SerpApiBingAiOverviewOrganicElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_shopping") {

            let result = new SerpApiBingAiOverviewShoppingItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiBingAiOverviewElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}

 
export interface ISerpApiBingAiOverviewElementItem  extends IBaseSerpApiBingAiOverviewElementItem    {
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** text or description of the element in SERP */
        text?: string | undefined
        
        /** content of the element in markdown format */
        markdown?: string | undefined
        
        /** sitelinks
the links shown below some search results
if there are none, equals null */
        links?: LinkElement[] | undefined
        
        /** images of the element */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiBingAiOverviewElementItem  extends BaseSerpApiBingAiOverviewElementItem   implements ISerpApiBingAiOverviewElementItem {
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** text or description of the element in SERP */

    text?: string | undefined;
    
    /** content of the element in markdown format */

    markdown?: string | undefined;
    
    /** sitelinks
the links shown below some search results
if there are none, equals null */

    links?: LinkElement[] | undefined;
    
    /** images of the element */

    images?: AiModeImagesElementInfo[] | undefined;
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiBingAiOverviewElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            this.title = data["title"];
            this.text = data["text"];
            this.markdown = data["markdown"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiModeAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiBingAiOverviewElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiBingAiOverviewElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["title"] = this.title;
        data["text"] = this.text;
        data["markdown"] = this.markdown;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["references"] = null;
        if (Array.isArray(this.references)) {
            data["references"] = [];
            for (let item of this.references) {
                if (item && typeof item.toJSON === "function") {
                    data["references"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiBingAiOverviewVideoElementItem  extends IBaseSerpApiBingAiOverviewElementItem    {
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** link anchor text */
        title?: string | undefined
        
        /** text snippet of the video */
        snippet?: string | undefined
        
        /** link URL */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** source of the element
indicates the source of information included in the questions_and_answers_element */
        source?: string | undefined
        
        /** the date when the page source of the element was published */
        date?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class SerpApiBingAiOverviewVideoElementItem  extends BaseSerpApiBingAiOverviewElementItem   implements ISerpApiBingAiOverviewVideoElementItem {
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** link anchor text */

    title?: string | undefined;
    
    /** text snippet of the video */

    snippet?: string | undefined;
    
    /** link URL */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** source of the element
indicates the source of information included in the questions_and_answers_element */

    source?: string | undefined;
    
    /** the date when the page source of the element was published */

    date?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiBingAiOverviewVideoElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            this.title = data["title"];
            this.snippet = data["snippet"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.image_url = data["image_url"];
            this.source = data["source"];
            this.date = data["date"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): SerpApiBingAiOverviewVideoElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiBingAiOverviewVideoElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["title"] = this.title;
        data["snippet"] = this.snippet;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["image_url"] = this.image_url;
        data["source"] = this.source;
        data["date"] = this.date;
        data["timestamp"] = this.timestamp;
        return data;
    }
}

 
export interface ISerpApiBingAiOverviewVideosElementItem  extends IBaseSerpApiBingAiOverviewElementItem    {
        
        /** elements of search results found in SERP */
        items?: VideoElement[] | undefined

    [key: string]: any;

    }

export class SerpApiBingAiOverviewVideosElementItem  extends BaseSerpApiBingAiOverviewElementItem   implements ISerpApiBingAiOverviewVideosElementItem {
    
    /** elements of search results found in SERP */

    items?: VideoElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiBingAiOverviewVideosElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(VideoElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiBingAiOverviewVideosElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiBingAiOverviewVideosElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiBingAiOverviewImagesElementItem  extends IBaseSerpApiBingAiOverviewElementItem    {
        
        /** URL link */
        url?: string | undefined
        
        /** title of the link element */
        title?: string | undefined
        
        /** items featured in the faq_box */
        items?: AiModeImagesElementInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiBingAiOverviewImagesElementItem  extends BaseSerpApiBingAiOverviewElementItem   implements ISerpApiBingAiOverviewImagesElementItem {
    
    /** URL link */

    url?: string | undefined;
    
    /** title of the link element */

    title?: string | undefined;
    
    /** items featured in the faq_box */

    items?: AiModeImagesElementInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiBingAiOverviewImagesElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.url = data["url"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiBingAiOverviewImagesElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiBingAiOverviewImagesElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["url"] = this.url;
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
        return data;
    }
}

 
export interface ISerpApiBingAiOverviewOrganicElementItem  extends IBaseSerpApiBingAiOverviewElementItem    {
        
        /** title of the link */
        title?: string | undefined
        
        /** relevant URL */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** text snippet from the organic result */
        snippet?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        /** website name in SERP */
        website_name?: string | undefined
        
        /** links featured in the faq_box_element */
        links?: LinkElement[] | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined

    [key: string]: any;

    }

export class SerpApiBingAiOverviewOrganicElementItem  extends BaseSerpApiBingAiOverviewElementItem   implements ISerpApiBingAiOverviewOrganicElementItem {
    
    /** title of the link */

    title?: string | undefined;
    
    /** relevant URL */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** text snippet from the organic result */

    snippet?: string | undefined;
    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;
    
    /** website name in SERP */

    website_name?: string | undefined;
    
    /** links featured in the faq_box_element */

    links?: LinkElement[] | undefined;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiBingAiOverviewOrganicElementItem) {
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
            this.url = data["url"];
            this.domain = data["domain"];
            this.snippet = data["snippet"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            this.highlighted = data["highlighted"];
        }
    }

    static fromJS(data: any): SerpApiBingAiOverviewOrganicElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiBingAiOverviewOrganicElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["snippet"] = this.snippet;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["highlighted"] = this.highlighted;
        return data;
    }
}

 
export interface ISerpApiBingAiOverviewShoppingItem  extends IBaseSerpApiBingAiOverviewElementItem    {
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** content of the element in markdown format */
        markdown?: string | undefined
        
        /** additional items present in the element
if there are none, equals null */
        items?: AiModeAiOverviewShoppingElementInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiBingAiOverviewShoppingItem  extends BaseSerpApiBingAiOverviewElementItem   implements ISerpApiBingAiOverviewShoppingItem {
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** content of the element in markdown format */

    markdown?: string | undefined;
    
    /** additional items present in the element
if there are none, equals null */

    items?: AiModeAiOverviewShoppingElementInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiBingAiOverviewShoppingItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            this.title = data["title"];
            this.markdown = data["markdown"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiModeAiOverviewShoppingElementInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiBingAiOverviewShoppingItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiBingAiOverviewShoppingItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["title"] = this.title;
        data["markdown"] = this.markdown;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}