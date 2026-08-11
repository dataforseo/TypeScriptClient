import { TechnologyCategoryInfo, ITechnologyCategoryInfo } from "./TechnologyCategoryInfo";


export interface IGroups   {
        
        /** *id of the technology group* example: `marketing`, `sales` */
        id?: string | undefined
        
        /** *title of the technology group* */
        title?: string | undefined
        
        /** *technology categories in this group* */
        categories?: TechnologyCategoryInfo[] | undefined

    [key: string]: any;

    }

export class Groups  implements IGroups {

    
    /** *id of the technology group* example: `marketing`, `sales` */

    id?: string | undefined;

    
    /** *title of the technology group* */

    title?: string | undefined;

    
    /** *technology categories in this group* */

    categories?: TechnologyCategoryInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IGroups) {

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
            this.id = data["id"];
            this.title = data["title"];
            if (Array.isArray(data["categories"])) {
                this.categories = [];
                for (let item of data["categories"]) {
                    this.categories.push(TechnologyCategoryInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): Groups {
        data = typeof data === 'object' ? data : {};


        let result = new Groups();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["title"] = this.title;
        data["categories"] = null;
        if (Array.isArray(this.categories)) {
            data["categories"] = [];
            for (let item of this.categories) {
                if (item && typeof item.toJSON === "function") {
                    data["categories"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}