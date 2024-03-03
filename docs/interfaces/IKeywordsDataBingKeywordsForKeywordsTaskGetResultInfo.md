[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

# Interface: IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

## Implemented by

- [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../classes/KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#categories)
- [competition](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#competition)
- [cpc](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#cpc)
- [device](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#device)
- [keyword](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#keyword)
- [language\_code](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#language_code)
- [location\_code](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#location_code)
- [monthly\_searches](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Defined in

main.ts:125842

___

### competition

• `Optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Defined in

main.ts:125830

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Defined in

main.ts:125834

___

### device

• `Optional` **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Defined in

main.ts:125822

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:125812

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:125816

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:125814

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Defined in

main.ts:125846

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Defined in

main.ts:125818

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targeting
search volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Defined in

main.ts:125839
