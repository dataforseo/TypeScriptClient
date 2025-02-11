[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesSummaryLiveResultInfo

Defined in: main.ts:159821

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:159828

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:159833

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### group\_range?

> `optional` **group\_range**: `string`

Defined in: main.ts:159835

group_range from a POST array

***

### items?

> `optional` **items**: [`BacklinksTimeseriesSummaryLiveItem`](../classes/BacklinksTimeseriesSummaryLiveItem.md)[]

Defined in: main.ts:159839

contains relevant summary data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:159837

the number of results returned in the items array

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:159823

target from a POST array
