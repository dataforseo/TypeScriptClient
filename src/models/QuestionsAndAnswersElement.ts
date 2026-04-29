export interface IQuestionsAndAnswersElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** question included in the item */
        question_text?: string | undefined
        
        /** answer included in the item */
        answer_text?: string | undefined
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string | undefined
        
        /** website domain */
        domain?: string | undefined
        
        /** answer upvotes from the source */
        votes?: number | undefined

    [key: string]: any;

    }

export class QuestionsAndAnswersElement  implements IQuestionsAndAnswersElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** question included in the item */

    question_text?: string | undefined;
    
    /** answer included in the item */

    answer_text?: string | undefined;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string | undefined;
    
    /** website domain */

    domain?: string | undefined;
    
    /** answer upvotes from the source */

    votes?: number | undefined;

    [key: string]: any;


    constructor(data?: IQuestionsAndAnswersElement) {

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
            this.url = data["url"];
            this.question_text = data["question_text"];
            this.answer_text = data["answer_text"];
            this.source = data["source"];
            this.domain = data["domain"];
            this.votes = data["votes"];
        }
    }

    static fromJS(data: any): QuestionsAndAnswersElement {
        data = typeof data === 'object' ? data : {};


        let result = new QuestionsAndAnswersElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["url"] = this.url;
        data["question_text"] = this.question_text;
        data["answer_text"] = this.answer_text;
        data["source"] = this.source;
        data["domain"] = this.domain;
        data["votes"] = this.votes;
        return data;
    }
}