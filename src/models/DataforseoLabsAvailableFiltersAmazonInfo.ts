export interface IDataforseoLabsAvailableFiltersAmazonInfo   {
        
        keyword_data_keyword?: string | undefined
        
        keyword_data_keyword_info_last_updated_time?: string | undefined
        
        keyword_data_keyword_info_search_volume?: string | undefined
        
        /** type of element */
        ranked_serp_element_serp_item_type?: string | undefined
        
        ranked_serp_element_serp_item_rank_group?: string | undefined
        
        ranked_serp_element_serp_item_rank_absolute?: string | undefined
        
        ranked_serp_element_serp_item_xpath?: string | undefined
        
        ranked_serp_element_serp_item_domain?: string | undefined
        
        ranked_serp_element_serp_item_title?: string | undefined
        
        ranked_serp_element_serp_item_url?: string | undefined
        
        ranked_serp_element_serp_item_asin?: string | undefined
        
        ranked_serp_element_serp_item_image_url?: string | undefined
        
        ranked_serp_element_serp_item_price_from?: string | undefined
        
        ranked_serp_element_serp_item_price_to?: string | undefined
        
        ranked_serp_element_serp_item_currency?: string | undefined
        
        ranked_serp_element_serp_item_is_best_seller?: string | undefined
        
        ranked_serp_element_serp_item_is_amazon_choice?: string | undefined
        
        ranked_serp_element_serp_item_rating_rating_type?: string | undefined
        
        ranked_serp_element_serp_item_rating_value?: string | undefined
        
        ranked_serp_element_serp_item_rating_votes_count?: string | undefined
        
        /** the maximum value for a rating_type */
        ranked_serp_element_serp_item_rating_rating_max?: number | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_date_from?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_date_to?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_fastest_delivery_date_from?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_fastest_delivery_date_to?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_message?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_price_current?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_price_regular?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_price_max_value?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_price_currency?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_price_is_price_range?: string | undefined
        
        ranked_serp_element_serp_item_delivery_info_delivery_price_displayed_price?: string | undefined
        
        ranked_serp_element_check_url?: string | undefined
        
        ranked_serp_element_serp_item_types?: string | undefined
        
        ranked_serp_element_se_results_count?: string | undefined
        
        ranked_serp_element_last_updated_time?: string | undefined
        
        ranked_serp_element_previous_updated_time?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsAvailableFiltersAmazonInfo  implements IDataforseoLabsAvailableFiltersAmazonInfo {

    keyword_data_keyword?: string | undefined;

    keyword_data_keyword_info_last_updated_time?: string | undefined;

    keyword_data_keyword_info_search_volume?: string | undefined;
    
    /** type of element */

    ranked_serp_element_serp_item_type?: string | undefined;

    ranked_serp_element_serp_item_rank_group?: string | undefined;

    ranked_serp_element_serp_item_rank_absolute?: string | undefined;

    ranked_serp_element_serp_item_xpath?: string | undefined;

    ranked_serp_element_serp_item_domain?: string | undefined;

    ranked_serp_element_serp_item_title?: string | undefined;

    ranked_serp_element_serp_item_url?: string | undefined;

    ranked_serp_element_serp_item_asin?: string | undefined;

    ranked_serp_element_serp_item_image_url?: string | undefined;

    ranked_serp_element_serp_item_price_from?: string | undefined;

    ranked_serp_element_serp_item_price_to?: string | undefined;

    ranked_serp_element_serp_item_currency?: string | undefined;

    ranked_serp_element_serp_item_is_best_seller?: string | undefined;

    ranked_serp_element_serp_item_is_amazon_choice?: string | undefined;

    ranked_serp_element_serp_item_rating_rating_type?: string | undefined;

    ranked_serp_element_serp_item_rating_value?: string | undefined;

    ranked_serp_element_serp_item_rating_votes_count?: string | undefined;
    
    /** the maximum value for a rating_type */

    ranked_serp_element_serp_item_rating_rating_max?: number | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_date_from?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_date_to?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_fastest_delivery_date_from?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_fastest_delivery_date_to?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_message?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_price_current?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_price_regular?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_price_max_value?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_price_currency?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_price_is_price_range?: string | undefined;

    ranked_serp_element_serp_item_delivery_info_delivery_price_displayed_price?: string | undefined;

    ranked_serp_element_check_url?: string | undefined;

    ranked_serp_element_serp_item_types?: string | undefined;

    ranked_serp_element_se_results_count?: string | undefined;

    ranked_serp_element_last_updated_time?: string | undefined;

    ranked_serp_element_previous_updated_time?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAvailableFiltersAmazonInfo) {

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
            this.keyword_data_keyword_info_last_updated_time = data["keyword_data.keyword_info.last_updated_time"];
            this.keyword_data_keyword_info_search_volume = data["keyword_data.keyword_info.search_volume"];
            this.ranked_serp_element_serp_item_type = data["ranked_serp_element.serp_item.type"];
            this.ranked_serp_element_serp_item_rank_group = data["ranked_serp_element.serp_item.rank_group"];
            this.ranked_serp_element_serp_item_rank_absolute = data["ranked_serp_element.serp_item.rank_absolute"];
            this.ranked_serp_element_serp_item_xpath = data["ranked_serp_element.serp_item.xpath"];
            this.ranked_serp_element_serp_item_domain = data["ranked_serp_element.serp_item.domain"];
            this.ranked_serp_element_serp_item_title = data["ranked_serp_element.serp_item.title"];
            this.ranked_serp_element_serp_item_url = data["ranked_serp_element.serp_item.url"];
            this.ranked_serp_element_serp_item_asin = data["ranked_serp_element.serp_item.asin"];
            this.ranked_serp_element_serp_item_image_url = data["ranked_serp_element.serp_item.image_url"];
            this.ranked_serp_element_serp_item_price_from = data["ranked_serp_element.serp_item.price_from"];
            this.ranked_serp_element_serp_item_price_to = data["ranked_serp_element.serp_item.price_to"];
            this.ranked_serp_element_serp_item_currency = data["ranked_serp_element.serp_item.currency"];
            this.ranked_serp_element_serp_item_is_best_seller = data["ranked_serp_element.serp_item.is_best_seller"];
            this.ranked_serp_element_serp_item_is_amazon_choice = data["ranked_serp_element.serp_item.is_amazon_choice"];
            this.ranked_serp_element_serp_item_rating_rating_type = data["ranked_serp_element.serp_item.rating.rating_type"];
            this.ranked_serp_element_serp_item_rating_value = data["ranked_serp_element.serp_item.rating.value"];
            this.ranked_serp_element_serp_item_rating_votes_count = data["ranked_serp_element.serp_item.rating.votes_count"];
            this.ranked_serp_element_serp_item_rating_rating_max = data["ranked_serp_element.serp_item.rating.rating_max"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_date_from = data["ranked_serp_element.serp_item.delivery_info.delivery_date_from"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_date_to = data["ranked_serp_element.serp_item.delivery_info.delivery_date_to"];
            this.ranked_serp_element_serp_item_delivery_info_fastest_delivery_date_from = data["ranked_serp_element.serp_item.delivery_info.fastest_delivery_date_from"];
            this.ranked_serp_element_serp_item_delivery_info_fastest_delivery_date_to = data["ranked_serp_element.serp_item.delivery_info.fastest_delivery_date_to"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_message = data["ranked_serp_element.serp_item.delivery_info.delivery_message"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_price_current = data["ranked_serp_element.serp_item.delivery_info.delivery_price.current"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_price_regular = data["ranked_serp_element.serp_item.delivery_info.delivery_price.regular"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_price_max_value = data["ranked_serp_element.serp_item.delivery_info.delivery_price.max_value"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_price_currency = data["ranked_serp_element.serp_item.delivery_info.delivery_price.currency"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_price_is_price_range = data["ranked_serp_element.serp_item.delivery_info.delivery_price.is_price_range"];
            this.ranked_serp_element_serp_item_delivery_info_delivery_price_displayed_price = data["ranked_serp_element.serp_item.delivery_info.delivery_price.displayed_price"];
            this.ranked_serp_element_check_url = data["ranked_serp_element.check_url"];
            this.ranked_serp_element_serp_item_types = data["ranked_serp_element.serp_item_types"];
            this.ranked_serp_element_se_results_count = data["ranked_serp_element.se_results_count"];
            this.ranked_serp_element_last_updated_time = data["ranked_serp_element.last_updated_time"];
            this.ranked_serp_element_previous_updated_time = data["ranked_serp_element.previous_updated_time"];
        }
    }

    static fromJS(data: any): DataforseoLabsAvailableFiltersAmazonInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAvailableFiltersAmazonInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword_data.keyword"] = this.keyword_data_keyword;
        data["keyword_data.keyword_info.last_updated_time"] = this.keyword_data_keyword_info_last_updated_time;
        data["keyword_data.keyword_info.search_volume"] = this.keyword_data_keyword_info_search_volume;
        data["ranked_serp_element.serp_item.type"] = this.ranked_serp_element_serp_item_type;
        data["ranked_serp_element.serp_item.rank_group"] = this.ranked_serp_element_serp_item_rank_group;
        data["ranked_serp_element.serp_item.rank_absolute"] = this.ranked_serp_element_serp_item_rank_absolute;
        data["ranked_serp_element.serp_item.xpath"] = this.ranked_serp_element_serp_item_xpath;
        data["ranked_serp_element.serp_item.domain"] = this.ranked_serp_element_serp_item_domain;
        data["ranked_serp_element.serp_item.title"] = this.ranked_serp_element_serp_item_title;
        data["ranked_serp_element.serp_item.url"] = this.ranked_serp_element_serp_item_url;
        data["ranked_serp_element.serp_item.asin"] = this.ranked_serp_element_serp_item_asin;
        data["ranked_serp_element.serp_item.image_url"] = this.ranked_serp_element_serp_item_image_url;
        data["ranked_serp_element.serp_item.price_from"] = this.ranked_serp_element_serp_item_price_from;
        data["ranked_serp_element.serp_item.price_to"] = this.ranked_serp_element_serp_item_price_to;
        data["ranked_serp_element.serp_item.currency"] = this.ranked_serp_element_serp_item_currency;
        data["ranked_serp_element.serp_item.is_best_seller"] = this.ranked_serp_element_serp_item_is_best_seller;
        data["ranked_serp_element.serp_item.is_amazon_choice"] = this.ranked_serp_element_serp_item_is_amazon_choice;
        data["ranked_serp_element.serp_item.rating.rating_type"] = this.ranked_serp_element_serp_item_rating_rating_type;
        data["ranked_serp_element.serp_item.rating.value"] = this.ranked_serp_element_serp_item_rating_value;
        data["ranked_serp_element.serp_item.rating.votes_count"] = this.ranked_serp_element_serp_item_rating_votes_count;
        data["ranked_serp_element.serp_item.rating.rating_max"] = this.ranked_serp_element_serp_item_rating_rating_max;
        data["ranked_serp_element.serp_item.delivery_info.delivery_date_from"] = this.ranked_serp_element_serp_item_delivery_info_delivery_date_from;
        data["ranked_serp_element.serp_item.delivery_info.delivery_date_to"] = this.ranked_serp_element_serp_item_delivery_info_delivery_date_to;
        data["ranked_serp_element.serp_item.delivery_info.fastest_delivery_date_from"] = this.ranked_serp_element_serp_item_delivery_info_fastest_delivery_date_from;
        data["ranked_serp_element.serp_item.delivery_info.fastest_delivery_date_to"] = this.ranked_serp_element_serp_item_delivery_info_fastest_delivery_date_to;
        data["ranked_serp_element.serp_item.delivery_info.delivery_message"] = this.ranked_serp_element_serp_item_delivery_info_delivery_message;
        data["ranked_serp_element.serp_item.delivery_info.delivery_price.current"] = this.ranked_serp_element_serp_item_delivery_info_delivery_price_current;
        data["ranked_serp_element.serp_item.delivery_info.delivery_price.regular"] = this.ranked_serp_element_serp_item_delivery_info_delivery_price_regular;
        data["ranked_serp_element.serp_item.delivery_info.delivery_price.max_value"] = this.ranked_serp_element_serp_item_delivery_info_delivery_price_max_value;
        data["ranked_serp_element.serp_item.delivery_info.delivery_price.currency"] = this.ranked_serp_element_serp_item_delivery_info_delivery_price_currency;
        data["ranked_serp_element.serp_item.delivery_info.delivery_price.is_price_range"] = this.ranked_serp_element_serp_item_delivery_info_delivery_price_is_price_range;
        data["ranked_serp_element.serp_item.delivery_info.delivery_price.displayed_price"] = this.ranked_serp_element_serp_item_delivery_info_delivery_price_displayed_price;
        data["ranked_serp_element.check_url"] = this.ranked_serp_element_check_url;
        data["ranked_serp_element.serp_item_types"] = this.ranked_serp_element_serp_item_types;
        data["ranked_serp_element.se_results_count"] = this.ranked_serp_element_se_results_count;
        data["ranked_serp_element.last_updated_time"] = this.ranked_serp_element_last_updated_time;
        data["ranked_serp_element.previous_updated_time"] = this.ranked_serp_element_previous_updated_time;
        return data;
    }
}