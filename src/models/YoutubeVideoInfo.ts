import { ChannelSubscribersCount, IChannelSubscribersCount } from "./ChannelSubscribersCount";
import { Subtitles, ISubtitles } from "./Subtitles";
import { StreamingQualityElement, IStreamingQualityElement } from "./StreamingQualityElement";


export interface IYoutubeVideoInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP for the target domain absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** ID of the video received in a POST array */
        video_id?: string | undefined
        
        /** title of the video */
        title?: string | undefined
        
        /** URL of the video */
        url?: string | undefined
        
        /** the URL of the page where the thumbnail is hosted */
        thumbnail_url?: string | undefined
        
        /** the ID of the channel where the video is published */
        channel_id?: string | undefined
        
        /** the name of the channel where the video is published */
        channel_name?: string | undefined
        
        /** the URL of the channel where the video is published */
        channel_url?: string | undefined
        
        /** the URL of the page where the logo image of the channel is hosted */
        channel_logo?: string | undefined
        
        /** description of the video */
        description?: string | undefined
        
        /** number of views of the video */
        views_count?: number | undefined
        
        /** number of likes on the video */
        likes_count?: number | undefined
        
        /** number of comments on the video */
        comments_count?: number | undefined
        
        /** number of subscribers of the channel */
        channel_subscribers_count?: ChannelSubscribersCount | undefined
        
        /** the date when the video is published */
        publication_date?: string | undefined
        
        /** date and time when the result is published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2022-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** keywords relevant to the video */
        keywords?: string[] | undefined
        
        /** the category the video belongs to */
        category?: string | undefined
        
        /** indicates whether the video is on live */
        is_live?: boolean | undefined
        
        /** indicates whether the video is embeddable */
        is_embeddable?: boolean | undefined
        
        /** duration of the video */
        duration_time?: string | undefined
        
        /** duration of the video in seconds */
        duration_time_seconds?: number | undefined
        
        /** array of elements describing properties of subtitles in the video */
        subtitles?: Subtitles[] | undefined
        
        /** array of elements that contain information about all possible streaming qualities of the video */
        streaming_quality?: StreamingQualityElement[] | undefined

    [key: string]: any;

    }

export class YoutubeVideoInfo  implements IYoutubeVideoInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP for the target domain absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** ID of the video received in a POST array */

    video_id?: string | undefined;

    
    /** title of the video */

    title?: string | undefined;

    
    /** URL of the video */

    url?: string | undefined;

    
    /** the URL of the page where the thumbnail is hosted */

    thumbnail_url?: string | undefined;

    
    /** the ID of the channel where the video is published */

    channel_id?: string | undefined;

    
    /** the name of the channel where the video is published */

    channel_name?: string | undefined;

    
    /** the URL of the channel where the video is published */

    channel_url?: string | undefined;

    
    /** the URL of the page where the logo image of the channel is hosted */

    channel_logo?: string | undefined;

    
    /** description of the video */

    description?: string | undefined;

    
    /** number of views of the video */

    views_count?: number | undefined;

    
    /** number of likes on the video */

    likes_count?: number | undefined;

    
    /** number of comments on the video */

    comments_count?: number | undefined;

    
    /** number of subscribers of the channel */

    channel_subscribers_count?: ChannelSubscribersCount | undefined;

    
    /** the date when the video is published */

    publication_date?: string | undefined;

    
    /** date and time when the result is published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2022-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    
    /** keywords relevant to the video */

    keywords?: string[] | undefined;

    
    /** the category the video belongs to */

    category?: string | undefined;

    
    /** indicates whether the video is on live */

    is_live?: boolean | undefined;

    
    /** indicates whether the video is embeddable */

    is_embeddable?: boolean | undefined;

    
    /** duration of the video */

    duration_time?: string | undefined;

    
    /** duration of the video in seconds */

    duration_time_seconds?: number | undefined;

    
    /** array of elements describing properties of subtitles in the video */

    subtitles?: Subtitles[] | undefined;

    
    /** array of elements that contain information about all possible streaming qualities of the video */

    streaming_quality?: StreamingQualityElement[] | undefined;

    [key: string]: any;


    constructor(data?: IYoutubeVideoInfo) {

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
            this.video_id = data["video_id"];
            this.title = data["title"];
            this.url = data["url"];
            this.thumbnail_url = data["thumbnail_url"];
            this.channel_id = data["channel_id"];
            this.channel_name = data["channel_name"];
            this.channel_url = data["channel_url"];
            this.channel_logo = data["channel_logo"];
            this.description = data["description"];
            this.views_count = data["views_count"];
            this.likes_count = data["likes_count"];
            this.comments_count = data["comments_count"];
            this.channel_subscribers_count = data["channel_subscribers_count"] ? ChannelSubscribersCount.fromJS(data["channel_subscribers_count"]) : <any>undefined;
            this.publication_date = data["publication_date"];
            this.timestamp = data["timestamp"];
            this.keywords = data["keywords"];
            this.category = data["category"];
            this.is_live = data["is_live"];
            this.is_embeddable = data["is_embeddable"];
            this.duration_time = data["duration_time"];
            this.duration_time_seconds = data["duration_time_seconds"];
            if (Array.isArray(data["subtitles"])) {
                this.subtitles = [];
                for (let item of data["subtitles"]) {
                    this.subtitles.push(Subtitles.fromJS(item));
                }
            }
            if (Array.isArray(data["streaming_quality"])) {
                this.streaming_quality = [];
                for (let item of data["streaming_quality"]) {
                    this.streaming_quality.push(StreamingQualityElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): YoutubeVideoInfo {
        data = typeof data === 'object' ? data : {};


        let result = new YoutubeVideoInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["video_id"] = this.video_id;
        data["title"] = this.title;
        data["url"] = this.url;
        data["thumbnail_url"] = this.thumbnail_url;
        data["channel_id"] = this.channel_id;
        data["channel_name"] = this.channel_name;
        data["channel_url"] = this.channel_url;
        data["channel_logo"] = this.channel_logo;
        data["description"] = this.description;
        data["views_count"] = this.views_count;
        data["likes_count"] = this.likes_count;
        data["comments_count"] = this.comments_count;
        data["channel_subscribers_count"] = this.channel_subscribers_count ? ChannelSubscribersCount.fromJS(this.channel_subscribers_count)?.toJSON() : <any>undefined;
        data["publication_date"] = this.publication_date;
        data["timestamp"] = this.timestamp;
        data["keywords"] = this.keywords;
        data["category"] = this.category;
        data["is_live"] = this.is_live;
        data["is_embeddable"] = this.is_embeddable;
        data["duration_time"] = this.duration_time;
        data["duration_time_seconds"] = this.duration_time_seconds;
        data["subtitles"] = null;
        if (Array.isArray(this.subtitles)) {
            data["subtitles"] = [];
            for (let item of this.subtitles) {
                if (item && typeof item.toJSON === "function") {
                    data["subtitles"].push(item?.toJSON());
                }
            }
        }
        data["streaming_quality"] = null;
        if (Array.isArray(this.streaming_quality)) {
            data["streaming_quality"] = [];
            for (let item of this.streaming_quality) {
                if (item && typeof item.toJSON === "function") {
                    data["streaming_quality"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}