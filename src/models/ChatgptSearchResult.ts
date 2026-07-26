export interface IChatgptSearchResult   {
        
        /** type of element */
        type?: string | undefined
        
        /** *result URL* */
        url?: string | undefined
        
        /** *result domain* */
        domain?: string | undefined
        
        /** *result title* */
        title?: string | undefined
        
        /** *result description* */
        description?: string | undefined
        
        /** *breadcrumb* */
        breadcrumb?: string | undefined

    [key: string]: any;

    }

export class ChatgptSearchResult  implements IChatgptSearchResult {

    
    /** type of element */

    type?: string | undefined;

    
    /** *result URL* */

    url?: string | undefined;

    
    /** *result domain* */

    domain?: string | undefined;

    
    /** *result title* */

    title?: string | undefined;

    
    /** *result description* */

    description?: string | undefined;

    
    /** *breadcrumb* */

    breadcrumb?: string | undefined;

    [key: string]: any;


    constructor(data?: IChatgptSearchResult) {

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
            this.url = data["url"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            this.breadcrumb = data["breadcrumb"];
        }
    }

    static fromJS(data: any): ChatgptSearchResult {
        data = typeof data === 'object' ? data : {};


        let result = new ChatgptSearchResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["breadcrumb"] = this.breadcrumb;
        return data;
    }
}