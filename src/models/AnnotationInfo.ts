export interface IAnnotationInfo   {
        
        /** the domain name or title of the quoted source */
        title?: string | undefined
        
        /** URL of the quoted source */
        url?: string | undefined

    [key: string]: any;

    }

export class AnnotationInfo  implements IAnnotationInfo {

    
    /** the domain name or title of the quoted source */

    title?: string | undefined;

    
    /** URL of the quoted source */

    url?: string | undefined;

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
        return data;
    }
}