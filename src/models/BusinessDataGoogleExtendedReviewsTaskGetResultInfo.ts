import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { GoogleExtendedReviewsSearch, IGoogleExtendedReviewsSearch } from "./GoogleExtendedReviewsSearch";


export interface IBusinessDataGoogleExtendedReviewsTaskGetResultInfo   {
        
        /** *keyword received in a POST array* **keyword is returned with decoded %## (plus character '+' will be decoded to a space character)** */
        keyword?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** *search engine domain in a POST array* */
        se_domain?: string | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */
        datetime?: string | undefined
        
        /** *title of the 'reviews' element in SERP* the name of the local establishment for which the reviews are collected */
        title?: string | undefined
        
        /** *subtitle of the 'reviews' element in SERP* additional information (e.g., address) on the 'reviews' element for which the reviews are collected */
        sub_title?: string | undefined
        
        /** *rating of the corresponding local establishment* popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** *the unique identifier of the 'reviews' element in SERP* learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        feature_id?: string | undefined
        
        /** *unique identifier of a business location assigned by Google* learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        place_id?: string | undefined
        
        /** *google-defined client id* unique id of a local establishment learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        cid?: string | undefined
        
        /** *the total number of reviews* */
        reviews_count?: number | undefined
        
        /** *the number of reviews items in the results array* you can get more results by using the `depth` parameter when setting a task */
        items_count?: number | undefined
        
        /** *found reviews* you can get more results by using the `depth` parameter when setting a task */
        items?: GoogleExtendedReviewsSearch[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleExtendedReviewsTaskGetResultInfo  implements IBusinessDataGoogleExtendedReviewsTaskGetResultInfo {

    
    /** *keyword received in a POST array* **keyword is returned with decoded %## (plus character '+' will be decoded to a space character)** */

    keyword?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** *search engine domain in a POST array* */

    se_domain?: string | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */

    datetime?: string | undefined;

    
    /** *title of the 'reviews' element in SERP* the name of the local establishment for which the reviews are collected */

    title?: string | undefined;

    
    /** *subtitle of the 'reviews' element in SERP* additional information (e.g., address) on the 'reviews' element for which the reviews are collected */

    sub_title?: string | undefined;

    
    /** *rating of the corresponding local establishment* popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    
    /** *the unique identifier of the 'reviews' element in SERP* learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    feature_id?: string | undefined;

    
    /** *unique identifier of a business location assigned by Google* learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    place_id?: string | undefined;

    
    /** *google-defined client id* unique id of a local establishment learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    cid?: string | undefined;

    
    /** *the total number of reviews* */

    reviews_count?: number | undefined;

    
    /** *the number of reviews items in the results array* you can get more results by using the `depth` parameter when setting a task */

    items_count?: number | undefined;

    
    /** *found reviews* you can get more results by using the `depth` parameter when setting a task */

    items?: GoogleExtendedReviewsSearch[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleExtendedReviewsTaskGetResultInfo) {

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
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.title = data["title"];
            this.sub_title = data["sub_title"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.feature_id = data["feature_id"];
            this.place_id = data["place_id"];
            this.cid = data["cid"];
            this.reviews_count = data["reviews_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GoogleExtendedReviewsSearch.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleExtendedReviewsTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleExtendedReviewsTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["title"] = this.title;
        data["sub_title"] = this.sub_title;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["feature_id"] = this.feature_id;
        data["place_id"] = this.place_id;
        data["cid"] = this.cid;
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