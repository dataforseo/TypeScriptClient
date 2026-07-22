export interface IDataforseoLabsCarouselElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** subtitle of the item */
        sub_title?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsCarouselElement  implements IDataforseoLabsCarouselElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** subtitle of the item */

    sub_title?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsCarouselElement) {

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
            this.sub_title = data["sub_title"];
        }
    }

    static fromJS(data: any): DataforseoLabsCarouselElement {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsCarouselElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["sub_title"] = this.sub_title;
        return data;
    }
}