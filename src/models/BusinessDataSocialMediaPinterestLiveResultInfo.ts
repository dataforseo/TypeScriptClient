export interface IBusinessDataSocialMediaPinterestLiveResultInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** *URL of the page the data is provided for* corresponding URL you specified in the `targets` array when setting a task */
        page_url?: string | undefined
        
        /** *number of pins for the related `page_url`* [pins on Pinterest](https://help.pinterest.com/en/business/article/build-a-pin) correspond to content saves; this field shows the number of content saves made from the related `page_url` using the [Pinterest Save Button](https://developers.pinterest.com/docs/widgets/save/?) */
        pins_count?: number | undefined

    [key: string]: any;

    }

export class BusinessDataSocialMediaPinterestLiveResultInfo  implements IBusinessDataSocialMediaPinterestLiveResultInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** *URL of the page the data is provided for* corresponding URL you specified in the `targets` array when setting a task */

    page_url?: string | undefined;

    
    /** *number of pins for the related `page_url`* [pins on Pinterest](https://help.pinterest.com/en/business/article/build-a-pin) correspond to content saves; this field shows the number of content saves made from the related `page_url` using the [Pinterest Save Button](https://developers.pinterest.com/docs/widgets/save/?) */

    pins_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataSocialMediaPinterestLiveResultInfo) {

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
            this.page_url = data["page_url"];
            this.pins_count = data["pins_count"];
        }
    }

    static fromJS(data: any): BusinessDataSocialMediaPinterestLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataSocialMediaPinterestLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["page_url"] = this.page_url;
        data["pins_count"] = this.pins_count;
        return data;
    }
}