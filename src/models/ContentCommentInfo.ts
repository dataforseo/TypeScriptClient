import { ContentRatingInfo, IContentRatingInfo } from "./ContentRatingInfo";
import { SectionContentItemInfo, ISectionContentItemInfo } from "./SectionContentItemInfo";


export interface IContentCommentInfo   {
        
        /** product’s rating contains information about the rating a customer has given to the product */
        rating?: ContentRatingInfo | undefined
        
        /** title of the customer’s comment */
        title?: string | undefined
        
        /** date when the comment was published */
        publish_date?: string | undefined
        
        /** author of the comment */
        author?: string | undefined
        
        /**  */
        have_form?: boolean | undefined
        
        /** primary content on the page you can find more information about content priority calculation in this help center article */
        primary_content?: SectionContentItemInfo[] | undefined

    [key: string]: any;

    }

export class ContentCommentInfo  implements IContentCommentInfo {

    
    /** product’s rating contains information about the rating a customer has given to the product */

    rating?: ContentRatingInfo | undefined;

    
    /** title of the customer’s comment */

    title?: string | undefined;

    
    /** date when the comment was published */

    publish_date?: string | undefined;

    
    /** author of the comment */

    author?: string | undefined;

    
    /**  */

    have_form?: boolean | undefined;

    
    /** primary content on the page you can find more information about content priority calculation in this help center article */

    primary_content?: SectionContentItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IContentCommentInfo) {

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
            this.rating = data["rating"] ? ContentRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.title = data["title"];
            this.publish_date = data["publish_date"];
            this.author = data["author"];
            this.have_form = data["have_form"];
            if (Array.isArray(data["primary_content"])) {
                this.primary_content = [];
                for (let item of data["primary_content"]) {
                    this.primary_content.push(SectionContentItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentCommentInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentCommentInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["rating"] = this.rating ? ContentRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["title"] = this.title;
        data["publish_date"] = this.publish_date;
        data["author"] = this.author;
        data["have_form"] = this.have_form;
        data["primary_content"] = null;
        if (Array.isArray(this.primary_content)) {
            data["primary_content"] = [];
            for (let item of this.primary_content) {
                if (item && typeof item.toJSON === "function") {
                    data["primary_content"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}