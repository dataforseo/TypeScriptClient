export interface ISubtitles   {
        
        /** language of subtitles */
        language?: string | undefined
        
        /** defines if subtitles are translatable */
        is_translatable?: boolean | undefined
        
        /** defines if subtitles are auto generated */
        is_auto_generated?: boolean | undefined

    [key: string]: any;

    }

export class Subtitles  implements ISubtitles {

    
    /** language of subtitles */

    language?: string | undefined;

    
    /** defines if subtitles are translatable */

    is_translatable?: boolean | undefined;

    
    /** defines if subtitles are auto generated */

    is_auto_generated?: boolean | undefined;

    [key: string]: any;


    constructor(data?: ISubtitles) {

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
            this.language = data["language"];
            this.is_translatable = data["is_translatable"];
            this.is_auto_generated = data["is_auto_generated"];
        }
    }

    static fromJS(data: any): Subtitles {
        data = typeof data === 'object' ? data : {};


        let result = new Subtitles();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["language"] = this.language;
        data["is_translatable"] = this.is_translatable;
        data["is_auto_generated"] = this.is_auto_generated;
        return data;
    }
}