**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataBingSearchVolumeLiveResultInfo

# Interface: IKeywordsDataBingSearchVolumeLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### categories?

> **`optional`** **categories**: `string`[]

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Source

main.ts:132707

***

### competition?

> **`optional`** **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Source

main.ts:132695

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Source

main.ts:132699

***

### device?

> **`optional`** **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Source

main.ts:132688

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Source

main.ts:132677

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:132683

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:132680

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Source

main.ts:132711

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Source

main.ts:132685

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting;
search volume is rounded to the nearest tens;
if there is no data, the value is null

#### Source

main.ts:132704
