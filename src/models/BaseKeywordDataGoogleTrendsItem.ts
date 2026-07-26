import { TrendsGraphDataInfo, ITrendsGraphDataInfo } from "./TrendsGraphDataInfo";
import { TrendsMapDataInfo, ITrendsMapDataInfo } from "./TrendsMapDataInfo";
import { ListDataInfo, IListDataInfo } from "./ListDataInfo";


export interface IBaseKeywordDataGoogleTrendsItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element in Google Trends can take the following values: 1, 2, 3, 4, etc. */
        position?: number | undefined
        
        /** title of the element in Google Trends */
        title?: string | undefined
        
        /** relevant keywords the data included in the google_trends_graph element is based on the keywords listed in this array */
        keywords?: string[] | undefined

    [key: string]: any;

    }

export class BaseKeywordDataGoogleTrendsItem  implements IBaseKeywordDataGoogleTrendsItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** the alignment of the element in Google Trends can take the following values: 1, 2, 3, 4, etc. */

    position?: number | undefined;

    
    /** title of the element in Google Trends */

    title?: string | undefined;

    
    /** relevant keywords the data included in the google_trends_graph element is based on the keywords listed in this array */

    keywords?: string[] | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseKeywordDataGoogleTrendsItem) {

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
            this.title = data["title"];
            this.keywords = data["keywords"];
        }
    }

    static fromJS(data: any): BaseKeywordDataGoogleTrendsItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "google_trends_graph") {

            let result = new GoogleTrendsGoogleTrendsGraphElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_trends_map") {

            let result = new GoogleTrendsGoogleTrendsMapElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_trends_queries_list") {

            let result = new GoogleTrendsGoogleTrendsQueriesListElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_trends_topics_list") {

            let result = new GoogleTrendsGoogleTrendsTopicsListElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseKeywordDataGoogleTrendsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        data["title"] = this.title;
        data["keywords"] = this.keywords;
        return data;
    }
}

 
export interface IGoogleTrendsGoogleTrendsGraphElementItem  extends IBaseKeywordDataGoogleTrendsItem    {
        
        /** Google Trends data for the specified parameters */
        data?: TrendsGraphDataInfo[] | undefined
        
        averages?: number[] | undefined

    [key: string]: any;

    }

export class GoogleTrendsGoogleTrendsGraphElementItem  extends BaseKeywordDataGoogleTrendsItem   implements IGoogleTrendsGoogleTrendsGraphElementItem {

    
    /** Google Trends data for the specified parameters */

    data?: TrendsGraphDataInfo[] | undefined;

    averages?: number[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleTrendsGoogleTrendsGraphElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["data"])) {
                this.data = [];
                for (let item of data["data"]) {
                    this.data.push(TrendsGraphDataInfo.fromJS(item));
                }
            }
            this.averages = data["averages"];
        }
    }

    static fromJS(data: any): GoogleTrendsGoogleTrendsGraphElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleTrendsGoogleTrendsGraphElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["data"] = null;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data) {
                if (item && typeof item.toJSON === "function") {
                    data["data"].push(item?.toJSON());
                }
            }
        }
        data["averages"] = this.averages;
        return data;
    }
}

 
export interface IGoogleTrendsGoogleTrendsMapElementItem  extends IBaseKeywordDataGoogleTrendsItem    {
        
        /** Google Trends data from the corresponding item */
        data?: TrendsMapDataInfo[] | undefined

    [key: string]: any;

    }

export class GoogleTrendsGoogleTrendsMapElementItem  extends BaseKeywordDataGoogleTrendsItem   implements IGoogleTrendsGoogleTrendsMapElementItem {

    
    /** Google Trends data from the corresponding item */

    data?: TrendsMapDataInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleTrendsGoogleTrendsMapElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["data"])) {
                this.data = [];
                for (let item of data["data"]) {
                    this.data.push(TrendsMapDataInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleTrendsGoogleTrendsMapElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleTrendsGoogleTrendsMapElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["data"] = null;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data) {
                if (item && typeof item.toJSON === "function") {
                    data["data"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IGoogleTrendsGoogleTrendsQueriesListElementItem  extends IBaseKeywordDataGoogleTrendsItem    {
        
        /** Google Trends data from the corresponding item */
        data?: ListDataInfo | undefined

    [key: string]: any;

    }

export class GoogleTrendsGoogleTrendsQueriesListElementItem  extends BaseKeywordDataGoogleTrendsItem   implements IGoogleTrendsGoogleTrendsQueriesListElementItem {

    
    /** Google Trends data from the corresponding item */

    data?: ListDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IGoogleTrendsGoogleTrendsQueriesListElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.data = data["data"] ? ListDataInfo.fromJS(data["data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleTrendsGoogleTrendsQueriesListElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleTrendsGoogleTrendsQueriesListElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["data"] = this.data ? ListDataInfo.fromJS(this.data)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IGoogleTrendsGoogleTrendsTopicsListElementItem  extends IBaseKeywordDataGoogleTrendsItem    {
        
        /** Google Trends data from the corresponding item */
        data?: ListDataInfo | undefined

    [key: string]: any;

    }

export class GoogleTrendsGoogleTrendsTopicsListElementItem  extends BaseKeywordDataGoogleTrendsItem   implements IGoogleTrendsGoogleTrendsTopicsListElementItem {

    
    /** Google Trends data from the corresponding item */

    data?: ListDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IGoogleTrendsGoogleTrendsTopicsListElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.data = data["data"] ? ListDataInfo.fromJS(data["data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleTrendsGoogleTrendsTopicsListElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleTrendsGoogleTrendsTopicsListElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["data"] = this.data ? ListDataInfo.fromJS(this.data)?.toJSON() : <any>undefined;
        return data;
    }
}