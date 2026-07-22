export interface IContacts   {
        
        /** array of telephone numbers */
        telephones?: string[] | undefined
        
        /** array of emails */
        emails?: string[] | undefined

    [key: string]: any;

    }

export class Contacts  implements IContacts {

    
    /** array of telephone numbers */

    telephones?: string[] | undefined;

    
    /** array of emails */

    emails?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IContacts) {

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
            this.telephones = data["telephones"];
            this.emails = data["emails"];
        }
    }

    static fromJS(data: any): Contacts {
        data = typeof data === 'object' ? data : {};


        let result = new Contacts();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["telephones"] = this.telephones;
        data["emails"] = this.emails;
        return data;
    }
}