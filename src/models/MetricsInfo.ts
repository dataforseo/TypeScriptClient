export interface IMetricsInfo   {
        
        /** number of organic SERPs where the domain ranks #1 */
        pos_1?: number | undefined
        
        /** number of organic SERPs where the domain ranks #2-3 */
        pos_2_3?: number | undefined
        
        /** number of organic SERPs where the domain ranks #4-10 */
        pos_4_10?: number | undefined
        
        /** number of organic SERPs where the domain ranks #11-20 */
        pos_11_20?: number | undefined
        
        /** number of organic SERPs where the domain ranks #21-30 */
        pos_21_30?: number | undefined
        
        /** number of organic SERPs where the domain ranks #31-40 */
        pos_31_40?: number | undefined
        
        /** number of organic SERPs where the domain ranks #41-50 */
        pos_41_50?: number | undefined
        
        /** number of organic SERPs where the domain ranks #51-60 */
        pos_51_60?: number | undefined
        
        /** number of organic SERPs where the domain ranks #61-70 */
        pos_61_70?: number | undefined
        
        /** number of organic SERPs where the domain ranks #71-80 */
        pos_71_80?: number | undefined
        
        /** number of organic SERPs where the domain ranks #81-90 */
        pos_81_90?: number | undefined
        
        /** number of organic SERPs where the domain ranks #91-100 */
        pos_91_100?: number | undefined
        
        /** estimated traffic volumeestimated organic monthly traffic to the domaincalculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks forlearn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** total count of organic SERPs that contain the domain */
        count?: number | undefined
        
        /** estimated cost of converting organic search traffic into paidrepresents the estimated monthly cost of running ads (USD) for all keywords a domain ranks forthe metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Searchlearn more about how the metric is calculated in this help center article */
        estimated_paid_traffic_cost?: number | undefined
        
        /** number of new ranked elements
indicates how many new ranked elements were found for this domain */
        is_new?: number | undefined
        
        /** rank went up
indicates how many ranked elements of this domain went up in Google Search */
        is_up?: number | undefined
        
        /** rank went down
indicates how many ranked elements of this domain went down in Google Search */
        is_down?: number | undefined
        
        /** lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check */
        is_lost?: number | undefined

    [key: string]: any;

    }

export class MetricsInfo  implements IMetricsInfo {
    
    /** number of organic SERPs where the domain ranks #1 */

    pos_1?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #2-3 */

    pos_2_3?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #4-10 */

    pos_4_10?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #11-20 */

    pos_11_20?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #21-30 */

    pos_21_30?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #31-40 */

    pos_31_40?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #41-50 */

    pos_41_50?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #51-60 */

    pos_51_60?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #61-70 */

    pos_61_70?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #71-80 */

    pos_71_80?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #81-90 */

    pos_81_90?: number | undefined;
    
    /** number of organic SERPs where the domain ranks #91-100 */

    pos_91_100?: number | undefined;
    
    /** estimated traffic volumeestimated organic monthly traffic to the domaincalculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks forlearn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** total count of organic SERPs that contain the domain */

    count?: number | undefined;
    
    /** estimated cost of converting organic search traffic into paidrepresents the estimated monthly cost of running ads (USD) for all keywords a domain ranks forthe metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Searchlearn more about how the metric is calculated in this help center article */

    estimated_paid_traffic_cost?: number | undefined;
    
    /** number of new ranked elements
indicates how many new ranked elements were found for this domain */

    is_new?: number | undefined;
    
    /** rank went up
indicates how many ranked elements of this domain went up in Google Search */

    is_up?: number | undefined;
    
    /** rank went down
indicates how many ranked elements of this domain went down in Google Search */

    is_down?: number | undefined;
    
    /** lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check */

    is_lost?: number | undefined;

    [key: string]: any;


    constructor(data?: IMetricsInfo) {

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
        }
    }

    static fromJS(data: any): MetricsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MetricsInfo();
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
        return data;
    }
}