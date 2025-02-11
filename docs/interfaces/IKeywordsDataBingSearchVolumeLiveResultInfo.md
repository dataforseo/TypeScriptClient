[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingSearchVolumeLiveResultInfo

# Interface: IKeywordsDataBingSearchVolumeLiveResultInfo

Defined in: main.ts:139899

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:139931

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:139919

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:139923

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:139912

device type in a POST array
if there is no data, then the value is null

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:139901

keyword in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:139907

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:139904

location code in a POST array
if there is no data, then the value is null

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:139935

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:139909

indicates whether data from partner networks included in the response

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:139928

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting;
search volume is rounded to the nearest tens;
if there is no data, the value is null
