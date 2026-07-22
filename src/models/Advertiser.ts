export interface IAdvertiser   {
        
        /** type of element */
        type?: string | undefined
        
        /** unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint */
        advertiser_id?: string | undefined
        
        /** location of the advertiser account
country code associated with the advertiser account */
        location?: string | undefined
        
        /** verified advertiser account
equals true if advertiser account is verified by Google Ads */
        verified?: boolean | undefined
        
        /** ads count
the approximate number of ads that are run by the advertiser account across all available Google Ads platforms */
        approx_ads_count?: number | undefined

    [key: string]: any;

    }

export class Advertiser  implements IAdvertiser {

    
    /** type of element */

    type?: string | undefined;

    
    /** unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint */

    advertiser_id?: string | undefined;

    
    /** location of the advertiser account
country code associated with the advertiser account */

    location?: string | undefined;

    
    /** verified advertiser account
equals true if advertiser account is verified by Google Ads */

    verified?: boolean | undefined;

    
    /** ads count
the approximate number of ads that are run by the advertiser account across all available Google Ads platforms */

    approx_ads_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IAdvertiser) {

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
            this.advertiser_id = data["advertiser_id"];
            this.location = data["location"];
            this.verified = data["verified"];
            this.approx_ads_count = data["approx_ads_count"];
        }
    }

    static fromJS(data: any): Advertiser {
        data = typeof data === 'object' ? data : {};


        let result = new Advertiser();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["advertiser_id"] = this.advertiser_id;
        data["location"] = this.location;
        data["verified"] = this.verified;
        data["approx_ads_count"] = this.approx_ads_count;
        return data;
    }
}