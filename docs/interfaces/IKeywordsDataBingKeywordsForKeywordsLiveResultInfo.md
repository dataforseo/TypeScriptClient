[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingKeywordsForKeywordsLiveResultInfo

# Interface: IKeywordsDataBingKeywordsForKeywordsLiveResultInfo

Defined in: main.ts:144205

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:144237

product and service categories
legacy field, the value will always be null

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:144226

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:144230

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:144219

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:144207

keyword in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:144213

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:144210

location code in a POST array
if there is no data, then the value is null

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:144241

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:144215

indicates whether data from partner networks is included in the response

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:144234

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal values
if there is no data, then the value is null
