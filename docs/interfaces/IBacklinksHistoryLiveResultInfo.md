**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksHistoryLiveResultInfo

# Interface: IBacklinksHistoryLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Source

main.ts:137073

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Source

main.ts:137078

***

### items?

> **`optional`** **items**: [`BacklinksHistoryLiveItem`](../classes/BacklinksHistoryLiveItem.md)[]

contains historical backlink data for the specified domain
the data is provided month-by-month;
the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month

#### Source

main.ts:137084

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:137080

***

### target?

> **`optional`** **target**: `string`

target from the POST array

#### Source

main.ts:137068
