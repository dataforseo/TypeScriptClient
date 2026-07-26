import { AiModeRectangleInfo, IAiModeRectangleInfo } from "./AiModeRectangleInfo";
import { LinkElement, ILinkElement } from "./LinkElement";
import { KnowledgeGraphListElement, IKnowledgeGraphListElement } from "./KnowledgeGraphListElement";
import { KnowledgeGraphImagesElement, IKnowledgeGraphImagesElement } from "./KnowledgeGraphImagesElement";
import { KnowledgeGraphExpandedElement, IKnowledgeGraphExpandedElement } from "./KnowledgeGraphExpandedElement";
import { KnowledgeGraphShoppingElement, IKnowledgeGraphShoppingElement } from "./KnowledgeGraphShoppingElement";
import { KnowledgeGraphHotelsBookingElement, IKnowledgeGraphHotelsBookingElement } from "./KnowledgeGraphHotelsBookingElement";
import { BaseSerpApiAiOverviewElementItem, IBaseSerpApiAiOverviewElementItem } from "./BaseSerpApiAiOverviewElementItem";
import { AiModeAiOverviewReferenceInfo, IAiModeAiOverviewReferenceInfo } from "./AiModeAiOverviewReferenceInfo";


export interface IBaseSerpApiKnowledgeGraphElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** search results page number indicates the number of the SERP page on which the element is located */
        page?: number | undefined
        
        /** the alignment of the element in SERP can take the following values: left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** rectangle parameters contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: AiModeRectangleInfo | undefined

    [key: string]: any;

    }

export class BaseSerpApiKnowledgeGraphElementItem  implements IBaseSerpApiKnowledgeGraphElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** search results page number indicates the number of the SERP page on which the element is located */

    page?: number | undefined;

    
    /** the alignment of the element in SERP can take the following values: left, right */

    position?: string | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    
    /** rectangle parameters contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: AiModeRectangleInfo | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiKnowledgeGraphElementItem) {

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
            this.page = data["page"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.rectangle = data["rectangle"] ? AiModeRectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseSerpApiKnowledgeGraphElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "knowledge_graph_carousel_item") {

            let result = new SerpApiKnowledgeGraphCarouselItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_description_item") {

            let result = new SerpApiKnowledgeGraphDescriptionItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_images_item") {

            let result = new SerpApiKnowledgeGraphImagesItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_list_item") {

            let result = new SerpApiKnowledgeGraphListItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_row_item") {

            let result = new SerpApiKnowledgeGraphRowItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_expanded_item") {

            let result = new SerpApiKnowledgeGraphExpandedItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_part_item") {

            let result = new SerpApiKnowledgeGraphPartItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_shopping_item") {

            let result = new SerpApiKnowledgeGraphShoppingItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_hotels_booking_item") {

            let result = new SerpApiKnowledgeGraphHotelsBookingItemElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_ai_overview_item") {

            let result = new SerpApiKnowledgeGraphAiOverviewItemElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiKnowledgeGraphElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["page"] = this.page;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["rectangle"] = this.rectangle ? AiModeRectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface ISerpApiKnowledgeGraphCarouselItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** google defined data attribute ID example: action:listen_artist */
        data_attrid?: string | undefined
        
        /** link of the element */
        link?: LinkElement | undefined
        
        /** elements of search results found in SERP */
        items?: KnowledgeGraphListElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphCarouselItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphCarouselItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** google defined data attribute ID example: action:listen_artist */

    data_attrid?: string | undefined;

    
    /** link of the element */

    link?: LinkElement | undefined;

    
    /** elements of search results found in SERP */

    items?: KnowledgeGraphListElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphCarouselItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
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

    static fromJS(data: any): SerpApiKnowledgeGraphCarouselItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphCarouselItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
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

 
export interface ISerpApiKnowledgeGraphDescriptionItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** text or description of the element in SERP */
        text?: string | undefined
        
        /** sitelinks the links shown below some of Google’s search results if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphDescriptionItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphDescriptionItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** text or description of the element in SERP */

    text?: string | undefined;

    
    /** sitelinks the links shown below some of Google’s search results if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphDescriptionItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiKnowledgeGraphDescriptionItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphDescriptionItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
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

 
export interface ISerpApiKnowledgeGraphImagesItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** link of the element */
        link?: LinkElement | undefined
        
        /** additional items present in the element if there are none, equals null */
        items?: KnowledgeGraphImagesElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphImagesItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphImagesItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** link of the element */

    link?: LinkElement | undefined;

    
    /** additional items present in the element if there are none, equals null */

    items?: KnowledgeGraphImagesElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphImagesItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphImagesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiKnowledgeGraphImagesItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphImagesItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
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

 
export interface ISerpApiKnowledgeGraphListItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the item */
        title?: string | undefined
        
        /** google defined data attribute ID example: ss:/webfacts:net_worth */
        data_attrid?: string | undefined
        
        /** link of the element */
        link?: LinkElement | undefined
        
        /** additional items present in the element if there are none, equals null */
        items?: KnowledgeGraphListElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphListItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphListItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of the item */

    title?: string | undefined;

    
    /** google defined data attribute ID example: ss:/webfacts:net_worth */

    data_attrid?: string | undefined;

    
    /** link of the element */

    link?: LinkElement | undefined;

    
    /** additional items present in the element if there are none, equals null */

    items?: KnowledgeGraphListElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphListItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
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

    static fromJS(data: any): SerpApiKnowledgeGraphListItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphListItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
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

 
export interface ISerpApiKnowledgeGraphRowItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the link */
        title?: string | undefined
        
        /** google defined data attribute ID example: kc:/common/topic:social media presence */
        data_attrid?: string | undefined
        
        /** reference text text snippet from the page that was used to generate the ai_overview_element */
        text?: string | undefined
        
        /** sitelinks the links shown below some of Google’s search results if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphRowItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphRowItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of the link */

    title?: string | undefined;

    
    /** google defined data attribute ID example: kc:/common/topic:social media presence */

    data_attrid?: string | undefined;

    
    /** reference text text snippet from the page that was used to generate the ai_overview_element */

    text?: string | undefined;

    
    /** sitelinks the links shown below some of Google’s search results if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphRowItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
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

    static fromJS(data: any): SerpApiKnowledgeGraphRowItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphRowItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
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

 
export interface ISerpApiKnowledgeGraphExpandedItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** google defined data attribute ID example: kc:/local:place qa */
        data_attrid?: string | undefined
        
        /** link of the element */
        expanded_element?: KnowledgeGraphExpandedElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphExpandedItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphExpandedItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** google defined data attribute ID example: kc:/local:place qa */

    data_attrid?: string | undefined;

    
    /** link of the element */

    expanded_element?: KnowledgeGraphExpandedElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphExpandedItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.data_attrid = data["data_attrid"];
            if (Array.isArray(data["expanded_element"])) {
                this.expanded_element = [];
                for (let item of data["expanded_element"]) {
                    this.expanded_element.push(KnowledgeGraphExpandedElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiKnowledgeGraphExpandedItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphExpandedItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["expanded_element"] = null;
        if (Array.isArray(this.expanded_element)) {
            data["expanded_element"] = [];
            for (let item of this.expanded_element) {
                if (item && typeof item.toJSON === "function") {
                    data["expanded_element"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiKnowledgeGraphPartItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the place */
        title?: string | undefined
        
        /** google defined data attribute ID example: kc:/local:place qa */
        data_attrid?: string | undefined
        
        /** reference text text snippet from the page that was used to generate the ai_overview_element */
        text?: string | undefined
        
        /** sitelinks the links shown below some of Google’s search results if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphPartItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphPartItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of the place */

    title?: string | undefined;

    
    /** google defined data attribute ID example: kc:/local:place qa */

    data_attrid?: string | undefined;

    
    /** reference text text snippet from the page that was used to generate the ai_overview_element */

    text?: string | undefined;

    
    /** sitelinks the links shown below some of Google’s search results if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphPartItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
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

    static fromJS(data: any): SerpApiKnowledgeGraphPartItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphPartItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
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

 
export interface ISerpApiKnowledgeGraphShoppingItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** google defined data attribute ID example: kc:/shopping/gpc:organic-offers */
        data_attrid?: string | undefined
        
        /** keywords relevant to the initial search query if there are none, equals null */
        items?: KnowledgeGraphShoppingElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphShoppingItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphShoppingItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of a given link element */

    title?: string | undefined;

    
    /** google defined data attribute ID example: kc:/shopping/gpc:organic-offers */

    data_attrid?: string | undefined;

    
    /** keywords relevant to the initial search query if there are none, equals null */

    items?: KnowledgeGraphShoppingElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphShoppingItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
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

    static fromJS(data: any): SerpApiKnowledgeGraphShoppingItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphShoppingItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
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

 
export interface ISerpApiKnowledgeGraphHotelsBookingItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** starting date of stay in the format “year-month-date” example: 2019-11-15 */
        date_from?: string | undefined
        
        /** ending date of stay in the format “year-month-date” example: 2019-11-17 */
        date_to?: string | undefined
        
        /** google defined data attribute ID example: kc:/local:hotel booking */
        data_attrid?: string | undefined
        
        /** popular keywords relevant to the initial search query if there are none, equals null */
        items?: KnowledgeGraphHotelsBookingElement[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphHotelsBookingItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphHotelsBookingItemElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of a given link element */

    title?: string | undefined;

    
    /** starting date of stay in the format “year-month-date” example: 2019-11-15 */

    date_from?: string | undefined;

    
    /** ending date of stay in the format “year-month-date” example: 2019-11-17 */

    date_to?: string | undefined;

    
    /** google defined data attribute ID example: kc:/local:hotel booking */

    data_attrid?: string | undefined;

    
    /** popular keywords relevant to the initial search query if there are none, equals null */

    items?: KnowledgeGraphHotelsBookingElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphHotelsBookingItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.data_attrid = data["data_attrid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphHotelsBookingElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiKnowledgeGraphHotelsBookingItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphHotelsBookingItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
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

 
export interface ISerpApiKnowledgeGraphAiOverviewItemElementItem  extends IBaseSerpApiKnowledgeGraphElementItem    {
        
        /** indicates whether the element is loaded asynchronously if true, the ai_overview element is loaded asynchronously; if false, the ai_overview element is loaded from cache; to obtain the content of ai_overview elements, use the load_async_ai_overview parameter in the POST request */
        asynchronous_ai_overview?: boolean | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: BaseSerpApiAiOverviewElementItem[] | undefined
        
        /** additional references relevant to the item includes references to webpages that may have been used to generate the ai_overview */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphAiOverviewItemElementItem  extends BaseSerpApiKnowledgeGraphElementItem   implements ISerpApiKnowledgeGraphAiOverviewItemElementItem {

    
    /** indicates whether the element is loaded asynchronously if true, the ai_overview element is loaded asynchronously; if false, the ai_overview element is loaded from cache; to obtain the content of ai_overview elements, use the load_async_ai_overview parameter in the POST request */

    asynchronous_ai_overview?: boolean | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: BaseSerpApiAiOverviewElementItem[] | undefined;

    
    /** additional references relevant to the item includes references to webpages that may have been used to generate the ai_overview */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphAiOverviewItemElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.asynchronous_ai_overview = data["asynchronous_ai_overview"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiAiOverviewElementItem.fromJS(item));
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

    static fromJS(data: any): SerpApiKnowledgeGraphAiOverviewItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphAiOverviewItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["asynchronous_ai_overview"] = this.asynchronous_ai_overview;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
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