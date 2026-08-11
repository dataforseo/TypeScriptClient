export interface ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo   {

    [key: string]: any;

    }

export class SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo  implements ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo {

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo) {

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

    static fromJS(data: any): SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        return data;
    }
}