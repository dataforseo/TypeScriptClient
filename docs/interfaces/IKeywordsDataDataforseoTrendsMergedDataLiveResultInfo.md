[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo

## Implemented by

- [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../classes/KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#datetime)
- [items](IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items)
- [items\_count](IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items_count)
- [keywords](IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#keywords)
- [language\_code](IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#location_code)
- [type](IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:127171

___

### items

• `Optional` **items**: [`BaseDataforseoTrendsItem`](../classes/BaseDataforseoTrendsItem.md)[]

contains keyword popularity and related data

#### Defined in

main.ts:127175

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:127173

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

main.ts:127158

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:127166

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:127163

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:127160
