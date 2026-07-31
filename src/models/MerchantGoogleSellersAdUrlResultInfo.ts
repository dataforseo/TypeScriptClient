export interface IMerchantGoogleSellersAdUrlResultInfo   {
        
        /** *unique ad click referral parameter* */
        ad_aclk?: string | undefined
        
        /** *full URL of the advertisement* */
        ad_url?: string | undefined
        
        /** *URLs where the link from Google Shopping redirects before reaching a final URL* includes up to 10 URLs of the ad's redirect path to the seller's `ad_url` */
        ad_url_redirects?: string[] | undefined

    [key: string]: any;

    }

export class MerchantGoogleSellersAdUrlResultInfo  implements IMerchantGoogleSellersAdUrlResultInfo {

    
    /** *unique ad click referral parameter* */

    ad_aclk?: string | undefined;

    
    /** *full URL of the advertisement* */

    ad_url?: string | undefined;

    
    /** *URLs where the link from Google Shopping redirects before reaching a final URL* includes up to 10 URLs of the ad's redirect path to the seller's `ad_url` */

    ad_url_redirects?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleSellersAdUrlResultInfo) {

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
            this.ad_aclk = data["ad_aclk"];
            this.ad_url = data["ad_url"];
            this.ad_url_redirects = data["ad_url_redirects"];
        }
    }

    static fromJS(data: any): MerchantGoogleSellersAdUrlResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleSellersAdUrlResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["ad_aclk"] = this.ad_aclk;
        data["ad_url"] = this.ad_url;
        data["ad_url_redirects"] = this.ad_url_redirects;
        return data;
    }
}