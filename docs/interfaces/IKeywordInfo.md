[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordInfo

# Interface: IKeywordInfo

Defined in: main.ts:92553

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `number`[]

Defined in: main.ts:92586

product and service categories
you can download the full list of possible categories

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:92563

competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive)

***

### competition\_level?

> `optional` **competition\_level**: `string`

Defined in: main.ts:92569

competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:92572

cost-per-click
represents the average cost per click (USD) historically paid for the keyword

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

Defined in: main.ts:92583

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:92560

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

Defined in: main.ts:92579

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:92589

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:92555

search engine type

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:92575

average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com

***

### search\_volume\_trend?

> `optional` **search\_volume\_trend**: [`SearchVolumeTrendInfo`](../classes/SearchVolumeTrendInfo.md)

Defined in: main.ts:92591

search volume trend changes\nrepresents search volume change in percent compared to the previous period
