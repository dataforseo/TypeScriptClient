export interface IProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo   {
        
        keyword_data_keyword?: string | undefined
        
        keyword_data_location_code?: string | undefined
        
        keyword_data_language_code?: string | undefined
        
        keyword_data_keyword_info_last_updated_time?: string | undefined
        
        keyword_data_keyword_info_search_volume?: string | undefined
        
        /** type of element */
        intersection_result_key_type?: string | undefined
        
        intersection_result_key_rank_group?: string | undefined
        
        intersection_result_key_rank_absolute?: string | undefined
        
        intersection_result_key_xpath?: string | undefined
        
        intersection_result_key_domain?: string | undefined
        
        intersection_result_key_title?: string | undefined
        
        intersection_result_key_url?: string | undefined
        
        intersection_result_key_asin?: string | undefined
        
        intersection_result_key_image_url?: string | undefined
        
        intersection_result_key_price_from?: string | undefined
        
        intersection_result_key_price_to?: string | undefined
        
        intersection_result_key_currency?: string | undefined
        
        intersection_result_key_is_best_seller?: string | undefined
        
        intersection_result_key_is_amazon_choice?: string | undefined
        
        intersection_result_key_rating_rating_type?: string | undefined
        
        intersection_result_key_rating_value?: string | undefined
        
        intersection_result_key_rating_votes_count?: string | undefined
        
        /** the maximum value for a rating_type */
        intersection_result_key_rating_rating_max?: number | undefined
        
        intersection_result_key_delivery_info_delivery_message?: string | undefined
        
        intersection_result_key_delivery_info_delivery_price_current?: string | undefined
        
        intersection_result_key_delivery_info_delivery_price_regular?: string | undefined
        
        intersection_result_key_delivery_info_delivery_price_max_value?: string | undefined
        
        intersection_result_key_delivery_info_delivery_price_currency?: string | undefined
        
        intersection_result_key_delivery_info_delivery_price_is_price_range?: string | undefined
        
        intersection_result_key_delivery_info_delivery_price_displayed_price?: string | undefined

    [key: string]: any;

    }

export class ProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo  implements IProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo {

    keyword_data_keyword?: string | undefined;

    keyword_data_location_code?: string | undefined;

    keyword_data_language_code?: string | undefined;

    keyword_data_keyword_info_last_updated_time?: string | undefined;

    keyword_data_keyword_info_search_volume?: string | undefined;
    
    /** type of element */

    intersection_result_key_type?: string | undefined;

    intersection_result_key_rank_group?: string | undefined;

    intersection_result_key_rank_absolute?: string | undefined;

    intersection_result_key_xpath?: string | undefined;

    intersection_result_key_domain?: string | undefined;

    intersection_result_key_title?: string | undefined;

    intersection_result_key_url?: string | undefined;

    intersection_result_key_asin?: string | undefined;

    intersection_result_key_image_url?: string | undefined;

    intersection_result_key_price_from?: string | undefined;

    intersection_result_key_price_to?: string | undefined;

    intersection_result_key_currency?: string | undefined;

    intersection_result_key_is_best_seller?: string | undefined;

    intersection_result_key_is_amazon_choice?: string | undefined;

    intersection_result_key_rating_rating_type?: string | undefined;

    intersection_result_key_rating_value?: string | undefined;

    intersection_result_key_rating_votes_count?: string | undefined;
    
    /** the maximum value for a rating_type */

    intersection_result_key_rating_rating_max?: number | undefined;

    intersection_result_key_delivery_info_delivery_message?: string | undefined;

    intersection_result_key_delivery_info_delivery_price_current?: string | undefined;

    intersection_result_key_delivery_info_delivery_price_regular?: string | undefined;

    intersection_result_key_delivery_info_delivery_price_max_value?: string | undefined;

    intersection_result_key_delivery_info_delivery_price_currency?: string | undefined;

    intersection_result_key_delivery_info_delivery_price_is_price_range?: string | undefined;

    intersection_result_key_delivery_info_delivery_price_displayed_price?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo) {

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
            this.keyword_data_keyword = data["keyword_data.keyword"];
            this.keyword_data_location_code = data["keyword_data.location_code"];
            this.keyword_data_language_code = data["keyword_data.language_code"];
            this.keyword_data_keyword_info_last_updated_time = data["keyword_data.keyword_info.last_updated_time"];
            this.keyword_data_keyword_info_search_volume = data["keyword_data.keyword_info.search_volume"];
            this.intersection_result_key_type = data["intersection_result.$key.type"];
            this.intersection_result_key_rank_group = data["intersection_result.$key.rank_group"];
            this.intersection_result_key_rank_absolute = data["intersection_result.$key.rank_absolute"];
            this.intersection_result_key_xpath = data["intersection_result.$key.xpath"];
            this.intersection_result_key_domain = data["intersection_result.$key.domain"];
            this.intersection_result_key_title = data["intersection_result.$key.title"];
            this.intersection_result_key_url = data["intersection_result.$key.url"];
            this.intersection_result_key_asin = data["intersection_result.$key.asin"];
            this.intersection_result_key_image_url = data["intersection_result.$key.image_url"];
            this.intersection_result_key_price_from = data["intersection_result.$key.price_from"];
            this.intersection_result_key_price_to = data["intersection_result.$key.price_to"];
            this.intersection_result_key_currency = data["intersection_result.$key.currency"];
            this.intersection_result_key_is_best_seller = data["intersection_result.$key.is_best_seller"];
            this.intersection_result_key_is_amazon_choice = data["intersection_result.$key.is_amazon_choice"];
            this.intersection_result_key_rating_rating_type = data["intersection_result.$key.rating.rating_type"];
            this.intersection_result_key_rating_value = data["intersection_result.$key.rating.value"];
            this.intersection_result_key_rating_votes_count = data["intersection_result.$key.rating.votes_count"];
            this.intersection_result_key_rating_rating_max = data["intersection_result.$key.rating.rating_max"];
            this.intersection_result_key_delivery_info_delivery_message = data["intersection_result.$key.delivery_info.delivery_message"];
            this.intersection_result_key_delivery_info_delivery_price_current = data["intersection_result.$key.delivery_info.delivery_price.current"];
            this.intersection_result_key_delivery_info_delivery_price_regular = data["intersection_result.$key.delivery_info.delivery_price.regular"];
            this.intersection_result_key_delivery_info_delivery_price_max_value = data["intersection_result.$key.delivery_info.delivery_price.max_value"];
            this.intersection_result_key_delivery_info_delivery_price_currency = data["intersection_result.$key.delivery_info.delivery_price.currency"];
            this.intersection_result_key_delivery_info_delivery_price_is_price_range = data["intersection_result.$key.delivery_info.delivery_price.is_price_range"];
            this.intersection_result_key_delivery_info_delivery_price_displayed_price = data["intersection_result.$key.delivery_info.delivery_price.displayed_price"];
        }
    }

    static fromJS(data: any): ProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword_data.keyword"] = this.keyword_data_keyword;
        data["keyword_data.location_code"] = this.keyword_data_location_code;
        data["keyword_data.language_code"] = this.keyword_data_language_code;
        data["keyword_data.keyword_info.last_updated_time"] = this.keyword_data_keyword_info_last_updated_time;
        data["keyword_data.keyword_info.search_volume"] = this.keyword_data_keyword_info_search_volume;
        data["intersection_result.$key.type"] = this.intersection_result_key_type;
        data["intersection_result.$key.rank_group"] = this.intersection_result_key_rank_group;
        data["intersection_result.$key.rank_absolute"] = this.intersection_result_key_rank_absolute;
        data["intersection_result.$key.xpath"] = this.intersection_result_key_xpath;
        data["intersection_result.$key.domain"] = this.intersection_result_key_domain;
        data["intersection_result.$key.title"] = this.intersection_result_key_title;
        data["intersection_result.$key.url"] = this.intersection_result_key_url;
        data["intersection_result.$key.asin"] = this.intersection_result_key_asin;
        data["intersection_result.$key.image_url"] = this.intersection_result_key_image_url;
        data["intersection_result.$key.price_from"] = this.intersection_result_key_price_from;
        data["intersection_result.$key.price_to"] = this.intersection_result_key_price_to;
        data["intersection_result.$key.currency"] = this.intersection_result_key_currency;
        data["intersection_result.$key.is_best_seller"] = this.intersection_result_key_is_best_seller;
        data["intersection_result.$key.is_amazon_choice"] = this.intersection_result_key_is_amazon_choice;
        data["intersection_result.$key.rating.rating_type"] = this.intersection_result_key_rating_rating_type;
        data["intersection_result.$key.rating.value"] = this.intersection_result_key_rating_value;
        data["intersection_result.$key.rating.votes_count"] = this.intersection_result_key_rating_votes_count;
        data["intersection_result.$key.rating.rating_max"] = this.intersection_result_key_rating_rating_max;
        data["intersection_result.$key.delivery_info.delivery_message"] = this.intersection_result_key_delivery_info_delivery_message;
        data["intersection_result.$key.delivery_info.delivery_price.current"] = this.intersection_result_key_delivery_info_delivery_price_current;
        data["intersection_result.$key.delivery_info.delivery_price.regular"] = this.intersection_result_key_delivery_info_delivery_price_regular;
        data["intersection_result.$key.delivery_info.delivery_price.max_value"] = this.intersection_result_key_delivery_info_delivery_price_max_value;
        data["intersection_result.$key.delivery_info.delivery_price.currency"] = this.intersection_result_key_delivery_info_delivery_price_currency;
        data["intersection_result.$key.delivery_info.delivery_price.is_price_range"] = this.intersection_result_key_delivery_info_delivery_price_is_price_range;
        data["intersection_result.$key.delivery_info.delivery_price.displayed_price"] = this.intersection_result_key_delivery_info_delivery_price_displayed_price;
        return data;
    }
}