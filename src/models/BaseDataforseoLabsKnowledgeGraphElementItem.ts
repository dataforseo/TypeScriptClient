import { LinkElement, ILinkElement } from "./LinkElement";
import { KnowledgeGraphImagesElement, IKnowledgeGraphImagesElement } from "./KnowledgeGraphImagesElement";
import { KnowledgeGraphListElement, IKnowledgeGraphListElement } from "./KnowledgeGraphListElement";
import { KnowledgeGraphLinkElementInfo, IKnowledgeGraphLinkElementInfo } from "./KnowledgeGraphLinkElementInfo";
import { KnowledgeGraphShoppingElement, IKnowledgeGraphShoppingElement } from "./KnowledgeGraphShoppingElement";


export interface IBaseDataforseoLabsKnowledgeGraphElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class BaseDataforseoLabsKnowledgeGraphElementItem  implements IBaseDataforseoLabsKnowledgeGraphElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseDataforseoLabsKnowledgeGraphElementItem) {

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
            this.position = data["position"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): BaseDataforseoLabsKnowledgeGraphElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "knowledge_graph_images_item") {

            let result = new DataforseoLabsKnowledgeGraphImagesItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_carousel_item") {

            let result = new DataforseoLabsKnowledgeGraphCarouselItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_description_item") {

            let result = new DataforseoLabsKnowledgeGraphDescriptionItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_list_item") {

            let result = new DataforseoLabsKnowledgeGraphListItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_part_item") {

            let result = new DataforseoLabsKnowledgeGraphPartItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_expanded_item") {

            let result = new DataforseoLabsKnowledgeGraphExpandedItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_row_item") {

            let result = new DataforseoLabsKnowledgeGraphRowItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_shopping_item") {

            let result = new DataforseoLabsKnowledgeGraphShoppingItemElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseDataforseoLabsKnowledgeGraphElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        return data;
    }
}

 
export interface IDataforseoLabsKnowledgeGraphImagesItemElementItem  extends IBaseDataforseoLabsKnowledgeGraphElementItem    {
        
        /** link of the element */
        link?: LinkElement | undefined
        
        /** historical SERPs and related data found in the database */
        items?: KnowledgeGraphImagesElement[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsKnowledgeGraphImagesItemElementItem  extends BaseDataforseoLabsKnowledgeGraphElementItem   implements IDataforseoLabsKnowledgeGraphImagesItemElementItem {

    
    /** link of the element */

    link?: LinkElement | undefined;

    
    /** historical SERPs and related data found in the database */

    items?: KnowledgeGraphImagesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsKnowledgeGraphImagesItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphImagesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsKnowledgeGraphImagesItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsKnowledgeGraphImagesItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["link"] = this.link ? LinkElement.fromJS(this.link)?.toJSON() : <any>undefined;
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

 
export interface IDataforseoLabsKnowledgeGraphCarouselItemElementItem  extends IBaseDataforseoLabsKnowledgeGraphElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string | undefined
        
        /** link of the element */
        link?: LinkElement | undefined
        
        /** historical SERPs and related data found in the database */
        items?: KnowledgeGraphListElement[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsKnowledgeGraphCarouselItemElementItem  extends BaseDataforseoLabsKnowledgeGraphElementItem   implements IDataforseoLabsKnowledgeGraphCarouselItemElementItem {

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string | undefined;

    
    /** link of the element */

    link?: LinkElement | undefined;

    
    /** historical SERPs and related data found in the database */

    items?: KnowledgeGraphListElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsKnowledgeGraphCarouselItemElementItem) {
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
            this.data_attrid = data["data_attrid"];
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphListElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsKnowledgeGraphCarouselItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsKnowledgeGraphCarouselItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["link"] = this.link ? LinkElement.fromJS(this.link)?.toJSON() : <any>undefined;
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

 
export interface IDataforseoLabsKnowledgeGraphDescriptionItemElementItem  extends IBaseDataforseoLabsKnowledgeGraphElementItem    {
        
        /** description content */
        text?: string | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: KnowledgeGraphLinkElementInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsKnowledgeGraphDescriptionItemElementItem  extends BaseDataforseoLabsKnowledgeGraphElementItem   implements IDataforseoLabsKnowledgeGraphDescriptionItemElementItem {

    
    /** description content */

    text?: string | undefined;

    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: KnowledgeGraphLinkElementInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsKnowledgeGraphDescriptionItemElementItem) {
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
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(KnowledgeGraphLinkElementInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsKnowledgeGraphDescriptionItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsKnowledgeGraphDescriptionItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IDataforseoLabsKnowledgeGraphListItemElementItem  extends IBaseDataforseoLabsKnowledgeGraphElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string | undefined
        
        /** link of the element */
        link?: LinkElement | undefined
        
        /** historical SERPs and related data found in the database */
        items?: KnowledgeGraphListElement[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsKnowledgeGraphListItemElementItem  extends BaseDataforseoLabsKnowledgeGraphElementItem   implements IDataforseoLabsKnowledgeGraphListItemElementItem {

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string | undefined;

    
    /** link of the element */

    link?: LinkElement | undefined;

    
    /** historical SERPs and related data found in the database */

    items?: KnowledgeGraphListElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsKnowledgeGraphListItemElementItem) {
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
            this.data_attrid = data["data_attrid"];
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphListElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsKnowledgeGraphListItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsKnowledgeGraphListItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["link"] = this.link ? LinkElement.fromJS(this.link)?.toJSON() : <any>undefined;
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

 
export interface IDataforseoLabsKnowledgeGraphPartItemElementItem  extends IBaseDataforseoLabsKnowledgeGraphElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string | undefined
        
        /** description content */
        text?: string | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsKnowledgeGraphPartItemElementItem  extends BaseDataforseoLabsKnowledgeGraphElementItem   implements IDataforseoLabsKnowledgeGraphPartItemElementItem {

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string | undefined;

    
    /** description content */

    text?: string | undefined;

    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsKnowledgeGraphPartItemElementItem) {
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
            this.data_attrid = data["data_attrid"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsKnowledgeGraphPartItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsKnowledgeGraphPartItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IDataforseoLabsKnowledgeGraphExpandedItemElementItem  extends IBaseDataforseoLabsKnowledgeGraphElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string | undefined
        
        /** link of the element */
        expanded_element?: any | undefined

    [key: string]: any;

    }

export class DataforseoLabsKnowledgeGraphExpandedItemElementItem  extends BaseDataforseoLabsKnowledgeGraphElementItem   implements IDataforseoLabsKnowledgeGraphExpandedItemElementItem {

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string | undefined;

    
    /** link of the element */

    expanded_element?: any | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsKnowledgeGraphExpandedItemElementItem) {
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
            this.data_attrid = data["data_attrid"];
            this.expanded_element = data["expanded_element"];
        }
    }

    static fromJS(data: any): DataforseoLabsKnowledgeGraphExpandedItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsKnowledgeGraphExpandedItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["expanded_element"] = this.expanded_element;
        return data;
    }
}

 
export interface IDataforseoLabsKnowledgeGraphRowItemElementItem  extends IBaseDataforseoLabsKnowledgeGraphElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string | undefined
        
        /** description content */
        text?: string | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsKnowledgeGraphRowItemElementItem  extends BaseDataforseoLabsKnowledgeGraphElementItem   implements IDataforseoLabsKnowledgeGraphRowItemElementItem {

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string | undefined;

    
    /** description content */

    text?: string | undefined;

    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsKnowledgeGraphRowItemElementItem) {
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
            this.data_attrid = data["data_attrid"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsKnowledgeGraphRowItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsKnowledgeGraphRowItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IDataforseoLabsKnowledgeGraphShoppingItemElementItem  extends IBaseDataforseoLabsKnowledgeGraphElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: KnowledgeGraphShoppingElement[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsKnowledgeGraphShoppingItemElementItem  extends BaseDataforseoLabsKnowledgeGraphElementItem   implements IDataforseoLabsKnowledgeGraphShoppingItemElementItem {

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string | undefined;

    
    /** historical SERPs and related data found in the database */

    items?: KnowledgeGraphShoppingElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsKnowledgeGraphShoppingItemElementItem) {
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
            this.data_attrid = data["data_attrid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphShoppingElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsKnowledgeGraphShoppingItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsKnowledgeGraphShoppingItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
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