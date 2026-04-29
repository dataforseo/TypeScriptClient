export interface IVideoElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** URL to the video source */
        source?: string | undefined
        
        /** URL to the video preview image */
        preview?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** URL */
        url?: string | undefined

    [key: string]: any;

    }

export class VideoElement  implements IVideoElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** URL to the video source */

    source?: string | undefined;
    
    /** URL to the video preview image */

    preview?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IVideoElement) {

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
            this.source = data["source"];
            this.preview = data["preview"];
            this.title = data["title"];
            this.timestamp = data["timestamp"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): VideoElement {
        data = typeof data === 'object' ? data : {};


        let result = new VideoElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["source"] = this.source;
        data["preview"] = this.preview;
        data["title"] = this.title;
        data["timestamp"] = this.timestamp;
        data["url"] = this.url;
        return data;
    }
}