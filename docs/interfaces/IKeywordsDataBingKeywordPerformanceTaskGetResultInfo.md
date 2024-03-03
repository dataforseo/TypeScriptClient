[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

# Interface: IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

## Implemented by

- [`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../classes/KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keyword](IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword)
- [keyword\_kpi](IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword_kpi)
- [language\_code](IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#language_code)
- [location\_code](IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#location_code)
- [month](IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#month)
- [year](IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#year)

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:127555

___

### keyword\_kpi

• `Optional` **keyword\_kpi**: [`KeywordKpi`](../classes/KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Defined in

main.ts:127572

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:127561

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:127558

___

### month

• `Optional` **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Defined in

main.ts:127569

___

### year

• `Optional` **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Defined in

main.ts:127565
