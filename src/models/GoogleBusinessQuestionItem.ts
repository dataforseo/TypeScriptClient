import { GoogleBusinessAnswerElement, IGoogleBusinessAnswerElement } from "./GoogleBusinessAnswerElement";


export interface IGoogleBusinessQuestionItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank among all the elements */
        rank_absolute?: number | undefined
        
        /** ID of the question */
        question_id?: string | undefined
        
        /** URL of the question */
        url?: string | undefined
        
        /** URL of the user’s profile image */
        profile_image_url?: string | undefined
        
        /** URL of the user’s profile */
        profile_url?: string | undefined
        
        /** displayed name of the user */
        profile_name?: string | undefined
        
        /** current text of the question */
        question_text?: string | undefined
        
        /** original text of the question */
        original_question_text?: string | undefined
        
        /** estimated time when the question was posted */
        time_ago?: string | undefined
        
        /** exact time when the question was posted */
        timestamp?: string | undefined
        
        /** array of items
items within google_business_question_item */
        items?: GoogleBusinessAnswerElement[] | undefined

    [key: string]: any;

    }

export class GoogleBusinessQuestionItem  implements IGoogleBusinessQuestionItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank among all the elements */

    rank_absolute?: number | undefined;
    
    /** ID of the question */

    question_id?: string | undefined;
    
    /** URL of the question */

    url?: string | undefined;
    
    /** URL of the user’s profile image */

    profile_image_url?: string | undefined;
    
    /** URL of the user’s profile */

    profile_url?: string | undefined;
    
    /** displayed name of the user */

    profile_name?: string | undefined;
    
    /** current text of the question */

    question_text?: string | undefined;
    
    /** original text of the question */

    original_question_text?: string | undefined;
    
    /** estimated time when the question was posted */

    time_ago?: string | undefined;
    
    /** exact time when the question was posted */

    timestamp?: string | undefined;
    
    /** array of items
items within google_business_question_item */

    items?: GoogleBusinessAnswerElement[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleBusinessQuestionItem) {

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
            this.question_id = data["question_id"];
            this.url = data["url"];
            this.profile_image_url = data["profile_image_url"];
            this.profile_url = data["profile_url"];
            this.profile_name = data["profile_name"];
            this.question_text = data["question_text"];
            this.original_question_text = data["original_question_text"];
            this.time_ago = data["time_ago"];
            this.timestamp = data["timestamp"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GoogleBusinessAnswerElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleBusinessQuestionItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleBusinessQuestionItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["question_id"] = this.question_id;
        data["url"] = this.url;
        data["profile_image_url"] = this.profile_image_url;
        data["profile_url"] = this.profile_url;
        data["profile_name"] = this.profile_name;
        data["question_text"] = this.question_text;
        data["original_question_text"] = this.original_question_text;
        data["time_ago"] = this.time_ago;
        data["timestamp"] = this.timestamp;
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