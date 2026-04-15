import { SourceInfo, ISourceInfo } from "./SourceInfo";
import { Table, ITable } from "./Table";
import { GeminiImagesElement, IGeminiImagesElement } from "./GeminiImagesElement";


export interface IBaseGeminiLlmScraperElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERPposition within a group of elements with identical type valuespositions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERPabsolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */
        markdown?: string | undefined

    [key: string]: any;

    }

export class BaseGeminiLlmScraperElementItem  implements IBaseGeminiLlmScraperElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERPposition within a group of elements with identical type valuespositions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERPabsolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** content of the element in markdown formatcontent of the result formatted in the markdown markup language */

    markdown?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseGeminiLlmScraperElementItem) {

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
            this.markdown = data["markdown"];
        }
    }

    static fromJS(data: any): BaseGeminiLlmScraperElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "gemini_text") {

            let result = new GeminiTextElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "gemini_table") {

            let result = new GeminiTableElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "gemini_images") {

            let result = new GeminiImagesElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseGeminiLlmScraperElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["markdown"] = this.markdown;
        return data;
    }
}

 
export interface IGeminiTextElementItem  extends IBaseGeminiLlmScraperElementItem    {
        
        /** unformatted text content of the element */
        original_text?: string | undefined
        
        /** array of sources */
        sources?: SourceInfo[] | undefined

    [key: string]: any;

    }

export class GeminiTextElementItem  extends BaseGeminiLlmScraperElementItem   implements IGeminiTextElementItem {
    
    /** unformatted text content of the element */

    original_text?: string | undefined;
    
    /** array of sources */

    sources?: SourceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IGeminiTextElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.original_text = data["original_text"];
            if (Array.isArray(data["sources"])) {
                this.sources = [];
                for (let item of data["sources"]) {
                    this.sources.push(SourceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GeminiTextElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GeminiTextElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["original_text"] = this.original_text;
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

 
export interface IGeminiTableElementItem  extends IBaseGeminiLlmScraperElementItem    {
        
        /** unformatted text content of the element */
        original_text?: string | undefined
        
        /** table present in the elementthe header and content of the table present in the element */
        table?: Table | undefined

    [key: string]: any;

    }

export class GeminiTableElementItem  extends BaseGeminiLlmScraperElementItem   implements IGeminiTableElementItem {
    
    /** unformatted text content of the element */

    original_text?: string | undefined;
    
    /** table present in the elementthe header and content of the table present in the element */

    table?: Table | undefined;

    [key: string]: any;


    constructor(data?: IGeminiTableElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.original_text = data["original_text"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GeminiTableElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GeminiTableElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["original_text"] = this.original_text;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IGeminiImagesElementItem  extends IBaseGeminiLlmScraperElementItem    {
        
        /** elements of Gemini results */
        items?: GeminiImagesElement[] | undefined

    [key: string]: any;

    }

export class GeminiImagesElementItem  extends BaseGeminiLlmScraperElementItem   implements IGeminiImagesElementItem {
    
    /** elements of Gemini results */

    items?: GeminiImagesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IGeminiImagesElementItem) {
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
                    this.items.push(GeminiImagesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GeminiImagesElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GeminiImagesElementItem();
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