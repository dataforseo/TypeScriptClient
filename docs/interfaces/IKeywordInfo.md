[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKeywordInfo

# Interface: IKeywordInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `number`[]

product and service categories
you can download the full list of possible categories

#### Defined in

main.ts:84103

***

### competition?

> `optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive)

#### Defined in

main.ts:84080

***

### competition\_level?

> `optional` **competition\_level**: `string`

competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Defined in

main.ts:84086

***

### cpc?

> `optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword

#### Defined in

main.ts:84089

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

main.ts:84100

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:84077

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

main.ts:84096

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

#### Defined in

main.ts:84106

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:84072

***

### search\_volume?

> `optional` **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com

#### Defined in

main.ts:84092
