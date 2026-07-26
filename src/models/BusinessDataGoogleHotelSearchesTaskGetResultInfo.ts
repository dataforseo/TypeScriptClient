import { BusinessDataGoogleHotelSearchesItem, IBusinessDataGoogleHotelSearchesItem } from "./BusinessDataGoogleHotelSearchesItem";


export interface IBusinessDataGoogleHotelSearchesTaskGetResultInfo   {
        
        /** keyword received in a POST array keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character); in order to obtain accurate search results, the location name is appended to the keyword automatically */
        keyword?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to search engine results you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** item types the number of items in the items array */
        items_count?: number | undefined
        
        /** array of items note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint */
        items?: BusinessDataGoogleHotelSearchesItem[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleHotelSearchesTaskGetResultInfo  implements IBusinessDataGoogleHotelSearchesTaskGetResultInfo {

    
    /** keyword received in a POST array keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character); in order to obtain accurate search results, the location name is appended to the keyword automatically */

    keyword?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to search engine results you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** date and time when the result was received in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** item types the number of items in the items array */

    items_count?: number | undefined;

    
    /** array of items note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint */

    items?: BusinessDataGoogleHotelSearchesItem[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleHotelSearchesTaskGetResultInfo) {

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
            this.keyword = data["keyword"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BusinessDataGoogleHotelSearchesItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleHotelSearchesTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleHotelSearchesTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}