[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingKeywordsForSiteLiveResultInfo

# Interface: IKeywordsDataBingKeywordsForSiteLiveResultInfo

Defined in: main.ts:142657

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:142685

product and service categories
legacy field, the value will always be null

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:142675

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:142679

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:142668

device type in a POST array
if there is no data, then the value is null

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:142659

keyword in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:142663

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:142661

location code in a POST array

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:142689

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:142665

indicates whether data from partner networks included in the response

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:142682

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal valuesif there is no data, then the value is null
