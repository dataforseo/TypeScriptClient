[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataBingKeywordsForKeywordsLiveResultInfo

# Interface: IKeywordsDataBingKeywordsForKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Defined in

main.ts:135263

***

### competition?

> `optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Defined in

main.ts:135252

***

### cpc?

> `optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Defined in

main.ts:135256

***

### device?

> `optional` **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Defined in

main.ts:135245

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:135233

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:135239

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:135236

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Defined in

main.ts:135267

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

indicates whether data from partner networks is included in the response

#### Defined in

main.ts:135241

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Defined in

main.ts:135260
