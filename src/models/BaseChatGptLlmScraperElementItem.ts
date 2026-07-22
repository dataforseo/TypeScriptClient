import { SourceInfo, ISourceInfo } from "./SourceInfo";
import { ChatGptBrandEntity, IChatGptBrandEntity } from "./ChatGptBrandEntity";
import { Table, ITable } from "./Table";
import { GeminiImagesElement, IGeminiImagesElement } from "./GeminiImagesElement";
import { ChatGptProductsElement, IChatGptProductsElement } from "./ChatGptProductsElement";
import { ChatGptLocalBusinessesElement, IChatGptLocalBusinessesElement } from "./ChatGptLocalBusinessesElement";
import { ChatGptAdAdvertiser, IChatGptAdAdvertiser } from "./ChatGptAdAdvertiser";


export interface IBaseChatGptLlmScraperElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERPposition within a group of elements with identical type valuespositions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERPabsolute position among all the elements */
        rank_absolute?: number | undefined

    [key: string]: any;

    }

export class BaseChatGptLlmScraperElementItem  implements IBaseChatGptLlmScraperElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERPposition within a group of elements with identical type valuespositions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERPabsolute position among all the elements */

    rank_absolute?: number | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseChatGptLlmScraperElementItem) {

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
        }
    }

    static fromJS(data: any): BaseChatGptLlmScraperElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "chat_gpt_text") {

            let result = new ChatGptTextElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "chat_gpt_table") {

            let result = new ChatGptTableElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "chat_gpt_navigation_list") {

            let result = new ChatGptNavigationListElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "chat_gpt_images") {

            let result = new ChatGptImagesElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "chat_gpt_products") {

            let result = new ChatGptProductsElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "chat_gpt_local_businesses") {

            let result = new ChatGptLocalBusinessesElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "chat_gpt_ad") {

            let result = new ChatGptAdElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseChatGptLlmScraperElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        return data;
    }
}

 
export interface IChatGptTextElementItem  extends IBaseChatGptLlmScraperElementItem    {
        
        /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** array of sources */
        sources?: SourceInfo[] | undefined
        
        /** array of brand entitiescontains information on brands mentioned in the text */
        brand_entities?: ChatGptBrandEntity[] | undefined

    [key: string]: any;

    }

export class ChatGptTextElementItem  extends BaseChatGptLlmScraperElementItem   implements IChatGptTextElementItem {

    
    /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */

    markdown?: string | undefined;

    
    /** array of sources */

    sources?: SourceInfo[] | undefined;

    
    /** array of brand entitiescontains information on brands mentioned in the text */

    brand_entities?: ChatGptBrandEntity[] | undefined;

    [key: string]: any;


    constructor(data?: IChatGptTextElementItem) {
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
            if (Array.isArray(data["sources"])) {
                this.sources = [];
                for (let item of data["sources"]) {
                    this.sources.push(SourceInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["brand_entities"])) {
                this.brand_entities = [];
                for (let item of data["brand_entities"]) {
                    this.brand_entities.push(ChatGptBrandEntity.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ChatGptTextElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptTextElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["markdown"] = this.markdown;
        data["sources"] = null;
        if (Array.isArray(this.sources)) {
            data["sources"] = [];
            for (let item of this.sources) {
                if (item && typeof item.toJSON === "function") {
                    data["sources"].push(item?.toJSON());
                }
            }
        }
        data["brand_entities"] = null;
        if (Array.isArray(this.brand_entities)) {
            data["brand_entities"] = [];
            for (let item of this.brand_entities) {
                if (item && typeof item.toJSON === "function") {
                    data["brand_entities"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IChatGptTableElementItem  extends IBaseChatGptLlmScraperElementItem    {
        
        /** text of the element */
        text?: string | undefined
        
        /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** table present in the elementthe header and content of the table present in the element */
        table?: Table | undefined
        
        /** array of brand entitiescontains information on brands mentioned in the text */
        brand_entities?: ChatGptBrandEntity[] | undefined

    [key: string]: any;

    }

export class ChatGptTableElementItem  extends BaseChatGptLlmScraperElementItem   implements IChatGptTableElementItem {

    
    /** text of the element */

    text?: string | undefined;

    
    /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */

    markdown?: string | undefined;

    
    /** table present in the elementthe header and content of the table present in the element */

    table?: Table | undefined;

    
    /** array of brand entitiescontains information on brands mentioned in the text */

    brand_entities?: ChatGptBrandEntity[] | undefined;

    [key: string]: any;


    constructor(data?: IChatGptTableElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.text = data["text"];
            this.markdown = data["markdown"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            if (Array.isArray(data["brand_entities"])) {
                this.brand_entities = [];
                for (let item of data["brand_entities"]) {
                    this.brand_entities.push(ChatGptBrandEntity.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ChatGptTableElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptTableElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["text"] = this.text;
        data["markdown"] = this.markdown;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["brand_entities"] = null;
        if (Array.isArray(this.brand_entities)) {
            data["brand_entities"] = [];
            for (let item of this.brand_entities) {
                if (item && typeof item.toJSON === "function") {
                    data["brand_entities"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IChatGptNavigationListElementItem  extends IBaseChatGptLlmScraperElementItem    {
        
        /** name of the brand */
        title?: string | undefined
        
        /** array of sources */
        sources?: SourceInfo[] | undefined

    [key: string]: any;

    }

export class ChatGptNavigationListElementItem  extends BaseChatGptLlmScraperElementItem   implements IChatGptNavigationListElementItem {

    
    /** name of the brand */

    title?: string | undefined;

    
    /** array of sources */

    sources?: SourceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IChatGptNavigationListElementItem) {
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
            if (Array.isArray(data["sources"])) {
                this.sources = [];
                for (let item of data["sources"]) {
                    this.sources.push(SourceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ChatGptNavigationListElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptNavigationListElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["sources"] = null;
        if (Array.isArray(this.sources)) {
            data["sources"] = [];
            for (let item of this.sources) {
                if (item && typeof item.toJSON === "function") {
                    data["sources"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IChatGptImagesElementItem  extends IBaseChatGptLlmScraperElementItem    {
        
        /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** elements of ChatGPT results */
        items?: GeminiImagesElement[] | undefined

    [key: string]: any;

    }

export class ChatGptImagesElementItem  extends BaseChatGptLlmScraperElementItem   implements IChatGptImagesElementItem {

    
    /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */

    markdown?: string | undefined;

    
    /** elements of ChatGPT results */

    items?: GeminiImagesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IChatGptImagesElementItem) {
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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GeminiImagesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ChatGptImagesElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptImagesElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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

 
export interface IChatGptProductsElementItem  extends IBaseChatGptLlmScraperElementItem    {
        
        /** elements of ChatGPT results */
        items?: ChatGptProductsElement[] | undefined

    [key: string]: any;

    }

export class ChatGptProductsElementItem  extends BaseChatGptLlmScraperElementItem   implements IChatGptProductsElementItem {

    
    /** elements of ChatGPT results */

    items?: ChatGptProductsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IChatGptProductsElementItem) {
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
                    this.items.push(ChatGptProductsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ChatGptProductsElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptProductsElementItem();
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

 
export interface IChatGptLocalBusinessesElementItem  extends IBaseChatGptLlmScraperElementItem    {
        
        /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** elements of ChatGPT results */
        items?: ChatGptLocalBusinessesElement[] | undefined

    [key: string]: any;

    }

export class ChatGptLocalBusinessesElementItem  extends BaseChatGptLlmScraperElementItem   implements IChatGptLocalBusinessesElementItem {

    
    /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */

    markdown?: string | undefined;

    
    /** elements of ChatGPT results */

    items?: ChatGptLocalBusinessesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IChatGptLocalBusinessesElementItem) {
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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ChatGptLocalBusinessesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ChatGptLocalBusinessesElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptLocalBusinessesElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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

 
export interface IChatGptAdElementItem  extends IBaseChatGptLlmScraperElementItem    {
        
        /** name of the brand */
        title?: string | undefined
        
        /** source description */
        snippet?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** domain */
        domain?: string | undefined
        
        /** URL of the image displayed in the ad */
        image_url?: string | undefined
        
        /** information about the advertiser associated with the ad */
        advertiser?: ChatGptAdAdvertiser | undefined

    [key: string]: any;

    }

export class ChatGptAdElementItem  extends BaseChatGptLlmScraperElementItem   implements IChatGptAdElementItem {

    
    /** name of the brand */

    title?: string | undefined;

    
    /** source description */

    snippet?: string | undefined;

    
    /** URL */

    url?: string | undefined;

    
    /** domain */

    domain?: string | undefined;

    
    /** URL of the image displayed in the ad */

    image_url?: string | undefined;

    
    /** information about the advertiser associated with the ad */

    advertiser?: ChatGptAdAdvertiser | undefined;

    [key: string]: any;


    constructor(data?: IChatGptAdElementItem) {
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
            this.advertiser = data["advertiser"] ? ChatGptAdAdvertiser.fromJS(data["advertiser"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ChatGptAdElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptAdElementItem();
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
        data["advertiser"] = this.advertiser ? ChatGptAdAdvertiser.fromJS(this.advertiser)?.toJSON() : <any>undefined;
        return data;
    }
}