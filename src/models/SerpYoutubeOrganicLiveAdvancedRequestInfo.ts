export interface ISerpYoutubeOrganicLiveAdvancedRequestInfo   {

    [key: string]: any;

    }

export class SerpYoutubeOrganicLiveAdvancedRequestInfo  implements ISerpYoutubeOrganicLiveAdvancedRequestInfo {

    [key: string]: any;


    constructor(data?: ISerpYoutubeOrganicLiveAdvancedRequestInfo) {

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

    static fromJS(data: any): SerpYoutubeOrganicLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeOrganicLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        return data;
    }
}