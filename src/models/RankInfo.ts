export interface IRankInfo   {
        
        /** page rank
page_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm;
learn more about the metric and how it is calculated in this help center article */
        page_rank?: number | undefined
        
        /** average main domain rank
learn more about the metric and its calculation formula in this help center article */
        main_domain_rank?: number | undefined

    [key: string]: any;

    }

export class RankInfo  implements IRankInfo {

    
    /** page rank
page_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm;
learn more about the metric and how it is calculated in this help center article */

    page_rank?: number | undefined;

    
    /** average main domain rank
learn more about the metric and its calculation formula in this help center article */

    main_domain_rank?: number | undefined;

    [key: string]: any;


    constructor(data?: IRankInfo) {

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
            this.page_rank = data["page_rank"];
            this.main_domain_rank = data["main_domain_rank"];
        }
    }

    static fromJS(data: any): RankInfo {
        data = typeof data === 'object' ? data : {};


        let result = new RankInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["page_rank"] = this.page_rank;
        data["main_domain_rank"] = this.main_domain_rank;
        return data;
    }
}