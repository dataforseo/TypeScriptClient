export interface IDataforseoLabsMetricsInfo   {
        
        /** *number of organic SERPs where the domain or subdomain ranks #1* */
        pos_1?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #2-3* */
        pos_2_3?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #4-10* */
        pos_4_10?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #11-20* */
        pos_11_20?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #21-30* */
        pos_21_30?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #31-40* */
        pos_31_40?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #41-50* */
        pos_41_50?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #51-60* */
        pos_51_60?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #61-70* */
        pos_61_70?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #71-80* */
        pos_71_80?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #81-90* */
        pos_81_90?: number | undefined
        
        /** *number of organic SERPs where the domain or subdomain ranks #91-100* */
        pos_91_100?: number | undefined
        
        /** *estimated traffic volume* estimated organic monthly traffic to the domain or subdomain calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-etv-calculated) */
        etv?: number | undefined
        
        /** *total count of organic SERPs that contain the domain or subdomain* */
        count?: number | undefined
        
        /** *estimated cost of converting organic search traffic into paid* represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for the metric is calculated as the product of organic `etv` and paid `cpc` values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-traffic-cost-calculated) */
        estimated_paid_traffic_cost?: number | undefined
        
        /** *number of new ranked elements* indicates how many new ranked elements were found for the indicated target */
        is_new?: number | undefined
        
        /** *rank went up* indicates how many ranked elements of the indicated target went up */
        is_up?: number | undefined
        
        /** *rank went down* indicates how many ranked elements of the indicated target went down */
        is_down?: number | undefined
        
        /** *lost ranked elements* indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren't found during the last check */
        is_lost?: number | undefined
        
        /** *estimated traffic volume based on clickstream data* calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true` learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated) */
        clickstream_etv?: number | undefined
        
        /** *distribution of estimated clickstream-based metrics by gender* to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true` learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/what-are-clickstream-based-metrics-and-how-do-we-calculate-them) */
        clickstream_gender_distribution?: { [key: string]: number; } | undefined
        
        /** *distribution of clickstream-based metrics by age* to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true` learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/what-are-clickstream-based-metrics-and-how-do-we-calculate-them) */
        clickstream_age_distribution?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsMetricsInfo  implements IDataforseoLabsMetricsInfo {

    
    /** *number of organic SERPs where the domain or subdomain ranks #1* */

    pos_1?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #2-3* */

    pos_2_3?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #4-10* */

    pos_4_10?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #11-20* */

    pos_11_20?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #21-30* */

    pos_21_30?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #31-40* */

    pos_31_40?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #41-50* */

    pos_41_50?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #51-60* */

    pos_51_60?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #61-70* */

    pos_61_70?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #71-80* */

    pos_71_80?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #81-90* */

    pos_81_90?: number | undefined;

    
    /** *number of organic SERPs where the domain or subdomain ranks #91-100* */

    pos_91_100?: number | undefined;

    
    /** *estimated traffic volume* estimated organic monthly traffic to the domain or subdomain calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-etv-calculated) */

    etv?: number | undefined;

    
    /** *total count of organic SERPs that contain the domain or subdomain* */

    count?: number | undefined;

    
    /** *estimated cost of converting organic search traffic into paid* represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for the metric is calculated as the product of organic `etv` and paid `cpc` values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-traffic-cost-calculated) */

    estimated_paid_traffic_cost?: number | undefined;

    
    /** *number of new ranked elements* indicates how many new ranked elements were found for the indicated target */

    is_new?: number | undefined;

    
    /** *rank went up* indicates how many ranked elements of the indicated target went up */

    is_up?: number | undefined;

    
    /** *rank went down* indicates how many ranked elements of the indicated target went down */

    is_down?: number | undefined;

    
    /** *lost ranked elements* indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren't found during the last check */

    is_lost?: number | undefined;

    
    /** *estimated traffic volume based on clickstream data* calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true` learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated) */

    clickstream_etv?: number | undefined;

    
    /** *distribution of estimated clickstream-based metrics by gender* to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true` learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/what-are-clickstream-based-metrics-and-how-do-we-calculate-them) */

    clickstream_gender_distribution?: { [key: string]: number; } | undefined;

    
    /** *distribution of clickstream-based metrics by age* to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true` learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/what-are-clickstream-based-metrics-and-how-do-we-calculate-them) */

    clickstream_age_distribution?: { [key: string]: number; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsMetricsInfo) {

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
            this.pos_1 = data["pos_1"];
            this.pos_2_3 = data["pos_2_3"];
            this.pos_4_10 = data["pos_4_10"];
            this.pos_11_20 = data["pos_11_20"];
            this.pos_21_30 = data["pos_21_30"];
            this.pos_31_40 = data["pos_31_40"];
            this.pos_41_50 = data["pos_41_50"];
            this.pos_51_60 = data["pos_51_60"];
            this.pos_61_70 = data["pos_61_70"];
            this.pos_71_80 = data["pos_71_80"];
            this.pos_81_90 = data["pos_81_90"];
            this.pos_91_100 = data["pos_91_100"];
            this.etv = data["etv"];
            this.count = data["count"];
            this.estimated_paid_traffic_cost = data["estimated_paid_traffic_cost"];
            this.is_new = data["is_new"];
            this.is_up = data["is_up"];
            this.is_down = data["is_down"];
            this.is_lost = data["is_lost"];
            this.clickstream_etv = data["clickstream_etv"];
            this.clickstream_gender_distribution = data["clickstream_gender_distribution"];
            this.clickstream_age_distribution = data["clickstream_age_distribution"];
        }
    }

    static fromJS(data: any): DataforseoLabsMetricsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsMetricsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["pos_1"] = this.pos_1;
        data["pos_2_3"] = this.pos_2_3;
        data["pos_4_10"] = this.pos_4_10;
        data["pos_11_20"] = this.pos_11_20;
        data["pos_21_30"] = this.pos_21_30;
        data["pos_31_40"] = this.pos_31_40;
        data["pos_41_50"] = this.pos_41_50;
        data["pos_51_60"] = this.pos_51_60;
        data["pos_61_70"] = this.pos_61_70;
        data["pos_71_80"] = this.pos_71_80;
        data["pos_81_90"] = this.pos_81_90;
        data["pos_91_100"] = this.pos_91_100;
        data["etv"] = this.etv;
        data["count"] = this.count;
        data["estimated_paid_traffic_cost"] = this.estimated_paid_traffic_cost;
        data["is_new"] = this.is_new;
        data["is_up"] = this.is_up;
        data["is_down"] = this.is_down;
        data["is_lost"] = this.is_lost;
        data["clickstream_etv"] = this.clickstream_etv;
        data["clickstream_gender_distribution"] = this.clickstream_gender_distribution;
        data["clickstream_age_distribution"] = this.clickstream_age_distribution;
        return data;
    }
}