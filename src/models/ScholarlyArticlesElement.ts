export interface IScholarlyArticlesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** author */
        author?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined

    [key: string]: any;

    }

export class ScholarlyArticlesElement  implements IScholarlyArticlesElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** author */

    author?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;

    [key: string]: any;


    constructor(data?: IScholarlyArticlesElement) {

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
            this.author = data["author"];
            this.description = data["description"];
        }
    }

    static fromJS(data: any): ScholarlyArticlesElement {
        data = typeof data === 'object' ? data : {};


        let result = new ScholarlyArticlesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["author"] = this.author;
        data["description"] = this.description;
        return data;
    }
}