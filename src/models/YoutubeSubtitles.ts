export interface IYoutubeSubtitles   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP for the target domain absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** text translated in subtitles */
        text?: string | undefined
        
        /** the second subtitled text starts */
        start_time?: number | undefined
        
        /** the second subtitled text ends */
        end_time?: number | undefined
        
        /** duration of subtitles in seconds */
        duration_time?: number | undefined

    [key: string]: any;

    }

export class YoutubeSubtitles  implements IYoutubeSubtitles {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP for the target domain absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** text translated in subtitles */

    text?: string | undefined;

    
    /** the second subtitled text starts */

    start_time?: number | undefined;

    
    /** the second subtitled text ends */

    end_time?: number | undefined;

    
    /** duration of subtitles in seconds */

    duration_time?: number | undefined;

    [key: string]: any;


    constructor(data?: IYoutubeSubtitles) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.text = data["text"];
            this.start_time = data["start_time"];
            this.end_time = data["end_time"];
            this.duration_time = data["duration_time"];
        }
    }

    static fromJS(data: any): YoutubeSubtitles {
        data = typeof data === 'object' ? data : {};


        let result = new YoutubeSubtitles();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["text"] = this.text;
        data["start_time"] = this.start_time;
        data["end_time"] = this.end_time;
        data["duration_time"] = this.duration_time;
        return data;
    }
}