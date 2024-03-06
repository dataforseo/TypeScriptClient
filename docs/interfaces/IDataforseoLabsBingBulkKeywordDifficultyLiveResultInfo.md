[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

# Interface: IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

## Implemented by

- [`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../classes/DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](../classes/DataforseoLabsBBulkKeywordDifficultyLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Defined in

[main.ts:102325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102325)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:102323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102323)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:102319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102319)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:102316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102316)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:102313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102313)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:102321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102321)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")