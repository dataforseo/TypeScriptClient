import { MapsSearch, IMapsSearch } from "./MapsSearch";


export interface IBusinessDirectoryInfo   {
        
        /** title of the element
domain of the online menu system */
        title?: string | undefined
        
        /** encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info */
        items?: MapsSearch[] | undefined

    [key: string]: any;

    }

export class BusinessDirectoryInfo  implements IBusinessDirectoryInfo {

    
    /** title of the element
domain of the online menu system */

    title?: string | undefined;

    
    /** encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info */

    items?: MapsSearch[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDirectoryInfo) {

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
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(MapsSearch.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDirectoryInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDirectoryInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
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