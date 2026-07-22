export interface IResponseDataInfo   {
        
        /** author of the response */
        author?: string | undefined
        
        /** title of the response
in this case, will equal null */
        title?: string | undefined
        
        /** content of the response */
        text?: string | undefined
        
        /** date and time when the response was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class ResponseDataInfo  implements IResponseDataInfo {

    
    /** author of the response */

    author?: string | undefined;

    
    /** title of the response
in this case, will equal null */

    title?: string | undefined;

    
    /** content of the response */

    text?: string | undefined;

    
    /** date and time when the response was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IResponseDataInfo) {

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
            this.author = data["author"];
            this.title = data["title"];
            this.text = data["text"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): ResponseDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ResponseDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["author"] = this.author;
        data["title"] = this.title;
        data["text"] = this.text;
        data["timestamp"] = this.timestamp;
        return data;
    }
}