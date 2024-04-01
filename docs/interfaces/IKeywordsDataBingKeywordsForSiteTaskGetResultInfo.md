[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordsForSiteTaskGetResultInfo

# Interface: IKeywordsDataBingKeywordsForSiteTaskGetResultInfo

## Implemented by

- [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../classes/KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#categories)
- [competition](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#competition)
- [cpc](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#cpc)
- [device](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#device)
- [keyword](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#keyword)
- [language\_code](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#language_code)
- [location\_code](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#location_code)
- [monthly\_searches](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_volume)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Defined in

main.ts:129710

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

main.ts:129699

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data the value is null

#### Defined in

main.ts:129703

___

### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:129691

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:129680

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data the value is null

#### Defined in

main.ts:129686

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data the value is null

#### Defined in

main.ts:129683

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
search volume is rounded to the closest decimal values
if there is no data the value is null

#### Defined in

main.ts:129715

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Defined in

main.ts:129688

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea on Bing search engine depending on the user’s targeting
if there is no data then the value is null

#### Defined in

main.ts:129707
