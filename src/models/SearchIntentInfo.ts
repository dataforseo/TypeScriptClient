export interface ISearchIntentInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** main search intent
possible values: informational, navigational, commercial, transactional */
        main_intent?: string | undefined
        
        /** supplementary search intents
possible values: informational, navigational, commercial, transactional */
        foreign_intent?: string[] | undefined
        
        /** date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        last_updated_time?: string | undefined

    [key: string]: any;

    }

export class SearchIntentInfo  implements ISearchIntentInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** main search intent
possible values: informational, navigational, commercial, transactional */

    main_intent?: string | undefined;

    
    /** supplementary search intents
possible values: informational, navigational, commercial, transactional */

    foreign_intent?: string[] | undefined;

    
    /** date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    last_updated_time?: string | undefined;

    [key: string]: any;


    constructor(data?: ISearchIntentInfo) {

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
            this.se_type = data["se_type"];
            this.main_intent = data["main_intent"];
            this.foreign_intent = data["foreign_intent"];
            this.last_updated_time = data["last_updated_time"];
        }
    }

    static fromJS(data: any): SearchIntentInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SearchIntentInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["main_intent"] = this.main_intent;
        data["foreign_intent"] = this.foreign_intent;
        data["last_updated_time"] = this.last_updated_time;
        return data;
    }
}