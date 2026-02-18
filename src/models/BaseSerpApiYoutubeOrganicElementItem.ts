import { PreviewVideos, IPreviewVideos } from "./PreviewVideos";


export interface IBaseSerpApiYoutubeOrganicElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP for the target domain
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** block rank in SERP
position among all the blocks in SERP */
        block_rank?: number | undefined
        
        /** name of the block in SERP
example:
'People also watched' */
        block_name?: string | undefined
        
        /** ID of the channel */
        channel_id?: string | undefined
        
        /** URL of the channel */
        url?: string | undefined

    [key: string]: any;

    }

export class BaseSerpApiYoutubeOrganicElementItem  implements IBaseSerpApiYoutubeOrganicElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP for the target domain
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** block rank in SERP
position among all the blocks in SERP */

    block_rank?: number | undefined;
    
    /** name of the block in SERP
example:
'People also watched' */

    block_name?: string | undefined;
    
    /** ID of the channel */

    channel_id?: string | undefined;
    
    /** URL of the channel */

    url?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiYoutubeOrganicElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

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
            this.block_rank = data["block_rank"];
            this.block_name = data["block_name"];
            this.channel_id = data["channel_id"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): BaseSerpApiYoutubeOrganicElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "youtube_channel") {

            let result = new SerpApiYoutubeChannelElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "youtube_video") {

            let result = new SerpApiYoutubeVideoElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "youtube_video_paid") {

            let result = new SerpApiYoutubeVideoPaidElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "youtube_playlist") {

            let result = new SerpApiYoutubePlaylistElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiYoutubeOrganicElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["block_rank"] = this.block_rank;
        data["block_name"] = this.block_name;
        data["channel_id"] = this.channel_id;
        data["url"] = this.url;
        return data;
    }
}

 
export interface ISerpApiYoutubeChannelElementItem  extends IBaseSerpApiYoutubeOrganicElementItem    {
        
        /** name of the channel */
        name?: string | undefined
        
        /** the URL of the page where the logo image is hosted */
        logo?: string | undefined
        
        /** the number of videos counted on the channel */
        video_count?: number | undefined
        
        /** indicates whether the channel has a “verified” label */
        is_verified?: boolean | undefined
        
        /** description of the channel */
        description?: string | undefined
        
        /** highlighted keywords in the description */
        highlighted?: string[] | undefined

    [key: string]: any;

    }

export class SerpApiYoutubeChannelElementItem  extends BaseSerpApiYoutubeOrganicElementItem   implements ISerpApiYoutubeChannelElementItem {
    
    /** name of the channel */

    name?: string | undefined;
    
    /** the URL of the page where the logo image is hosted */

    logo?: string | undefined;
    
    /** the number of videos counted on the channel */

    video_count?: number | undefined;
    
    /** indicates whether the channel has a “verified” label */

    is_verified?: boolean | undefined;
    
    /** description of the channel */

    description?: string | undefined;
    
    /** highlighted keywords in the description */

    highlighted?: string[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiYoutubeChannelElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.name = data["name"];
            this.logo = data["logo"];
            this.video_count = data["video_count"];
            this.is_verified = data["is_verified"];
            this.description = data["description"];
            this.highlighted = data["highlighted"];
        }
    }

    static fromJS(data: any): SerpApiYoutubeChannelElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiYoutubeChannelElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["name"] = this.name;
        data["logo"] = this.logo;
        data["video_count"] = this.video_count;
        data["is_verified"] = this.is_verified;
        data["description"] = this.description;
        data["highlighted"] = this.highlighted;
        return data;
    }
}

 
export interface ISerpApiYoutubeVideoElementItem  extends IBaseSerpApiYoutubeOrganicElementItem    {
        
        /** title of the video */
        title?: string | undefined
        
        /** ID of the video */
        video_id?: string | undefined
        
        /** the URL of the page where the thumbnail is hosted */
        thumbnail_url?: string | undefined
        
        /** the name of the channel where the video is published */
        channel_name?: string | undefined
        
        /** the URL of the channel where the video is published */
        channel_url?: string | undefined
        
        /** the URL of the page where the logo image of the channel is hosted */
        channel_logo?: string | undefined
        
        /** description of the channel */
        description?: string | undefined
        
        /** highlighted keywords in the description */
        highlighted?: string[] | undefined
        
        /** video badges
example:
New, CC, 4K */
        badges?: string[] | undefined
        
        /** indicates whether the video is a live broadcast */
        is_live?: boolean | undefined
        
        /** indicates whether the video is shorts */
        is_shorts?: boolean | undefined
        
        /** indicates whether the video is a movie */
        is_movie?: boolean | undefined
        
        /** number of views of the video */
        views_count?: number | undefined
        
        /** the date when the video is published */
        publication_date?: string | undefined
        
        /** date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** duration of the video */
        duration_time?: string | undefined
        
        /** duration of the video in seconds */
        duration_time_seconds?: number | undefined

    [key: string]: any;

    }

export class SerpApiYoutubeVideoElementItem  extends BaseSerpApiYoutubeOrganicElementItem   implements ISerpApiYoutubeVideoElementItem {
    
    /** title of the video */

    title?: string | undefined;
    
    /** ID of the video */

    video_id?: string | undefined;
    
    /** the URL of the page where the thumbnail is hosted */

    thumbnail_url?: string | undefined;
    
    /** the name of the channel where the video is published */

    channel_name?: string | undefined;
    
    /** the URL of the channel where the video is published */

    channel_url?: string | undefined;
    
    /** the URL of the page where the logo image of the channel is hosted */

    channel_logo?: string | undefined;
    
    /** description of the channel */

    description?: string | undefined;
    
    /** highlighted keywords in the description */

    highlighted?: string[] | undefined;
    
    /** video badges
example:
New, CC, 4K */

    badges?: string[] | undefined;
    
    /** indicates whether the video is a live broadcast */

    is_live?: boolean | undefined;
    
    /** indicates whether the video is shorts */

    is_shorts?: boolean | undefined;
    
    /** indicates whether the video is a movie */

    is_movie?: boolean | undefined;
    
    /** number of views of the video */

    views_count?: number | undefined;
    
    /** the date when the video is published */

    publication_date?: string | undefined;
    
    /** date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** duration of the video */

    duration_time?: string | undefined;
    
    /** duration of the video in seconds */

    duration_time_seconds?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiYoutubeVideoElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.video_id = data["video_id"];
            this.thumbnail_url = data["thumbnail_url"];
            this.channel_name = data["channel_name"];
            this.channel_url = data["channel_url"];
            this.channel_logo = data["channel_logo"];
            this.description = data["description"];
            this.highlighted = data["highlighted"];
            this.badges = data["badges"];
            this.is_live = data["is_live"];
            this.is_shorts = data["is_shorts"];
            this.is_movie = data["is_movie"];
            this.views_count = data["views_count"];
            this.publication_date = data["publication_date"];
            this.timestamp = data["timestamp"];
            this.duration_time = data["duration_time"];
            this.duration_time_seconds = data["duration_time_seconds"];
        }
    }

    static fromJS(data: any): SerpApiYoutubeVideoElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiYoutubeVideoElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["video_id"] = this.video_id;
        data["thumbnail_url"] = this.thumbnail_url;
        data["channel_name"] = this.channel_name;
        data["channel_url"] = this.channel_url;
        data["channel_logo"] = this.channel_logo;
        data["description"] = this.description;
        data["highlighted"] = this.highlighted;
        data["badges"] = this.badges;
        data["is_live"] = this.is_live;
        data["is_shorts"] = this.is_shorts;
        data["is_movie"] = this.is_movie;
        data["views_count"] = this.views_count;
        data["publication_date"] = this.publication_date;
        data["timestamp"] = this.timestamp;
        data["duration_time"] = this.duration_time;
        data["duration_time_seconds"] = this.duration_time_seconds;
        return data;
    }
}

 
export interface ISerpApiYoutubeVideoPaidElementItem  extends IBaseSerpApiYoutubeOrganicElementItem    {
        
        /** title of the video */
        title?: string | undefined
        
        /** ID of the video */
        video_id?: string | undefined
        
        /** the URL of the page where the thumbnail is hosted */
        thumbnail_url?: string | undefined
        
        /** the name of the channel where the video is published */
        channel_name?: string | undefined
        
        /** the URL of the channel where the video is published */
        channel_url?: string | undefined
        
        /** the URL of the page where the logo image of the channel is hosted */
        channel_logo?: string | undefined
        
        /** description of the channel */
        description?: string | undefined
        
        /** highlighted keywords in the description */
        highlighted?: string[] | undefined
        
        /** video badges
example:
New, CC, 4K */
        badges?: string[] | undefined
        
        /** indicates whether the video is a live broadcast */
        is_live?: boolean | undefined
        
        /** indicates whether the video is shorts */
        is_shorts?: boolean | undefined
        
        /** indicates whether the video is a movie */
        is_movie?: boolean | undefined
        
        /** number of views of the video */
        views_count?: number | undefined
        
        /** the date when the video is published */
        publication_date?: string | undefined
        
        /** date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** duration of the video */
        duration_time?: string | undefined
        
        /** duration of the video in seconds */
        duration_time_seconds?: number | undefined

    [key: string]: any;

    }

export class SerpApiYoutubeVideoPaidElementItem  extends BaseSerpApiYoutubeOrganicElementItem   implements ISerpApiYoutubeVideoPaidElementItem {
    
    /** title of the video */

    title?: string | undefined;
    
    /** ID of the video */

    video_id?: string | undefined;
    
    /** the URL of the page where the thumbnail is hosted */

    thumbnail_url?: string | undefined;
    
    /** the name of the channel where the video is published */

    channel_name?: string | undefined;
    
    /** the URL of the channel where the video is published */

    channel_url?: string | undefined;
    
    /** the URL of the page where the logo image of the channel is hosted */

    channel_logo?: string | undefined;
    
    /** description of the channel */

    description?: string | undefined;
    
    /** highlighted keywords in the description */

    highlighted?: string[] | undefined;
    
    /** video badges
example:
New, CC, 4K */

    badges?: string[] | undefined;
    
    /** indicates whether the video is a live broadcast */

    is_live?: boolean | undefined;
    
    /** indicates whether the video is shorts */

    is_shorts?: boolean | undefined;
    
    /** indicates whether the video is a movie */

    is_movie?: boolean | undefined;
    
    /** number of views of the video */

    views_count?: number | undefined;
    
    /** the date when the video is published */

    publication_date?: string | undefined;
    
    /** date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** duration of the video */

    duration_time?: string | undefined;
    
    /** duration of the video in seconds */

    duration_time_seconds?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiYoutubeVideoPaidElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.video_id = data["video_id"];
            this.thumbnail_url = data["thumbnail_url"];
            this.channel_name = data["channel_name"];
            this.channel_url = data["channel_url"];
            this.channel_logo = data["channel_logo"];
            this.description = data["description"];
            this.highlighted = data["highlighted"];
            this.badges = data["badges"];
            this.is_live = data["is_live"];
            this.is_shorts = data["is_shorts"];
            this.is_movie = data["is_movie"];
            this.views_count = data["views_count"];
            this.publication_date = data["publication_date"];
            this.timestamp = data["timestamp"];
            this.duration_time = data["duration_time"];
            this.duration_time_seconds = data["duration_time_seconds"];
        }
    }

    static fromJS(data: any): SerpApiYoutubeVideoPaidElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiYoutubeVideoPaidElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["video_id"] = this.video_id;
        data["thumbnail_url"] = this.thumbnail_url;
        data["channel_name"] = this.channel_name;
        data["channel_url"] = this.channel_url;
        data["channel_logo"] = this.channel_logo;
        data["description"] = this.description;
        data["highlighted"] = this.highlighted;
        data["badges"] = this.badges;
        data["is_live"] = this.is_live;
        data["is_shorts"] = this.is_shorts;
        data["is_movie"] = this.is_movie;
        data["views_count"] = this.views_count;
        data["publication_date"] = this.publication_date;
        data["timestamp"] = this.timestamp;
        data["duration_time"] = this.duration_time;
        data["duration_time_seconds"] = this.duration_time_seconds;
        return data;
    }
}

 
export interface ISerpApiYoutubePlaylistElementItem  extends IBaseSerpApiYoutubeOrganicElementItem    {
        
        /** title of the video */
        title?: string | undefined
        
        /** ID of the video */
        playlist_id?: string | undefined
        
        /** the URL of the page where the thumbnail is hosted */
        thumbnail_url?: string | undefined
        
        /** the name of the channel where the video is published */
        channel_name?: string | undefined
        
        /** the URL of the channel where the video is published */
        channel_url?: string | undefined
        
        /** the URL of the page where the logo image of the channel is hosted */
        channel_logo?: string | undefined
        
        /** the number of videos in playlist */
        videos_count?: number | undefined
        
        /** information about preview videos
array of objects containing information about videos in the preview block of the playlist element */
        preview_videos?: PreviewVideos[] | undefined

    [key: string]: any;

    }

export class SerpApiYoutubePlaylistElementItem  extends BaseSerpApiYoutubeOrganicElementItem   implements ISerpApiYoutubePlaylistElementItem {
    
    /** title of the video */

    title?: string | undefined;
    
    /** ID of the video */

    playlist_id?: string | undefined;
    
    /** the URL of the page where the thumbnail is hosted */

    thumbnail_url?: string | undefined;
    
    /** the name of the channel where the video is published */

    channel_name?: string | undefined;
    
    /** the URL of the channel where the video is published */

    channel_url?: string | undefined;
    
    /** the URL of the page where the logo image of the channel is hosted */

    channel_logo?: string | undefined;
    
    /** the number of videos in playlist */

    videos_count?: number | undefined;
    
    /** information about preview videos
array of objects containing information about videos in the preview block of the playlist element */

    preview_videos?: PreviewVideos[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiYoutubePlaylistElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.playlist_id = data["playlist_id"];
            this.thumbnail_url = data["thumbnail_url"];
            this.channel_name = data["channel_name"];
            this.channel_url = data["channel_url"];
            this.channel_logo = data["channel_logo"];
            this.videos_count = data["videos_count"];
            if (Array.isArray(data["preview_videos"])) {
                this.preview_videos = [];
                for (let item of data["preview_videos"]) {
                    this.preview_videos.push(PreviewVideos.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiYoutubePlaylistElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiYoutubePlaylistElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["playlist_id"] = this.playlist_id;
        data["thumbnail_url"] = this.thumbnail_url;
        data["channel_name"] = this.channel_name;
        data["channel_url"] = this.channel_url;
        data["channel_logo"] = this.channel_logo;
        data["videos_count"] = this.videos_count;
        data["preview_videos"] = null;
        if (Array.isArray(this.preview_videos)) {
            data["preview_videos"] = [];
            for (let item of this.preview_videos) {
                if (item && typeof item.toJSON === "function") {
                    data["preview_videos"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}