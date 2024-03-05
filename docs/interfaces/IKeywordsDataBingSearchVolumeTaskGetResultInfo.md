[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataBingSearchVolumeTaskGetResultInfo

# Interface: IKeywordsDataBingSearchVolumeTaskGetResultInfo

## Implemented by

- [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](../classes/KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#categories)
- [competition](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#competition)
- [cpc](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#cpc)
- [device](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#device)
- [keyword](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#keyword)
- [language\_code](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#language_code)
- [location\_code](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#location_code)
- [monthly\_searches](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_volume)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Defined in

[main.ts:123000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123000)

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

[main.ts:122988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122988)

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Defined in

[main.ts:122992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122992)

___

### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:122980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122980)

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:122971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122971)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:122975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122975)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:122973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122973)

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Defined in

[main.ts:123004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123004)

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Defined in

[main.ts:122977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122977)

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine, depending on the user’s targeting
search volume is rounded to the nearest tens
if there is no data then the value is null

#### Defined in

[main.ts:122997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122997)
