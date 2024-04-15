**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesSummaryLiveResultInfo

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

main.ts:144292

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Source

main.ts:144297

***

### group\_range?

> **`optional`** **group\_range**: `string`

group_range from a POST array

#### Source

main.ts:144299

***

### items?

> **`optional`** **items**: [`BacklinksTimeseriesSummaryLiveItem`](../classes/BacklinksTimeseriesSummaryLiveItem.md)[]

contains relevant summary data

#### Source

main.ts:144303

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:144301

***

### target?

> **`optional`** **target**: `string`

target from a POST array

#### Source

main.ts:144287
