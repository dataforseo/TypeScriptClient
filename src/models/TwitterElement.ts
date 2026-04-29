export interface ITwitterElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** tweet message */
        tweet?: string | undefined
        
        /** the date when the page source of the element was published */
        date?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** URL */
        url?: string | undefined

    [key: string]: any;

    }

export class TwitterElement  implements ITwitterElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** tweet message */

    tweet?: string | undefined;
    
    /** the date when the page source of the element was published */

    date?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: ITwitterElement) {

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
            this.tweet = data["tweet"];
            this.date = data["date"];
            this.timestamp = data["timestamp"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): TwitterElement {
        data = typeof data === 'object' ? data : {};


        let result = new TwitterElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["tweet"] = this.tweet;
        data["date"] = this.date;
        data["timestamp"] = this.timestamp;
        data["url"] = this.url;
        return data;
    }
}