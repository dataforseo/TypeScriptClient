export interface IChatGptBrandEntity   {
        
        /** type of element */
        type?: string | undefined
        
        /** name of the brand */
        title?: string | undefined
        
        /** category of the brand */
        category?: string | undefined
        
        /** brand name in markdown formatcontains brand name formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** array of URLs and domains relevant to the brand */
        urls?: any | undefined

    [key: string]: any;

    }

export class ChatGptBrandEntity  implements IChatGptBrandEntity {

    
    /** type of element */

    type?: string | undefined;

    
    /** name of the brand */

    title?: string | undefined;

    
    /** category of the brand */

    category?: string | undefined;

    
    /** brand name in markdown formatcontains brand name formatted in the markdown markup language */

    markdown?: string | undefined;

    
    /** array of URLs and domains relevant to the brand */

    urls?: any | undefined;

    [key: string]: any;


    constructor(data?: IChatGptBrandEntity) {

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
            this.category = data["category"];
            this.markdown = data["markdown"];
            this.urls = data["urls"];
        }
    }

    static fromJS(data: any): ChatGptBrandEntity {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptBrandEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["category"] = this.category;
        data["markdown"] = this.markdown;
        data["urls"] = this.urls;
        return data;
    }
}