import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { AppStoreReviewsSearch, IAppStoreReviewsSearch } from "./AppStoreReviewsSearch";


export interface IAppDataAppleAppReviewsTaskGetAdvancedResultInfo   {
        
        /** application id received in a POST array */
        app_id?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to search engine results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** title of the app
title of the application for which the reviews are collected */
        title?: string | undefined
        
        /** rating of the app
rating of the application for which the reviews are collected */
        rating?: RatingInfo | undefined
        
        /** the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews */
        reviews_count?: number | undefined
        
        /** the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task */
        items_count?: number | undefined
        
        /** found reviews */
        items?: AppStoreReviewsSearch[] | undefined

    [key: string]: any;

    }

export class AppDataAppleAppReviewsTaskGetAdvancedResultInfo  implements IAppDataAppleAppReviewsTaskGetAdvancedResultInfo {
    
    /** application id received in a POST array */

    app_id?: string | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** direct URL to search engine results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;
    
    /** title of the app
title of the application for which the reviews are collected */

    title?: string | undefined;
    
    /** rating of the app
rating of the application for which the reviews are collected */

    rating?: RatingInfo | undefined;
    
    /** the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews */

    reviews_count?: number | undefined;
    
    /** the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task */

    items_count?: number | undefined;
    
    /** found reviews */

    items?: AppStoreReviewsSearch[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleAppReviewsTaskGetAdvancedResultInfo) {

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
            this.app_id = data["app_id"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.title = data["title"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.reviews_count = data["reviews_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AppStoreReviewsSearch.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataAppleAppReviewsTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppReviewsTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_id"] = this.app_id;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["title"] = this.title;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["reviews_count"] = this.reviews_count;
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