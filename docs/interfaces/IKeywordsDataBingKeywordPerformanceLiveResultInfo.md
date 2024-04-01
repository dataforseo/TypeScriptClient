[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordPerformanceLiveResultInfo

# Interface: IKeywordsDataBingKeywordPerformanceLiveResultInfo

## Implemented by

- [`KeywordsDataBingKeywordPerformanceLiveResultInfo`](../classes/KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keyword](IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword)
- [keyword\_kpi](IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword_kpi)
- [language\_code](IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#location_code)
- [month](IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#month)
- [year](IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#year)

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:133174

___

### keyword\_kpi

• `Optional` **keyword\_kpi**: [`KeywordKpi`](../classes/KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Defined in

main.ts:133191

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:133180

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:133177

___

### month

• `Optional` **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Defined in

main.ts:133188

___

### year

• `Optional` **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Defined in

main.ts:133184
