export interface ITechnologyCategoryInfo   {
        
        /** id of the technology category
example:
crm, cart_abandonment */
        id?: string | undefined
        
        /** path to the technology category
example:
user_generated_content.content_curation */
        path?: string | undefined
        
        /** title of the technology category */
        title?: string | undefined
        
        /** list of technologies in this category
example:
'Salesforce', 'CareCart' */
        technologies?: string[] | undefined

    [key: string]: any;

    }

export class TechnologyCategoryInfo  implements ITechnologyCategoryInfo {

    
    /** id of the technology category
example:
crm, cart_abandonment */

    id?: string | undefined;

    
    /** path to the technology category
example:
user_generated_content.content_curation */

    path?: string | undefined;

    
    /** title of the technology category */

    title?: string | undefined;

    
    /** list of technologies in this category
example:
'Salesforce', 'CareCart' */

    technologies?: string[] | undefined;

    [key: string]: any;


    constructor(data?: ITechnologyCategoryInfo) {

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
            this.id = data["id"];
            this.path = data["path"];
            this.title = data["title"];
            this.technologies = data["technologies"];
        }
    }

    static fromJS(data: any): TechnologyCategoryInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TechnologyCategoryInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["path"] = this.path;
        data["title"] = this.title;
        data["technologies"] = this.technologies;
        return data;
    }
}