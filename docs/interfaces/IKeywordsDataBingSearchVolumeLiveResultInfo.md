[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataBingSearchVolumeLiveResultInfo

# Interface: IKeywordsDataBingSearchVolumeLiveResultInfo

## Implemented by

- [`KeywordsDataBingSearchVolumeLiveResultInfo`](../classes/KeywordsDataBingSearchVolumeLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IKeywordsDataBingSearchVolumeLiveResultInfo.md#categories)
- [competition](IKeywordsDataBingSearchVolumeLiveResultInfo.md#competition)
- [cpc](IKeywordsDataBingSearchVolumeLiveResultInfo.md#cpc)
- [device](IKeywordsDataBingSearchVolumeLiveResultInfo.md#device)
- [keyword](IKeywordsDataBingSearchVolumeLiveResultInfo.md#keyword)
- [language\_code](IKeywordsDataBingSearchVolumeLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataBingSearchVolumeLiveResultInfo.md#location_code)
- [monthly\_searches](IKeywordsDataBingSearchVolumeLiveResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataBingSearchVolumeLiveResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataBingSearchVolumeLiveResultInfo.md#search_volume)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Defined in

main.ts:128863

___

### competition

• `Optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Defined in

main.ts:128851

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Defined in

main.ts:128855

___

### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:128844

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:128833

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:128839

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:128836

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Defined in

main.ts:128867

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Defined in

main.ts:128841

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting;
search volume is rounded to the nearest tens;
if there is no data, the value is null

#### Defined in

main.ts:128860
