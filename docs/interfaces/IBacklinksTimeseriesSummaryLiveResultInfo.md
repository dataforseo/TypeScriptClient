[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBacklinksTimeseriesSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesSummaryLiveResultInfo

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

main.ts:151492

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:151497

***

### group\_range?

> `optional` **group\_range**: `string`

group_range from a POST array

#### Defined in

main.ts:151499

***

### items?

> `optional` **items**: [`BacklinksTimeseriesSummaryLiveItem`](../classes/BacklinksTimeseriesSummaryLiveItem.md)[]

contains relevant summary data

#### Defined in

main.ts:151503

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:151501

***

### target?

> `optional` **target**: `string`

target from a POST array

#### Defined in

main.ts:151487
