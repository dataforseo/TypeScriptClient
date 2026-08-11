import { SerpApiCarouselElement, ISerpApiCarouselElement } from "./SerpApiCarouselElement";


export interface IMultiCarouselElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *title of a given link element* */
        title?: string | undefined
        
        /** *`multi_carousel_snippet` results* if there are none, equals `null` */
        multi_carousel_snippets?: SerpApiCarouselElement[] | undefined

    [key: string]: any;

    }

export class MultiCarouselElement  implements IMultiCarouselElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *title of a given link element* */

    title?: string | undefined;

    
    /** *`multi_carousel_snippet` results* if there are none, equals `null` */

    multi_carousel_snippets?: SerpApiCarouselElement[] | undefined;

    [key: string]: any;


    constructor(data?: IMultiCarouselElement) {

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
            if (Array.isArray(data["multi_carousel_snippets"])) {
                this.multi_carousel_snippets = [];
                for (let item of data["multi_carousel_snippets"]) {
                    this.multi_carousel_snippets.push(SerpApiCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MultiCarouselElement {
        data = typeof data === 'object' ? data : {};


        let result = new MultiCarouselElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["multi_carousel_snippets"] = null;
        if (Array.isArray(this.multi_carousel_snippets)) {
            data["multi_carousel_snippets"] = [];
            for (let item of this.multi_carousel_snippets) {
                if (item && typeof item.toJSON === "function") {
                    data["multi_carousel_snippets"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}