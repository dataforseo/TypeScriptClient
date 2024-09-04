[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksHistoryLiveResultInfo

# Interface: IBacklinksHistoryLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Defined in

main.ts:139968

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:139973

***

### items?

> `optional` **items**: [`BacklinksHistoryLiveItem`](../classes/BacklinksHistoryLiveItem.md)[]

contains historical backlink data for the specified domain
the data is provided month-by-month;
the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month

#### Defined in

main.ts:139979

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:139975

***

### target?

> `optional` **target**: `string`

target from the POST array

#### Defined in

main.ts:139963
