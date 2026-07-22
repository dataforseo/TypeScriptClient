export interface IPreviewVideos   {
        
        /** ID of the video */
        video_id?: string | undefined
        
        /** title of the video */
        title?: string | undefined
        
        /** URL of the video */
        url?: string | undefined
        
        /** duration of the video */
        duration_time?: string | undefined
        
        /** duration of the video in seconds */
        duration_time_seconds?: number | undefined

    [key: string]: any;

    }

export class PreviewVideos  implements IPreviewVideos {

    
    /** ID of the video */

    video_id?: string | undefined;

    
    /** title of the video */

    title?: string | undefined;

    
    /** URL of the video */

    url?: string | undefined;

    
    /** duration of the video */

    duration_time?: string | undefined;

    
    /** duration of the video in seconds */

    duration_time_seconds?: number | undefined;

    [key: string]: any;


    constructor(data?: IPreviewVideos) {

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
            this.video_id = data["video_id"];
            this.title = data["title"];
            this.url = data["url"];
            this.duration_time = data["duration_time"];
            this.duration_time_seconds = data["duration_time_seconds"];
        }
    }

    static fromJS(data: any): PreviewVideos {
        data = typeof data === 'object' ? data : {};


        let result = new PreviewVideos();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["video_id"] = this.video_id;
        data["title"] = this.title;
        data["url"] = this.url;
        data["duration_time"] = this.duration_time;
        data["duration_time_seconds"] = this.duration_time_seconds;
        return data;
    }
}