export interface IGoogleFinanceMetricsBundleInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** *date and time of the value readout* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2025-02-10 09:40:00 +00:00` */
        timestamp?: string | undefined
        
        /** *revenue value* */
        revenue?: number | undefined
        
        /** *change in revenue* */
        revenue_delta?: number | undefined
        
        /** *operating expense value* */
        operating_expense?: number | undefined
        
        /** *change in operating expense* */
        operating_expense_delta?: number | undefined
        
        /** *net income value* */
        net_income?: number | undefined
        
        /** *change in net income* */
        net_income_delta?: number | undefined
        
        /** *net profit margin value* */
        net_profit_margin?: number | undefined
        
        /** *change in net profit margin* */
        net_profit_margin_delta?: number | undefined
        
        /** *earnings per share value* */
        earnings_per_share?: number | undefined
        
        /** *change in earnings per share* */
        earnings_per_share_delta?: number | undefined
        
        /** *earnings before interest, taxes, deprecation, amortisation* */
        ebitda?: number | undefined
        
        /** *change in ebitda* */
        ebitda_delta?: number | undefined
        
        /** *effective tax rate value* */
        effective_tax_rate?: number | undefined
        
        /** *cash and short-term investments value* */
        cash_and_short_term_investments?: number | undefined
        
        /** *change in cash and short-term investments* */
        cash_and_short_term_investments_delta?: number | undefined
        
        /** *total assets value* */
        total_assets?: number | undefined
        
        /** *change in total assets* */
        total_assets_delta?: number | undefined
        
        /** *total liabilities value* */
        total_liabilities?: number | undefined
        
        /** *change in total liabilities* */
        total_liabilities_delta?: number | undefined
        
        /** *total equity value* */
        total_equity?: number | undefined
        
        /** *outstanding shares value* */
        shares_outstanding?: number | undefined
        
        /** *price to book* */
        price_to_book?: number | undefined
        
        /** *return on assets* */
        return_on_assets?: number | undefined
        
        /** *return on capital* */
        return_on_capital?: number | undefined
        
        /** *cash from operations* */
        cash_from_operations?: number | undefined
        
        /** *change in cash from operations* */
        cash_from_operations_delta?: number | undefined
        
        /** *cash from investing* */
        cash_from_investing?: number | undefined
        
        /** *change in cash from investing* */
        cash_from_investing_delta?: number | undefined
        
        /** cash from financing/em> */
        cash_from_financing?: number | undefined
        
        /** *change in cash from financing* */
        cash_from_financing_delta?: number | undefined
        
        /** *net change in cash* */
        net_change_in_cash?: number | undefined
        
        /** *change in net change in cash* */
        net_change_in_cash_delta?: number | undefined
        
        /** *free cash flow value* */
        free_cash_flow?: number | undefined
        
        /** *change in free cash flow* */
        free_cash_flow_delta?: number | undefined

    [key: string]: any;

    }

export class GoogleFinanceMetricsBundleInfo  implements IGoogleFinanceMetricsBundleInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** *date and time of the value readout* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2025-02-10 09:40:00 +00:00` */

    timestamp?: string | undefined;

    
    /** *revenue value* */

    revenue?: number | undefined;

    
    /** *change in revenue* */

    revenue_delta?: number | undefined;

    
    /** *operating expense value* */

    operating_expense?: number | undefined;

    
    /** *change in operating expense* */

    operating_expense_delta?: number | undefined;

    
    /** *net income value* */

    net_income?: number | undefined;

    
    /** *change in net income* */

    net_income_delta?: number | undefined;

    
    /** *net profit margin value* */

    net_profit_margin?: number | undefined;

    
    /** *change in net profit margin* */

    net_profit_margin_delta?: number | undefined;

    
    /** *earnings per share value* */

    earnings_per_share?: number | undefined;

    
    /** *change in earnings per share* */

    earnings_per_share_delta?: number | undefined;

    
    /** *earnings before interest, taxes, deprecation, amortisation* */

    ebitda?: number | undefined;

    
    /** *change in ebitda* */

    ebitda_delta?: number | undefined;

    
    /** *effective tax rate value* */

    effective_tax_rate?: number | undefined;

    
    /** *cash and short-term investments value* */

    cash_and_short_term_investments?: number | undefined;

    
    /** *change in cash and short-term investments* */

    cash_and_short_term_investments_delta?: number | undefined;

    
    /** *total assets value* */

    total_assets?: number | undefined;

    
    /** *change in total assets* */

    total_assets_delta?: number | undefined;

    
    /** *total liabilities value* */

    total_liabilities?: number | undefined;

    
    /** *change in total liabilities* */

    total_liabilities_delta?: number | undefined;

    
    /** *total equity value* */

    total_equity?: number | undefined;

    
    /** *outstanding shares value* */

    shares_outstanding?: number | undefined;

    
    /** *price to book* */

    price_to_book?: number | undefined;

    
    /** *return on assets* */

    return_on_assets?: number | undefined;

    
    /** *return on capital* */

    return_on_capital?: number | undefined;

    
    /** *cash from operations* */

    cash_from_operations?: number | undefined;

    
    /** *change in cash from operations* */

    cash_from_operations_delta?: number | undefined;

    
    /** *cash from investing* */

    cash_from_investing?: number | undefined;

    
    /** *change in cash from investing* */

    cash_from_investing_delta?: number | undefined;

    
    /** cash from financing/em> */

    cash_from_financing?: number | undefined;

    
    /** *change in cash from financing* */

    cash_from_financing_delta?: number | undefined;

    
    /** *net change in cash* */

    net_change_in_cash?: number | undefined;

    
    /** *change in net change in cash* */

    net_change_in_cash_delta?: number | undefined;

    
    /** *free cash flow value* */

    free_cash_flow?: number | undefined;

    
    /** *change in free cash flow* */

    free_cash_flow_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceMetricsBundleInfo) {

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
            this.timestamp = data["timestamp"];
            this.revenue = data["revenue"];
            this.revenue_delta = data["revenue_delta"];
            this.operating_expense = data["operating_expense"];
            this.operating_expense_delta = data["operating_expense_delta"];
            this.net_income = data["net_income"];
            this.net_income_delta = data["net_income_delta"];
            this.net_profit_margin = data["net_profit_margin"];
            this.net_profit_margin_delta = data["net_profit_margin_delta"];
            this.earnings_per_share = data["earnings_per_share"];
            this.earnings_per_share_delta = data["earnings_per_share_delta"];
            this.ebitda = data["ebitda"];
            this.ebitda_delta = data["ebitda_delta"];
            this.effective_tax_rate = data["effective_tax_rate"];
            this.cash_and_short_term_investments = data["cash_and_short_term_investments"];
            this.cash_and_short_term_investments_delta = data["cash_and_short_term_investments_delta"];
            this.total_assets = data["total_assets"];
            this.total_assets_delta = data["total_assets_delta"];
            this.total_liabilities = data["total_liabilities"];
            this.total_liabilities_delta = data["total_liabilities_delta"];
            this.total_equity = data["total_equity"];
            this.shares_outstanding = data["shares_outstanding"];
            this.price_to_book = data["price_to_book"];
            this.return_on_assets = data["return_on_assets"];
            this.return_on_capital = data["return_on_capital"];
            this.cash_from_operations = data["cash_from_operations"];
            this.cash_from_operations_delta = data["cash_from_operations_delta"];
            this.cash_from_investing = data["cash_from_investing"];
            this.cash_from_investing_delta = data["cash_from_investing_delta"];
            this.cash_from_financing = data["cash_from_financing"];
            this.cash_from_financing_delta = data["cash_from_financing_delta"];
            this.net_change_in_cash = data["net_change_in_cash"];
            this.net_change_in_cash_delta = data["net_change_in_cash_delta"];
            this.free_cash_flow = data["free_cash_flow"];
            this.free_cash_flow_delta = data["free_cash_flow_delta"];
        }
    }

    static fromJS(data: any): GoogleFinanceMetricsBundleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceMetricsBundleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["timestamp"] = this.timestamp;
        data["revenue"] = this.revenue;
        data["revenue_delta"] = this.revenue_delta;
        data["operating_expense"] = this.operating_expense;
        data["operating_expense_delta"] = this.operating_expense_delta;
        data["net_income"] = this.net_income;
        data["net_income_delta"] = this.net_income_delta;
        data["net_profit_margin"] = this.net_profit_margin;
        data["net_profit_margin_delta"] = this.net_profit_margin_delta;
        data["earnings_per_share"] = this.earnings_per_share;
        data["earnings_per_share_delta"] = this.earnings_per_share_delta;
        data["ebitda"] = this.ebitda;
        data["ebitda_delta"] = this.ebitda_delta;
        data["effective_tax_rate"] = this.effective_tax_rate;
        data["cash_and_short_term_investments"] = this.cash_and_short_term_investments;
        data["cash_and_short_term_investments_delta"] = this.cash_and_short_term_investments_delta;
        data["total_assets"] = this.total_assets;
        data["total_assets_delta"] = this.total_assets_delta;
        data["total_liabilities"] = this.total_liabilities;
        data["total_liabilities_delta"] = this.total_liabilities_delta;
        data["total_equity"] = this.total_equity;
        data["shares_outstanding"] = this.shares_outstanding;
        data["price_to_book"] = this.price_to_book;
        data["return_on_assets"] = this.return_on_assets;
        data["return_on_capital"] = this.return_on_capital;
        data["cash_from_operations"] = this.cash_from_operations;
        data["cash_from_operations_delta"] = this.cash_from_operations_delta;
        data["cash_from_investing"] = this.cash_from_investing;
        data["cash_from_investing_delta"] = this.cash_from_investing_delta;
        data["cash_from_financing"] = this.cash_from_financing;
        data["cash_from_financing_delta"] = this.cash_from_financing_delta;
        data["net_change_in_cash"] = this.net_change_in_cash;
        data["net_change_in_cash_delta"] = this.net_change_in_cash_delta;
        data["free_cash_flow"] = this.free_cash_flow;
        data["free_cash_flow_delta"] = this.free_cash_flow_delta;
        return data;
    }
}