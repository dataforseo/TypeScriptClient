[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataDataforseoTrendsExploreLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsExploreLiveResultInfo

## Implemented by

- [`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](../classes/KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#datetime)
- [items](IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items)
- [items\_count](IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items_count)
- [keywords](IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#keywords)
- [language\_code](IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#location_code)
- [type](IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:125101

___

### items

• `Optional` **items**: [`BaseDataforseoTrendsItem`](../classes/BaseDataforseoTrendsItem.md)[]

contains keyword popularity and related data

#### Defined in

main.ts:125105

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:125103

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

main.ts:125088

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:125096

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:125093

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:125090
