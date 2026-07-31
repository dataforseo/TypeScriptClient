export interface IAnnotationInfo   {
        
        /** *the domain name or title of the quoted source* */
        title?: string | undefined
        
        /** *URL of the quoted source* */
        url?: string | undefined
        
        /** *start of the annotation indexing* */
        start_index?: number | undefined
        
        /** *end of the annotation indexing* */
        end_index?: number | undefined
        
        /** *text of the reasoning chain section* text of the reasoning chain  section summarizing the model's thought process */
        text?: string | undefined

    [key: string]: any;

    }

export class AnnotationInfo  implements IAnnotationInfo {

    
    /** *the domain name or title of the quoted source* */

    title?: string | undefined;

    
    /** *URL of the quoted source* */

    url?: string | undefined;

    
    /** *start of the annotation indexing* */

    start_index?: number | undefined;

    
    /** *end of the annotation indexing* */

    end_index?: number | undefined;

    
    /** *text of the reasoning chain section* text of the reasoning chain  section summarizing the model's thought process */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IAnnotationInfo) {

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
            this.url = data["url"];
            this.start_index = data["start_index"];
            this.end_index = data["end_index"];
            this.text = data["text"];
        }
    }

    static fromJS(data: any): AnnotationInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AnnotationInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["start_index"] = this.start_index;
        data["end_index"] = this.end_index;
        data["text"] = this.text;
        return data;
    }
}