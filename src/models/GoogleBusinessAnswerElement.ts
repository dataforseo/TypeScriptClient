export interface IGoogleBusinessAnswerElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *ID of the answer* */
        answer_id?: string | undefined
        
        /** *URL of the user's profile image* */
        profile_image_url?: string | undefined
        
        /** *URL of the user's profile* */
        profile_url?: string | undefined
        
        /** *displayed name of the user* */
        profile_name?: string | undefined
        
        /** *current text of the answer* */
        answer_text?: string | undefined
        
        /** *original text of the answer* */
        original_answer_text?: string | undefined
        
        /** *estimated time when the answer was posted* */
        time_ago?: string | undefined
        
        /** *exact time when the answer was posted* */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class GoogleBusinessAnswerElement  implements IGoogleBusinessAnswerElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *ID of the answer* */

    answer_id?: string | undefined;

    
    /** *URL of the user's profile image* */

    profile_image_url?: string | undefined;

    
    /** *URL of the user's profile* */

    profile_url?: string | undefined;

    
    /** *displayed name of the user* */

    profile_name?: string | undefined;

    
    /** *current text of the answer* */

    answer_text?: string | undefined;

    
    /** *original text of the answer* */

    original_answer_text?: string | undefined;

    
    /** *estimated time when the answer was posted* */

    time_ago?: string | undefined;

    
    /** *exact time when the answer was posted* */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleBusinessAnswerElement) {

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
            this.answer_id = data["answer_id"];
            this.profile_image_url = data["profile_image_url"];
            this.profile_url = data["profile_url"];
            this.profile_name = data["profile_name"];
            this.answer_text = data["answer_text"];
            this.original_answer_text = data["original_answer_text"];
            this.time_ago = data["time_ago"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): GoogleBusinessAnswerElement {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleBusinessAnswerElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["answer_id"] = this.answer_id;
        data["profile_image_url"] = this.profile_image_url;
        data["profile_url"] = this.profile_url;
        data["profile_name"] = this.profile_name;
        data["answer_text"] = this.answer_text;
        data["original_answer_text"] = this.original_answer_text;
        data["time_ago"] = this.time_ago;
        data["timestamp"] = this.timestamp;
        return data;
    }
}