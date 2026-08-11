export interface ISerpYoutubeVideoSubtitlesTaskPostRequestInfo   {

    [key: string]: any;

    }

export class SerpYoutubeVideoSubtitlesTaskPostRequestInfo  implements ISerpYoutubeVideoSubtitlesTaskPostRequestInfo {

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoSubtitlesTaskPostRequestInfo) {

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

    static fromJS(data: any): SerpYoutubeVideoSubtitlesTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoSubtitlesTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        return data;
    }
}