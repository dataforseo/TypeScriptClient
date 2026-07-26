import { GoogleBusinessQuestionItem, IGoogleBusinessQuestionItem } from "./GoogleBusinessQuestionItem";


export interface IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo   {
        
        /** keyword received in a POST array keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) this field will contain the cid parameter if you specified it in the keyword field when setting a task; example: cid:2946633002421908862 learn more about the parameter in this help center article */
        keyword?: string | undefined
        
        /** search engine domain as specified in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to search engine results you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** google-defined client id unique id of a local establishment; learn more about the identifier in this help center article */
        cid?: string | undefined
        
        /** unique identifier of the SERP feature */
        feature_id?: string | undefined
        
        /** item types types of search engine results encountered in the items array; possible item types: google_business_question_item */
        item_types?: string[] | undefined
        
        /** array of google business question items without answers */
        items_without_answers?: GoogleBusinessQuestionItem[] | undefined
        
        /** the number of items in the items array */
        items_count?: number | undefined
        
        /** array of items within google_business_question_item contains answers to the google business questions; the maximum number of answers returned for each question: 5 possible item types google_business_answer_element */
        items?: GoogleBusinessQuestionItem[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo  implements IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo {

    
    /** keyword received in a POST array keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) this field will contain the cid parameter if you specified it in the keyword field when setting a task; example: cid:2946633002421908862 learn more about the parameter in this help center article */

    keyword?: string | undefined;

    
    /** search engine domain as specified in a POST array */

    se_domain?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to search engine results you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** date and time when the result was received in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** google-defined client id unique id of a local establishment; learn more about the identifier in this help center article */

    cid?: string | undefined;

    
    /** unique identifier of the SERP feature */

    feature_id?: string | undefined;

    
    /** item types types of search engine results encountered in the items array; possible item types: google_business_question_item */

    item_types?: string[] | undefined;

    
    /** array of google business question items without answers */

    items_without_answers?: GoogleBusinessQuestionItem[] | undefined;

    
    /** the number of items in the items array */

    items_count?: number | undefined;

    
    /** array of items within google_business_question_item contains answers to the google business questions; the maximum number of answers returned for each question: 5 possible item types google_business_answer_element */

    items?: GoogleBusinessQuestionItem[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo) {

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
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.cid = data["cid"];
            this.feature_id = data["feature_id"];
            this.item_types = data["item_types"];
            if (Array.isArray(data["items_without_answers"])) {
                this.items_without_answers = [];
                for (let item of data["items_without_answers"]) {
                    this.items_without_answers.push(GoogleBusinessQuestionItem.fromJS(item));
                }
            }
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GoogleBusinessQuestionItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleQuestionsAndAnswersTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["cid"] = this.cid;
        data["feature_id"] = this.feature_id;
        data["item_types"] = this.item_types;
        data["items_without_answers"] = null;
        if (Array.isArray(this.items_without_answers)) {
            data["items_without_answers"] = [];
            for (let item of this.items_without_answers) {
                if (item && typeof item.toJSON === "function") {
                    data["items_without_answers"].push(item?.toJSON());
                }
            }
        }
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