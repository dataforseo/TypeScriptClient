**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataBingKeywordsForSiteTaskGetResultInfo

# Interface: IKeywordsDataBingKeywordsForSiteTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### categories?

> **`optional`** **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Source

main.ts:133556

***

### competition?

> **`optional`** **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Source

main.ts:133545

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data the value is null

#### Source

main.ts:133549

***

### device?

> **`optional`** **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Source

main.ts:133537

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Source

main.ts:133526

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data the value is null

#### Source

main.ts:133532

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data the value is null

#### Source

main.ts:133529

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
search volume is rounded to the closest decimal values
if there is no data the value is null

#### Source

main.ts:133561

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Source

main.ts:133534

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea on Bing search engine depending on the user’s targeting
if there is no data then the value is null

#### Source

main.ts:133553
