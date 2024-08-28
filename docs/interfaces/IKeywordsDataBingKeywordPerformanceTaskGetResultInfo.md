[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

# Interface: IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:136458

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](../classes/KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Defined in

main.ts:136475

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:136464

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:136461

***

### month?

> `optional` **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Defined in

main.ts:136472

***

### year?

> `optional` **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Defined in

main.ts:136468
