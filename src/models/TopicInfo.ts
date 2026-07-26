import { SectionContentItemInfo, ISectionContentItemInfo } from "./SectionContentItemInfo";
import { TableContentInfo, ITableContentInfo } from "./TableContentInfo";


export interface ITopicInfo   {
        
        /** meta title */
        h_title?: string | undefined
        
        /** main title of the block */
        main_title?: string | undefined
        
        /** content author name */
        author?: string | undefined
        
        /** content language */
        language?: string | undefined
        
        /** HTML level */
        level?: number | undefined
        
        /** primary content on the page you can find more information about content priority calculation in this help center article */
        primary_content?: SectionContentItemInfo[] | undefined
        
        /** secondary content on the page you can find more information about content priority calculation in this help center article */
        secondary_content?: SectionContentItemInfo[] | undefined
        
        /** content of the table on the page */
        table_content?: TableContentInfo[] | undefined

    [key: string]: any;

    }

export class TopicInfo  implements ITopicInfo {

    
    /** meta title */

    h_title?: string | undefined;

    
    /** main title of the block */

    main_title?: string | undefined;

    
    /** content author name */

    author?: string | undefined;

    
    /** content language */

    language?: string | undefined;

    
    /** HTML level */

    level?: number | undefined;

    
    /** primary content on the page you can find more information about content priority calculation in this help center article */

    primary_content?: SectionContentItemInfo[] | undefined;

    
    /** secondary content on the page you can find more information about content priority calculation in this help center article */

    secondary_content?: SectionContentItemInfo[] | undefined;

    
    /** content of the table on the page */

    table_content?: TableContentInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ITopicInfo) {

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
            this.h_title = data["h_title"];
            this.main_title = data["main_title"];
            this.author = data["author"];
            this.language = data["language"];
            this.level = data["level"];
            if (Array.isArray(data["primary_content"])) {
                this.primary_content = [];
                for (let item of data["primary_content"]) {
                    this.primary_content.push(SectionContentItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["secondary_content"])) {
                this.secondary_content = [];
                for (let item of data["secondary_content"]) {
                    this.secondary_content.push(SectionContentItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["table_content"])) {
                this.table_content = [];
                for (let item of data["table_content"]) {
                    this.table_content.push(TableContentInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): TopicInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TopicInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["h_title"] = this.h_title;
        data["main_title"] = this.main_title;
        data["author"] = this.author;
        data["language"] = this.language;
        data["level"] = this.level;
        data["primary_content"] = null;
        if (Array.isArray(this.primary_content)) {
            data["primary_content"] = [];
            for (let item of this.primary_content) {
                if (item && typeof item.toJSON === "function") {
                    data["primary_content"].push(item?.toJSON());
                }
            }
        }
        data["secondary_content"] = null;
        if (Array.isArray(this.secondary_content)) {
            data["secondary_content"] = [];
            for (let item of this.secondary_content) {
                if (item && typeof item.toJSON === "function") {
                    data["secondary_content"].push(item?.toJSON());
                }
            }
        }
        data["table_content"] = null;
        if (Array.isArray(this.table_content)) {
            data["table_content"] = [];
            for (let item of this.table_content) {
                if (item && typeof item.toJSON === "function") {
                    data["table_content"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}