export interface ISerpYoutubeVideoInfoTaskPostRequestInfo   {

    [key: string]: any;

    }

export class SerpYoutubeVideoInfoTaskPostRequestInfo  implements ISerpYoutubeVideoInfoTaskPostRequestInfo {

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoInfoTaskPostRequestInfo) {

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

    static fromJS(data: any): SerpYoutubeVideoInfoTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoInfoTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        return data;
    }
}