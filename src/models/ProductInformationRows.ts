import { BaseMerchantAmazonProductInformationRowElementItem, IBaseMerchantAmazonProductInformationRowElementItem } from "./BaseMerchantAmazonProductInformationRowElementItem";


export interface IProductInformationRows   {
        
        /** type of element */
        type?: string | undefined
        
        /** *title under which related product information appears on the Amazon product page* */
        title?: string | undefined
        
        /** *rows containing related product information* */
        rows?: BaseMerchantAmazonProductInformationRowElementItem[] | undefined

    [key: string]: any;

    }

export class ProductInformationRows  implements IProductInformationRows {

    
    /** type of element */

    type?: string | undefined;

    
    /** *title under which related product information appears on the Amazon product page* */

    title?: string | undefined;

    
    /** *rows containing related product information* */

    rows?: BaseMerchantAmazonProductInformationRowElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationRows) {

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
            this.title = data["title"];
            if (Array.isArray(data["rows"])) {
                this.rows = [];
                for (let item of data["rows"]) {
                    this.rows.push(BaseMerchantAmazonProductInformationRowElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ProductInformationRows {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationRows();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["rows"] = null;
        if (Array.isArray(this.rows)) {
            data["rows"] = [];
            for (let item of this.rows) {
                if (item && typeof item.toJSON === "function") {
                    data["rows"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}