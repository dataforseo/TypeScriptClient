[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordsForSiteLiveResultInfo

# Interface: IKeywordsDataBingKeywordsForSiteLiveResultInfo

## Implemented by

- [`KeywordsDataBingKeywordsForSiteLiveResultInfo`](../classes/KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#categories)
- [competition](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#competition)
- [cpc](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#cpc)
- [device](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#device)
- [keyword](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#keyword)
- [language\_code](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#location_code)
- [monthly\_searches](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_volume)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Defined in

[main.ts:124840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124840)

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

[main.ts:124830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124830)

___


### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Defined in

[main.ts:124834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124834)

___


### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:124823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124823)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:124814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124814)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:124818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124818)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:124816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124816)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Defined in

[main.ts:124844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124844)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Defined in

[main.ts:124820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124820)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal valuesif there is no data, then the value is null

#### Defined in

[main.ts:124837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124837)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")