[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataBingKeywordPerformanceLiveResultInfo

# Interface: IKeywordsDataBingKeywordPerformanceLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:133720

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](../classes/KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Defined in

main.ts:133737

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:133726

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:133723

***

### month?

> `optional` **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Defined in

main.ts:133734

***

### year?

> `optional` **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Defined in

main.ts:133730
