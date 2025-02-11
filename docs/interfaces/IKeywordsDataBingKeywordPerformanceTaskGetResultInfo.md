[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

# Interface: IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

Defined in: main.ts:145436

## Indexable

\[`key`: `string`\]: `any`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:145438

keyword in a POST array

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](../classes/KeywordKpi.md)

Defined in: main.ts:145455

object containing keyword metrics
if there is no data, then the value is null

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:145444

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:145441

location code in a POST array
if there is no data, then the value is null

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:145452

indicates the month for which the data is provided for
example:
10

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:145448

indicates the year for which the data is provided for
example:
2020
