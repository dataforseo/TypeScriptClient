[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

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

main.ts:102469

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:102467

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:102463

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:102460

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:102457

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:102465
