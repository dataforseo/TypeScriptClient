import { PreviewImage, IPreviewImage } from "./PreviewImage";


export interface IAdsSearch   {
        
        /** type of element */
        type?: string | undefined
        
        /** *group rank in SERP* position within a group of elements with identical `type` values positions of elements with different `type` values are omitted from `rank_group` */
        rank_group?: number | undefined
        
        /** *absolute rank in SERP* absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** *unique identifier of the advertiser account* */
        advertiser_id?: string | undefined
        
        /** *unique identifier of the advertisement* */
        creative_id?: string | undefined
        
        /** *title of the element* */
        title?: string | undefined
        
        /** *search URL with refinement parameters* */
        url?: string | undefined
        
        /** *verified advertiser account* equals `true` if advertiser account is verified by Google Ads */
        verified?: boolean | undefined
        
        /** *format of the advertisement* possible values: `text`, `image`, `video` */
        format?: string | undefined
        
        /** *preview image of the advertisement* */
        preview_image?: PreviewImage | undefined
        
        /** *url pointing to the ad preview* */
        preview_url?: string | undefined
        
        /** *date and time when the ad was shown for the first time* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” */
        first_shown?: string | undefined
        
        /** *date and time when the ad was shown the last time* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” */
        last_shown?: string | undefined

    [key: string]: any;

    }

export class AdsSearch  implements IAdsSearch {

    
    /** type of element */

    type?: string | undefined;

    
    /** *group rank in SERP* position within a group of elements with identical `type` values positions of elements with different `type` values are omitted from `rank_group` */

    rank_group?: number | undefined;

    
    /** *absolute rank in SERP* absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** *unique identifier of the advertiser account* */

    advertiser_id?: string | undefined;

    
    /** *unique identifier of the advertisement* */

    creative_id?: string | undefined;

    
    /** *title of the element* */

    title?: string | undefined;

    
    /** *search URL with refinement parameters* */

    url?: string | undefined;

    
    /** *verified advertiser account* equals `true` if advertiser account is verified by Google Ads */

    verified?: boolean | undefined;

    
    /** *format of the advertisement* possible values: `text`, `image`, `video` */

    format?: string | undefined;

    
    /** *preview image of the advertisement* */

    preview_image?: PreviewImage | undefined;

    
    /** *url pointing to the ad preview* */

    preview_url?: string | undefined;

    
    /** *date and time when the ad was shown for the first time* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” */

    first_shown?: string | undefined;

    
    /** *date and time when the ad was shown the last time* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” */

    last_shown?: string | undefined;

    [key: string]: any;


    constructor(data?: IAdsSearch) {

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
            this.advertiser_id = data["advertiser_id"];
            this.creative_id = data["creative_id"];
            this.title = data["title"];
            this.url = data["url"];
            this.verified = data["verified"];
            this.format = data["format"];
            this.preview_image = data["preview_image"] ? PreviewImage.fromJS(data["preview_image"]) : <any>undefined;
            this.preview_url = data["preview_url"];
            this.first_shown = data["first_shown"];
            this.last_shown = data["last_shown"];
        }
    }

    static fromJS(data: any): AdsSearch {
        data = typeof data === 'object' ? data : {};


        let result = new AdsSearch();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["advertiser_id"] = this.advertiser_id;
        data["creative_id"] = this.creative_id;
        data["title"] = this.title;
        data["url"] = this.url;
        data["verified"] = this.verified;
        data["format"] = this.format;
        data["preview_image"] = this.preview_image ? PreviewImage.fromJS(this.preview_image)?.toJSON() : <any>undefined;
        data["preview_url"] = this.preview_url;
        data["first_shown"] = this.first_shown;
        data["last_shown"] = this.last_shown;
        return data;
    }
}