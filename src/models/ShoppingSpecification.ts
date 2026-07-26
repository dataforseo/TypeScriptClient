export interface IShoppingSpecification   {
        
        /** type of element */
        type?: string | undefined
        
        /** name of the block of product attributes indicates the name of the product specification section in which the related element is listed */
        block_name?: string | undefined
        
        /** product attribute attribute name of the product data specification */
        specification_name?: string | undefined
        
        /** content of the specification */
        specification_value?: string | undefined

    [key: string]: any;

    }

export class ShoppingSpecification  implements IShoppingSpecification {

    
    /** type of element */

    type?: string | undefined;

    
    /** name of the block of product attributes indicates the name of the product specification section in which the related element is listed */

    block_name?: string | undefined;

    
    /** product attribute attribute name of the product data specification */

    specification_name?: string | undefined;

    
    /** content of the specification */

    specification_value?: string | undefined;

    [key: string]: any;


    constructor(data?: IShoppingSpecification) {

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
            this.block_name = data["block_name"];
            this.specification_name = data["specification_name"];
            this.specification_value = data["specification_value"];
        }
    }

    static fromJS(data: any): ShoppingSpecification {
        data = typeof data === 'object' ? data : {};


        let result = new ShoppingSpecification();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["block_name"] = this.block_name;
        data["specification_name"] = this.specification_name;
        data["specification_value"] = this.specification_value;
        return data;
    }
}