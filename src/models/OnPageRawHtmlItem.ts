export interface IOnPageRawHtmlItem   {
        
        /** HTML page */
        html?: string | undefined

    [key: string]: any;

    }

export class OnPageRawHtmlItem  implements IOnPageRawHtmlItem {

    
    /** HTML page */

    html?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageRawHtmlItem) {

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
            this.html = data["html"];
        }
    }

    static fromJS(data: any): OnPageRawHtmlItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRawHtmlItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["html"] = this.html;
        return data;
    }
}