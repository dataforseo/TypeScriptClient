import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";


export interface IAiModeAiOverviewPaidElementInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** *title of the element in SERP* */
        title?: string | undefined
        
        /** *reference page URL* */
        url?: string | undefined
        
        /** *domain name of the reference* */
        domain?: string | undefined
        
        /** *unique ad click referral parameter* using this parameter you can get a URL of the advertisement in [Google Shopping Sellers Ad URL](https://docs.dataforseo.com/v3/merchant/google/sellers/ad_url/) */
        ad_aclk?: string | undefined
        
        /** *displayed name of the advertiser's website* */
        website_name?: string | undefined
        
        /** *breadcrumb path displayed in the ad* */
        breadcrumb?: string | undefined
        
        /** *description text of the ad* */
        snippet?: string | undefined
        
        /** *images present in the ad* if there are none, equals `null` */
        images?: AiModeImagesElementInfo[] | undefined

    [key: string]: any;

    }

export class AiModeAiOverviewPaidElementInfo  implements IAiModeAiOverviewPaidElementInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** *title of the element in SERP* */

    title?: string | undefined;

    
    /** *reference page URL* */

    url?: string | undefined;

    
    /** *domain name of the reference* */

    domain?: string | undefined;

    
    /** *unique ad click referral parameter* using this parameter you can get a URL of the advertisement in [Google Shopping Sellers Ad URL](https://docs.dataforseo.com/v3/merchant/google/sellers/ad_url/) */

    ad_aclk?: string | undefined;

    
    /** *displayed name of the advertiser's website* */

    website_name?: string | undefined;

    
    /** *breadcrumb path displayed in the ad* */

    breadcrumb?: string | undefined;

    
    /** *description text of the ad* */

    snippet?: string | undefined;

    
    /** *images present in the ad* if there are none, equals `null` */

    images?: AiModeImagesElementInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiModeAiOverviewPaidElementInfo) {

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
            this.domain = data["domain"];
            this.ad_aclk = data["ad_aclk"];
            this.website_name = data["website_name"];
            this.breadcrumb = data["breadcrumb"];
            this.snippet = data["snippet"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiModeAiOverviewPaidElementInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiModeAiOverviewPaidElementInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["ad_aclk"] = this.ad_aclk;
        data["website_name"] = this.website_name;
        data["breadcrumb"] = this.breadcrumb;
        data["snippet"] = this.snippet;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}