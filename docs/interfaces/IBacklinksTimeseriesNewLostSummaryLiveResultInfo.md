[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesNewLostSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesNewLostSummaryLiveResultInfo

Defined in: main.ts:160297

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:160304

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:160309

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### group\_range?

> `optional` **group\_range**: `string`

Defined in: main.ts:160311

group_range from the POST array

***

### items?

> `optional` **items**: [`BacklinksTimeseriesNewLostSummaryLiveItem`](../classes/BacklinksTimeseriesNewLostSummaryLiveItem.md)[]

Defined in: main.ts:160315

contains relevant backlinks and referring domains data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:160313

the number of results returned in the items array

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:160299

target from a POST array
