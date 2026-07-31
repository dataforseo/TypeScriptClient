import { Advertiser, IAdvertiser } from "./Advertiser";


export interface IBaseSerpApiAdsAdvertiserElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *group rank in SERP* position within a group of elements with identical `type` values positions of elements with different `type` values are omitted from `rank_group` */
        rank_group?: number | undefined
        
        /** *absolute rank in SERP* absolute position among all the elements in SERP */
        rank_absolute?: number | undefined

    [key: string]: any;

    }

export class BaseSerpApiAdsAdvertiserElementItem  implements IBaseSerpApiAdsAdvertiserElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *group rank in SERP* position within a group of elements with identical `type` values positions of elements with different `type` values are omitted from `rank_group` */

    rank_group?: number | undefined;

    
    /** *absolute rank in SERP* absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiAdsAdvertiserElementItem) {

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
        }
    }

    static fromJS(data: any): BaseSerpApiAdsAdvertiserElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "ads_multi_account_advertiser") {

            let result = new SerpApiAdsMultiAccountAdvertiserElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ads_advertiser") {

            let result = new SerpApiAdsAdvertiserElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ads_domain") {

            let result = new SerpApiAdsDomainElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiAdsAdvertiserElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        return data;
    }
}

 
export interface ISerpApiAdsMultiAccountAdvertiserElementItem  extends IBaseSerpApiAdsAdvertiserElementItem    {
        
        /** *title of the element* */
        title?: string | undefined
        
        /** *advertiser location* */
        location?: string | undefined
        
        /** *ads count* the approximate number of ads that are run by the advertiser across all available Google Ads platforms */
        approx_ads_count?: number | undefined
        
        /** *associated advertiser accounts* contains objects with data on associated advertiser accounts */
        advertisers?: Advertiser[] | undefined

    [key: string]: any;

    }

export class SerpApiAdsMultiAccountAdvertiserElementItem  extends BaseSerpApiAdsAdvertiserElementItem   implements ISerpApiAdsMultiAccountAdvertiserElementItem {

    
    /** *title of the element* */

    title?: string | undefined;

    
    /** *advertiser location* */

    location?: string | undefined;

    
    /** *ads count* the approximate number of ads that are run by the advertiser across all available Google Ads platforms */

    approx_ads_count?: number | undefined;

    
    /** *associated advertiser accounts* contains objects with data on associated advertiser accounts */

    advertisers?: Advertiser[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiAdsMultiAccountAdvertiserElementItem) {
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
            this.location = data["location"];
            this.approx_ads_count = data["approx_ads_count"];
            if (Array.isArray(data["advertisers"])) {
                this.advertisers = [];
                for (let item of data["advertisers"]) {
                    this.advertisers.push(Advertiser.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiAdsMultiAccountAdvertiserElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAdsMultiAccountAdvertiserElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["location"] = this.location;
        data["approx_ads_count"] = this.approx_ads_count;
        data["advertisers"] = null;
        if (Array.isArray(this.advertisers)) {
            data["advertisers"] = [];
            for (let item of this.advertisers) {
                if (item && typeof item.toJSON === "function") {
                    data["advertisers"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiAdsAdvertiserElementItem  extends IBaseSerpApiAdsAdvertiserElementItem    {
        
        /** *title of the element* */
        title?: string | undefined
        
        /** *unique identifier of the advertiser account* can be used to obtain data on advertising campaigns from the [Google Ads Search endpoint](/v3/serp/google/ads_search/task_post/) */
        advertiser_id?: string | undefined
        
        /** *advertiser location* */
        location?: string | undefined
        
        /** *verified advertiser account* equals `true` if advertiser account is verified by Google Ads */
        verified?: boolean | undefined
        
        /** *ads count* the approximate number of ads that are run by the advertiser across all available Google Ads platforms */
        approx_ads_count?: number | undefined

    [key: string]: any;

    }

export class SerpApiAdsAdvertiserElementItem  extends BaseSerpApiAdsAdvertiserElementItem   implements ISerpApiAdsAdvertiserElementItem {

    
    /** *title of the element* */

    title?: string | undefined;

    
    /** *unique identifier of the advertiser account* can be used to obtain data on advertising campaigns from the [Google Ads Search endpoint](/v3/serp/google/ads_search/task_post/) */

    advertiser_id?: string | undefined;

    
    /** *advertiser location* */

    location?: string | undefined;

    
    /** *verified advertiser account* equals `true` if advertiser account is verified by Google Ads */

    verified?: boolean | undefined;

    
    /** *ads count* the approximate number of ads that are run by the advertiser across all available Google Ads platforms */

    approx_ads_count?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiAdsAdvertiserElementItem) {
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
            this.advertiser_id = data["advertiser_id"];
            this.location = data["location"];
            this.verified = data["verified"];
            this.approx_ads_count = data["approx_ads_count"];
        }
    }

    static fromJS(data: any): SerpApiAdsAdvertiserElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAdsAdvertiserElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["advertiser_id"] = this.advertiser_id;
        data["location"] = this.location;
        data["verified"] = this.verified;
        data["approx_ads_count"] = this.approx_ads_count;
        return data;
    }
}

 
export interface ISerpApiAdsDomainElementItem  extends IBaseSerpApiAdsAdvertiserElementItem    {
        
        /** *domain in SERP* */
        domain?: string | undefined

    [key: string]: any;

    }

export class SerpApiAdsDomainElementItem  extends BaseSerpApiAdsAdvertiserElementItem   implements ISerpApiAdsDomainElementItem {

    
    /** *domain in SERP* */

    domain?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiAdsDomainElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.domain = data["domain"];
        }
    }

    static fromJS(data: any): SerpApiAdsDomainElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAdsDomainElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        return data;
    }
}