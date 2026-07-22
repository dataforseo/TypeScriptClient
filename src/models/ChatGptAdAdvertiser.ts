export interface IChatGptAdAdvertiser   {
        
        /** name of the advertiser */
        name?: string | undefined
        
        /** source URL */
        url?: string | undefined
        
        /** URL of the advertiser's favicon image */
        favicon_url?: string | undefined

    [key: string]: any;

    }

export class ChatGptAdAdvertiser  implements IChatGptAdAdvertiser {

    
    /** name of the advertiser */

    name?: string | undefined;

    
    /** source URL */

    url?: string | undefined;

    
    /** URL of the advertiser's favicon image */

    favicon_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IChatGptAdAdvertiser) {

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
            this.name = data["name"];
            this.url = data["url"];
            this.favicon_url = data["favicon_url"];
        }
    }

    static fromJS(data: any): ChatGptAdAdvertiser {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptAdAdvertiser();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["url"] = this.url;
        data["favicon_url"] = this.favicon_url;
        return data;
    }
}