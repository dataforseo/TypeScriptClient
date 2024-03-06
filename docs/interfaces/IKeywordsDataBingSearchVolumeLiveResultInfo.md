[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataBingSearchVolumeLiveResultInfo

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

[main.ts:123496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123496)

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

[main.ts:123484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123484)

___


### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Defined in

[main.ts:123488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123488)

___


### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:123477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123477)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:123466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123466)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:123472](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123472)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:123469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123469)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Defined in

[main.ts:123500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123500)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Defined in

[main.ts:123474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123474)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting;
search volume is rounded to the nearest tens;
if there is no data, the value is null

#### Defined in

[main.ts:123493](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123493)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")