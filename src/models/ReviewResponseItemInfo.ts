export interface IReviewResponseItemInfo   {
        
        /** the title of response */
        title?: string | undefined
        
        /** the content of response */
        text?: string | undefined
        
        /** the time of publication */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class ReviewResponseItemInfo  implements IReviewResponseItemInfo {

    
    /** the title of response */

    title?: string | undefined;

    
    /** the content of response */

    text?: string | undefined;

    
    /** the time of publication */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IReviewResponseItemInfo) {

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
            this.title = data["title"];
            this.text = data["text"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): ReviewResponseItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ReviewResponseItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["text"] = this.text;
        data["timestamp"] = this.timestamp;
        return data;
    }
}