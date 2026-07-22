export interface IChatGptGoogleShoppingProduct   {
        
        /** type of element */
        type?: string | undefined
        
        /** event identifierinternal event identifier used by Google */
        ei?: string | undefined
        
        /** product identifiercan be used as a data_docid in Google Shopping API endpoints */
        product_id?: string | undefined
        
        /** Google Shopping catalog identifier of the productcan be used as a product_id in Google Shopping API endpoints */
        catalog_id?: string | undefined
        
        /** Google product cluster identifiercan be used as a gid in Google Shopping API endpoints */
        gpcid?: string | undefined
        
        /** document identifier of the main offer in the headlinecan be used as a data_docid in Google Shopping API endpoints */
        headline_offer_docid?: string | undefined
        
        /** identifier for the displayed product’s image */
        image_docid?: string | undefined
        
        /** resource descriptor string internal Google resource descriptor string that identifies the product within Google's Shopping index */
        rds?: string | undefined
        
        /** search querysearch query used by ChatGPT to retrieve the product from Google Shopping */
        query?: string | undefined
        
        /** merchant identifieridentifier of the seller or merchant account in Google Shopping */
        mid?: string | undefined
        
        /** product view typeinternal Google parameter that specifies the product view type used when rendering the product item */
        pvt?: string | undefined
        
        /** encoded location parameterindicates the location for a search */
        uule?: string | undefined
        
        /** country codeindicates the location for which search results are displayed */
        gl?: string | undefined
        
        /** host language codeindicates the language in which search results are displayed */
        hl?: string | undefined

    [key: string]: any;

    }

export class ChatGptGoogleShoppingProduct  implements IChatGptGoogleShoppingProduct {

    
    /** type of element */

    type?: string | undefined;

    
    /** event identifierinternal event identifier used by Google */

    ei?: string | undefined;

    
    /** product identifiercan be used as a data_docid in Google Shopping API endpoints */

    product_id?: string | undefined;

    
    /** Google Shopping catalog identifier of the productcan be used as a product_id in Google Shopping API endpoints */

    catalog_id?: string | undefined;

    
    /** Google product cluster identifiercan be used as a gid in Google Shopping API endpoints */

    gpcid?: string | undefined;

    
    /** document identifier of the main offer in the headlinecan be used as a data_docid in Google Shopping API endpoints */

    headline_offer_docid?: string | undefined;

    
    /** identifier for the displayed product’s image */

    image_docid?: string | undefined;

    
    /** resource descriptor string internal Google resource descriptor string that identifies the product within Google's Shopping index */

    rds?: string | undefined;

    
    /** search querysearch query used by ChatGPT to retrieve the product from Google Shopping */

    query?: string | undefined;

    
    /** merchant identifieridentifier of the seller or merchant account in Google Shopping */

    mid?: string | undefined;

    
    /** product view typeinternal Google parameter that specifies the product view type used when rendering the product item */

    pvt?: string | undefined;

    
    /** encoded location parameterindicates the location for a search */

    uule?: string | undefined;

    
    /** country codeindicates the location for which search results are displayed */

    gl?: string | undefined;

    
    /** host language codeindicates the language in which search results are displayed */

    hl?: string | undefined;

    [key: string]: any;


    constructor(data?: IChatGptGoogleShoppingProduct) {

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
            this.ei = data["ei"];
            this.product_id = data["product_id"];
            this.catalog_id = data["catalog_id"];
            this.gpcid = data["gpcid"];
            this.headline_offer_docid = data["headline_offer_docid"];
            this.image_docid = data["image_docid"];
            this.rds = data["rds"];
            this.query = data["query"];
            this.mid = data["mid"];
            this.pvt = data["pvt"];
            this.uule = data["uule"];
            this.gl = data["gl"];
            this.hl = data["hl"];
        }
    }

    static fromJS(data: any): ChatGptGoogleShoppingProduct {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptGoogleShoppingProduct();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["ei"] = this.ei;
        data["product_id"] = this.product_id;
        data["catalog_id"] = this.catalog_id;
        data["gpcid"] = this.gpcid;
        data["headline_offer_docid"] = this.headline_offer_docid;
        data["image_docid"] = this.image_docid;
        data["rds"] = this.rds;
        data["query"] = this.query;
        data["mid"] = this.mid;
        data["pvt"] = this.pvt;
        data["uule"] = this.uule;
        data["gl"] = this.gl;
        data["hl"] = this.hl;
        return data;
    }
}