export interface ISerpYoutubeVideoCommentsTaskPostRequestInfo   {

    [key: string]: any;

    }

export class SerpYoutubeVideoCommentsTaskPostRequestInfo  implements ISerpYoutubeVideoCommentsTaskPostRequestInfo {

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoCommentsTaskPostRequestInfo) {

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
        }
    }

    static fromJS(data: any): SerpYoutubeVideoCommentsTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoCommentsTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        return data;
    }
}