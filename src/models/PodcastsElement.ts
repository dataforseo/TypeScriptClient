export interface IPodcastsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** the total time it will take to play an episode */
        time_to_play?: string | undefined

    [key: string]: any;

    }

export class PodcastsElement  implements IPodcastsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** the total time it will take to play an episode */

    time_to_play?: string | undefined;

    [key: string]: any;


    constructor(data?: IPodcastsElement) {

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
            this.title = data["title"];
            this.url = data["url"];
            this.description = data["description"];
            this.timestamp = data["timestamp"];
            this.time_to_play = data["time_to_play"];
        }
    }

    static fromJS(data: any): PodcastsElement {
        data = typeof data === 'object' ? data : {};


        let result = new PodcastsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["description"] = this.description;
        data["timestamp"] = this.timestamp;
        data["time_to_play"] = this.time_to_play;
        return data;
    }
}