export interface IScreenshotItem   {
        
        /** screenshot of the requested page URL of the page screenshot on the DataForSEO storage note: the page screenshot saved on the DataForSEO storage only remains accessible for one day after making the request */
        image?: string | undefined

    [key: string]: any;

    }

export class ScreenshotItem  implements IScreenshotItem {

    
    /** screenshot of the requested page URL of the page screenshot on the DataForSEO storage note: the page screenshot saved on the DataForSEO storage only remains accessible for one day after making the request */

    image?: string | undefined;

    [key: string]: any;


    constructor(data?: IScreenshotItem) {

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
            this.image = data["image"];
        }
    }

    static fromJS(data: any): ScreenshotItem {
        data = typeof data === 'object' ? data : {};


        let result = new ScreenshotItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["image"] = this.image;
        return data;
    }
}