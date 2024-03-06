[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

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

[main.ts:127411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127411)

___


### keyword\_kpi

• `Optional` **keyword\_kpi**: [`KeywordKpi`](../classes/KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Defined in

[main.ts:127428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127428)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:127417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127417)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:127414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127414)

___


### month

• `Optional` **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Defined in

[main.ts:127425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127425)

___


### year

• `Optional` **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Defined in

[main.ts:127421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127421)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")