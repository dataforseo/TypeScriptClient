export interface ISource   {
        
        /** *name of the source where the review was posted* */
        title?: string | undefined
        
        /** *featured image of the source* */
        image?: string | undefined
        
        /** *domain of the source where the review was posted* */
        domain?: string | undefined

    [key: string]: any;

    }

export class Source  implements ISource {

    
    /** *name of the source where the review was posted* */

    title?: string | undefined;

    
    /** *featured image of the source* */

    image?: string | undefined;

    
    /** *domain of the source where the review was posted* */

    domain?: string | undefined;

    [key: string]: any;


    constructor(data?: ISource) {

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
            this.image = data["image"];
            this.domain = data["domain"];
        }
    }

    static fromJS(data: any): Source {
        data = typeof data === 'object' ? data : {};


        let result = new Source();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["image"] = this.image;
        data["domain"] = this.domain;
        return data;
    }
}