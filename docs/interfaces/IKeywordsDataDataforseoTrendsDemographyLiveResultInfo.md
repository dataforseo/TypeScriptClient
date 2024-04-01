[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataDataforseoTrendsDemographyLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsDemographyLiveResultInfo

## Implemented by

- [`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../classes/KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#datetime)
- [items](IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items)
- [items\_count](IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items_count)
- [keywords](IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#keywords)
- [language\_code](IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#location_code)
- [type](IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:126689

___

### items

• `Optional` **items**: [`DataforseoTrendsDemographyInfo`](../classes/DataforseoTrendsDemographyInfo.md)[]

contains keyword popularity and related data

#### Defined in

main.ts:126693

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:126691

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

main.ts:126676

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:126684

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:126681

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:126678
