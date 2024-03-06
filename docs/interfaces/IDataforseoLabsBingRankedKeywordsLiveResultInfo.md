[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsBingRankedKeywordsLiveResultInfo

## Implemented by

- [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](../classes/DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#location_code)
- [metrics](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics)
- [metrics\_absolute](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics_absolute)
- [se\_type](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#se_type)
- [target](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBingRankedKeywordsLiveItem`](../classes/DataforseoLabsBingRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Defined in

[main.ts:105505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105505)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:105497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105497)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:105493](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105493)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:105490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105490)

___


### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

[main.ts:105500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105500)

___


### metrics\_absolute

• `Optional` **metrics\_absolute**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

[main.ts:105503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105503)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:105485](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105485)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

[main.ts:105487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105487)

___


### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

[main.ts:105495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105495)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")