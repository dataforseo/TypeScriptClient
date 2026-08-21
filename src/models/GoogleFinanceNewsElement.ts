import { BaseSerpApiGoogleFinanceElementItem, IBaseSerpApiGoogleFinanceElementItem } from "./BaseSerpApiGoogleFinanceElementItem";


export interface IGoogleFinanceNewsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *title of the news article* */
        title?: string | undefined
        
        /** *URL to the page of the market index on Google Finance* */
        url?: string | undefined
        
        /** *name of the news source* name of the website where the news article is published */
        source?: string | undefined
        
        /** *featured image URL* URL of the news article's featured image */
        image_url?: string | undefined
        
        /** *date and time of the value readout* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2025-02-10 09:40:00 +00:00` */
        timestamp?: string | undefined
        
        /** *market indexes quoted in the news article* information about market indexes quoted in the `google_finance_news_element` */
        quotes?: BaseSerpApiGoogleFinanceElementItem[] | undefined

    [key: string]: any;

    }

export class GoogleFinanceNewsElement  implements IGoogleFinanceNewsElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *title of the news article* */

    title?: string | undefined;

    
    /** *URL to the page of the market index on Google Finance* */

    url?: string | undefined;

    
    /** *name of the news source* name of the website where the news article is published */

    source?: string | undefined;

    
    /** *featured image URL* URL of the news article's featured image */

    image_url?: string | undefined;

    
    /** *date and time of the value readout* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2025-02-10 09:40:00 +00:00` */

    timestamp?: string | undefined;

    
    /** *market indexes quoted in the news article* information about market indexes quoted in the `google_finance_news_element` */

    quotes?: BaseSerpApiGoogleFinanceElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceNewsElement) {

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
            this.type = data["type"];
            this.title = data["title"];
            this.url = data["url"];
            this.source = data["source"];
            this.image_url = data["image_url"];
            this.timestamp = data["timestamp"];
            if (Array.isArray(data["quotes"])) {
                this.quotes = [];
                for (let item of data["quotes"]) {
                    this.quotes.push(BaseSerpApiGoogleFinanceElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleFinanceNewsElement {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceNewsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["source"] = this.source;
        data["image_url"] = this.image_url;
        data["timestamp"] = this.timestamp;
        data["quotes"] = null;
        if (Array.isArray(this.quotes)) {
            data["quotes"] = [];
            for (let item of this.quotes) {
                if (item && typeof item.toJSON === "function") {
                    data["quotes"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}