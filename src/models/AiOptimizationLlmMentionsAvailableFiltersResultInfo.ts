export interface IAiOptimizationLlmMentionsAvailableFiltersResultInfo   {
        
        search?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsAvailableFiltersResultInfo  implements IAiOptimizationLlmMentionsAvailableFiltersResultInfo {

    search?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsAvailableFiltersResultInfo) {

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
            this.search = data["search"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search"] = this.search;
        return data;
    }
}