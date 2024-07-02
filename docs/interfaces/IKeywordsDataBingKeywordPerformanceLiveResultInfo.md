**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataBingKeywordPerformanceLiveResultInfo

# Interface: IKeywordsDataBingKeywordPerformanceLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Source

main.ts:135835

***

### keyword\_kpi?

> **`optional`** **keyword\_kpi**: [`KeywordKpi`](../classes/KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Source

main.ts:135852

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:135841

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:135838

***

### month?

> **`optional`** **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Source

main.ts:135849

***

### year?

> **`optional`** **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Source

main.ts:135845
