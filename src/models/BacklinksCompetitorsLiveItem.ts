export interface IBacklinksCompetitorsLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** competitor domain */
        target?: string | undefined
        
        /** domain rank
domain rank across all domains in the database
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */
        rank?: number | undefined
        
        /** indicates the number of backlink intersections with the target specified in the POST array */
        intersections?: number | undefined

    [key: string]: any;

    }

export class BacklinksCompetitorsLiveItem  implements IBacklinksCompetitorsLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** competitor domain */

    target?: string | undefined;

    
    /** domain rank
domain rank across all domains in the database
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */

    rank?: number | undefined;

    
    /** indicates the number of backlink intersections with the target specified in the POST array */

    intersections?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksCompetitorsLiveItem) {

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
            this.target = data["target"];
            this.rank = data["rank"];
            this.intersections = data["intersections"];
        }
    }

    static fromJS(data: any): BacklinksCompetitorsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksCompetitorsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["target"] = this.target;
        data["rank"] = this.rank;
        data["intersections"] = this.intersections;
        return data;
    }
}