export interface IMathSolverExpandedElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the row */
        title?: string | undefined
        
        /** solution of the element
displays steps to solve the mathematical equation as specified in the element */
        solution?: string[] | undefined

    [key: string]: any;

    }

export class MathSolverExpandedElement  implements IMathSolverExpandedElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the row */

    title?: string | undefined;
    
    /** solution of the element
displays steps to solve the mathematical equation as specified in the element */

    solution?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IMathSolverExpandedElement) {

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
            this.solution = data["solution"];
        }
    }

    static fromJS(data: any): MathSolverExpandedElement {
        data = typeof data === 'object' ? data : {};


        let result = new MathSolverExpandedElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["solution"] = this.solution;
        return data;
    }
}