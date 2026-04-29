import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";


export interface IFoundOnWebElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** subtitle of the element */
        subtitle?: string | undefined
        
        /** image of the element */
        image?: AiModeImagesElementInfo | undefined

    [key: string]: any;

    }

export class FoundOnWebElement  implements IFoundOnWebElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** subtitle of the element */

    subtitle?: string | undefined;
    
    /** image of the element */

    image?: AiModeImagesElementInfo | undefined;

    [key: string]: any;


    constructor(data?: IFoundOnWebElement) {

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
            this.subtitle = data["subtitle"];
            this.image = data["image"] ? AiModeImagesElementInfo.fromJS(data["image"]) : <any>undefined;
        }
    }

    static fromJS(data: any): FoundOnWebElement {
        data = typeof data === 'object' ? data : {};


        let result = new FoundOnWebElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["subtitle"] = this.subtitle;
        data["image"] = this.image ? AiModeImagesElementInfo.fromJS(this.image)?.toJSON() : <any>undefined;
        return data;
    }
}