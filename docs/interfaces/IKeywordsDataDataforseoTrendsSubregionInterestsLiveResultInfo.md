[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

## Implemented by

- [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../classes/KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#datetime)
- [items](IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items)
- [items\_count](IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items_count)
- [keywords](IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#keywords)
- [language\_code](IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#location_code)
- [type](IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:125918

___

### items

• `Optional` **items**: [`BaseDataforseoTrendsItem`](../classes/BaseDataforseoTrendsItem.md)[]

keyword popularity values per location
values in this array represent percentages relative to the maximum value within each region

#### Defined in

main.ts:125923

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:125920

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

main.ts:125905

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:125913

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:125910

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:125907
