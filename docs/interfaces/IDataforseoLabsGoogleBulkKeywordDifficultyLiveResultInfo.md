[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

# Interface: IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../classes/DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](../classes/DataforseoLabsBBulkKeywordDifficultyLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Defined in

[main.ts:82515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82515)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:82513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82513)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:82509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82509)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:82506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82506)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:82503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82503)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:82511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82511)
