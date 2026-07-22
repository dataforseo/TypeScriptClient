import { PageSectionContentInfo, IPageSectionContentInfo } from "./PageSectionContentInfo";
import { TopicInfo, ITopicInfo } from "./TopicInfo";
import { ContentRatingInfo, IContentRatingInfo } from "./ContentRatingInfo";
import { ContentOfferInfo, IContentOfferInfo } from "./ContentOfferInfo";
import { ContentCommentInfo, IContentCommentInfo } from "./ContentCommentInfo";
import { Contacts, IContacts } from "./Contacts";


export interface IPageContentInfo   {
        
        /** parsed content of the header */
        header?: PageSectionContentInfo | undefined
        
        /** content of the footer of the table */
        footer?: PageSectionContentInfo | undefined
        
        /** main topic on the page
you can find more information about topic priority calculation in this help center article */
        main_topic?: TopicInfo[] | undefined
        
        /** secondary topic on the page
you can find more information about topic priority calculation in this help center article */
        secondary_topic?: TopicInfo[] | undefined
        
        /** contains objects with rating information for the products displayed on the page */
        ratings?: ContentRatingInfo[] | undefined
        
        /** array of products displayed on the page
contains objects with information on products displayed on the page */
        offers?: ContentOfferInfo[] | undefined
        
        /** array of comments displayed on the page
contains objects with information on comments related to displayed products */
        comments?: ContentCommentInfo[] | undefined
        
        /** contact information
contains contact information displayed on the page */
        contacts?: Contacts | undefined

    [key: string]: any;

    }

export class PageContentInfo  implements IPageContentInfo {

    
    /** parsed content of the header */

    header?: PageSectionContentInfo | undefined;

    
    /** content of the footer of the table */

    footer?: PageSectionContentInfo | undefined;

    
    /** main topic on the page
you can find more information about topic priority calculation in this help center article */

    main_topic?: TopicInfo[] | undefined;

    
    /** secondary topic on the page
you can find more information about topic priority calculation in this help center article */

    secondary_topic?: TopicInfo[] | undefined;

    
    /** contains objects with rating information for the products displayed on the page */

    ratings?: ContentRatingInfo[] | undefined;

    
    /** array of products displayed on the page
contains objects with information on products displayed on the page */

    offers?: ContentOfferInfo[] | undefined;

    
    /** array of comments displayed on the page
contains objects with information on comments related to displayed products */

    comments?: ContentCommentInfo[] | undefined;

    
    /** contact information
contains contact information displayed on the page */

    contacts?: Contacts | undefined;

    [key: string]: any;


    constructor(data?: IPageContentInfo) {

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
            this.header = data["header"] ? PageSectionContentInfo.fromJS(data["header"]) : <any>undefined;
            this.footer = data["footer"] ? PageSectionContentInfo.fromJS(data["footer"]) : <any>undefined;
            if (Array.isArray(data["main_topic"])) {
                this.main_topic = [];
                for (let item of data["main_topic"]) {
                    this.main_topic.push(TopicInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["secondary_topic"])) {
                this.secondary_topic = [];
                for (let item of data["secondary_topic"]) {
                    this.secondary_topic.push(TopicInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["ratings"])) {
                this.ratings = [];
                for (let item of data["ratings"]) {
                    this.ratings.push(ContentRatingInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["offers"])) {
                this.offers = [];
                for (let item of data["offers"]) {
                    this.offers.push(ContentOfferInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["comments"])) {
                this.comments = [];
                for (let item of data["comments"]) {
                    this.comments.push(ContentCommentInfo.fromJS(item));
                }
            }
            this.contacts = data["contacts"] ? Contacts.fromJS(data["contacts"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PageContentInfo {
        data = typeof data === 'object' ? data : {};


        let result = new PageContentInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["header"] = this.header ? PageSectionContentInfo.fromJS(this.header)?.toJSON() : <any>undefined;
        data["footer"] = this.footer ? PageSectionContentInfo.fromJS(this.footer)?.toJSON() : <any>undefined;
        data["main_topic"] = null;
        if (Array.isArray(this.main_topic)) {
            data["main_topic"] = [];
            for (let item of this.main_topic) {
                if (item && typeof item.toJSON === "function") {
                    data["main_topic"].push(item?.toJSON());
                }
            }
        }
        data["secondary_topic"] = null;
        if (Array.isArray(this.secondary_topic)) {
            data["secondary_topic"] = [];
            for (let item of this.secondary_topic) {
                if (item && typeof item.toJSON === "function") {
                    data["secondary_topic"].push(item?.toJSON());
                }
            }
        }
        data["ratings"] = null;
        if (Array.isArray(this.ratings)) {
            data["ratings"] = [];
            for (let item of this.ratings) {
                if (item && typeof item.toJSON === "function") {
                    data["ratings"].push(item?.toJSON());
                }
            }
        }
        data["offers"] = null;
        if (Array.isArray(this.offers)) {
            data["offers"] = [];
            for (let item of this.offers) {
                if (item && typeof item.toJSON === "function") {
                    data["offers"].push(item?.toJSON());
                }
            }
        }
        data["comments"] = null;
        if (Array.isArray(this.comments)) {
            data["comments"] = [];
            for (let item of this.comments) {
                if (item && typeof item.toJSON === "function") {
                    data["comments"].push(item?.toJSON());
                }
            }
        }
        data["contacts"] = this.contacts ? Contacts.fromJS(this.contacts)?.toJSON() : <any>undefined;
        return data;
    }
}