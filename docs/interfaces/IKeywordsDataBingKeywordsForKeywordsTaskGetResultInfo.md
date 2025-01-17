[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

# Interface: IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

Defined in: main.ts:143519

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:143551

product and service categories
legacy field, the value will always be null

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:143539

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:143543

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:143531

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:143521

keyword in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:143525

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:143523

location code in a POST array

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:143555

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:143527

indicates whether data from partner networks included in the response

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:143548

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targeting
search volume is rounded to the closest decimal values
if there is no data, then the value is null
