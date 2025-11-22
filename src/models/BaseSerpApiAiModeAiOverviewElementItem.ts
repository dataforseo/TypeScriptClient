import { AiModeLinkElementInfo, IAiModeLinkElementInfo } from "./AiModeLinkElementInfo";
import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { AiModeAiOverviewReferenceInfo, IAiModeAiOverviewReferenceInfo } from "./AiModeAiOverviewReferenceInfo";
import { AiModeAiOverviewExpandedComponentInfo, IAiModeAiOverviewExpandedComponentInfo } from "./AiModeAiOverviewExpandedComponentInfo";
import { AiModeTableInfo, IAiModeTableInfo } from "./AiModeTableInfo";
import { AiModeAiOverviewShoppingElementInfo, IAiModeAiOverviewShoppingElementInfo } from "./AiModeAiOverviewShoppingElementInfo";


export interface IBaseSerpApiAiModeAiOverviewElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined

    [key: string]: any;

    }

export class BaseSerpApiAiModeAiOverviewElementItem  implements IBaseSerpApiAiModeAiOverviewElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiAiModeAiOverviewElementItem) {

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
            this.position = data["position"];
        }
    }

    static fromJS(data: any): BaseSerpApiAiModeAiOverviewElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "ai_overview_element") {

            let result = new SerpApiAiModeAiOverviewElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_expanded_element") {

            let result = new SerpApiAiModeAiOverviewExpandedElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_video_element") {

            let result = new SerpApiAiModeAiOverviewVideoElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_table_element") {

            let result = new SerpApiAiModeAiOverviewTableElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_shopping") {

            let result = new SerpApiAiModeAiOverviewShoppingItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiAiModeAiOverviewElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        return data;
    }
}

 
export interface ISerpApiAiModeAiOverviewElementItem  extends IBaseSerpApiAiModeAiOverviewElementItem    {
        
        /** title of the element */
        title?: string | undefined
        
        /** text or description of the element in SERP */
        text?: string | undefined
        
        /** content of the element in markdown format */
        markdown?: string | undefined
        
        /** website links featured in the element */
        links?: AiModeLinkElementInfo[] | undefined
        
        /** images of the element
if there are none, equals null */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiAiModeAiOverviewElementItem  extends BaseSerpApiAiModeAiOverviewElementItem   implements ISerpApiAiModeAiOverviewElementItem {
    
    /** title of the element */

    title?: string | undefined;
    
    /** text or description of the element in SERP */

    text?: string | undefined;
    
    /** content of the element in markdown format */

    markdown?: string | undefined;
    
    /** website links featured in the element */

    links?: AiModeLinkElementInfo[] | undefined;
    
    /** images of the element
if there are none, equals null */

    images?: AiModeImagesElementInfo[] | undefined;
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiAiModeAiOverviewElementItem) {
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
            this.text = data["text"];
            this.markdown = data["markdown"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(AiModeLinkElementInfo.fromJS(item));
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

    static fromJS(data: any): SerpApiAiModeAiOverviewElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiModeAiOverviewElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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

 
export interface ISerpApiAiModeAiOverviewExpandedElementItem  extends IBaseSerpApiAiModeAiOverviewElementItem    {
        
        /** link anchor text */
        title?: string | undefined
        
        /** reference text
text snippet from the page that was used to generate the ai_overview_element */
        text?: string | undefined
        
        /** array of components of the element */
        components?: AiModeAiOverviewExpandedComponentInfo[] | undefined
        
        /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiAiModeAiOverviewExpandedElementItem  extends BaseSerpApiAiModeAiOverviewElementItem   implements ISerpApiAiModeAiOverviewExpandedElementItem {
    
    /** link anchor text */

    title?: string | undefined;
    
    /** reference text
text snippet from the page that was used to generate the ai_overview_element */

    text?: string | undefined;
    
    /** array of components of the element */

    components?: AiModeAiOverviewExpandedComponentInfo[] | undefined;
    
    /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiAiModeAiOverviewExpandedElementItem) {
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
            this.text = data["text"];
            if (Array.isArray(data["components"])) {
                this.components = [];
                for (let item of data["components"]) {
                    this.components.push(AiModeAiOverviewExpandedComponentInfo.fromJS(item));
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

    static fromJS(data: any): SerpApiAiModeAiOverviewExpandedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiModeAiOverviewExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["text"] = this.text;
        data["components"] = null;
        if (Array.isArray(this.components)) {
            data["components"] = [];
            for (let item of this.components) {
                if (item && typeof item.toJSON === "function") {
                    data["components"].push(item?.toJSON());
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

 
export interface ISerpApiAiModeAiOverviewVideoElementItem  extends IBaseSerpApiAiModeAiOverviewElementItem    {
        
        /** title of the element in SERP */
        title?: string | undefined
        
        /** additional information for the video */
        snippet?: string | undefined
        
        /** relevant URL */
        url?: string | undefined
        
        /** domain name of the reference */
        domain?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** reference source name or title */
        source?: string | undefined
        
        /** date when the video was published or indexed
example:
Apr 26, 2024 */
        date?: string | undefined
        
        /** date and time when the video was published or indexed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class SerpApiAiModeAiOverviewVideoElementItem  extends BaseSerpApiAiModeAiOverviewElementItem   implements ISerpApiAiModeAiOverviewVideoElementItem {
    
    /** title of the element in SERP */

    title?: string | undefined;
    
    /** additional information for the video */

    snippet?: string | undefined;
    
    /** relevant URL */

    url?: string | undefined;
    
    /** domain name of the reference */

    domain?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** reference source name or title */

    source?: string | undefined;
    
    /** date when the video was published or indexed
example:
Apr 26, 2024 */

    date?: string | undefined;
    
    /** date and time when the video was published or indexed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiAiModeAiOverviewVideoElementItem) {
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
            this.snippet = data["snippet"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.image_url = data["image_url"];
            this.source = data["source"];
            this.date = data["date"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): SerpApiAiModeAiOverviewVideoElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiModeAiOverviewVideoElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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

 
export interface ISerpApiAiModeAiOverviewTableElementItem  extends IBaseSerpApiAiModeAiOverviewElementItem    {
        
        /** text of the component in the markdwon format */
        markdown?: string | undefined
        
        /** table present in the element
the header and content of the table present in the element */
        table?: AiModeTableInfo | undefined

    [key: string]: any;

    }

export class SerpApiAiModeAiOverviewTableElementItem  extends BaseSerpApiAiModeAiOverviewElementItem   implements ISerpApiAiModeAiOverviewTableElementItem {
    
    /** text of the component in the markdwon format */

    markdown?: string | undefined;
    
    /** table present in the element
the header and content of the table present in the element */

    table?: AiModeTableInfo | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiAiModeAiOverviewTableElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.markdown = data["markdown"];
            this.table = data["table"] ? AiModeTableInfo.fromJS(data["table"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SerpApiAiModeAiOverviewTableElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiModeAiOverviewTableElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["markdown"] = this.markdown;
        data["table"] = this.table ? AiModeTableInfo.fromJS(this.table)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface ISerpApiAiModeAiOverviewShoppingItem  extends IBaseSerpApiAiModeAiOverviewElementItem    {
        
        /** title of the link */
        title?: string | undefined
        
        /** content of the element in markdown format
the text of the ai_overview formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** items of the element */
        items?: AiModeAiOverviewShoppingElementInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiAiModeAiOverviewShoppingItem  extends BaseSerpApiAiModeAiOverviewElementItem   implements ISerpApiAiModeAiOverviewShoppingItem {
    
    /** title of the link */

    title?: string | undefined;
    
    /** content of the element in markdown format
the text of the ai_overview formatted in the markdown markup language */

    markdown?: string | undefined;
    
    /** items of the element */

    items?: AiModeAiOverviewShoppingElementInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiAiModeAiOverviewShoppingItem) {
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
            this.markdown = data["markdown"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiModeAiOverviewShoppingElementInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiAiModeAiOverviewShoppingItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiModeAiOverviewShoppingItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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