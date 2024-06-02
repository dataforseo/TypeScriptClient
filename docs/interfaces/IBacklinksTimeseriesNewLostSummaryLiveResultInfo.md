**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesNewLostSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesNewLostSummaryLiveResultInfo

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

main.ts:145879

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Source

main.ts:145884

***

### group\_range?

> **`optional`** **group\_range**: `string`

group_range from the POST array

#### Source

main.ts:145886

***

### items?

> **`optional`** **items**: [`BacklinksTimeseriesNewLostSummaryLiveItem`](../classes/BacklinksTimeseriesNewLostSummaryLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Source

main.ts:145890

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:145888

***

### target?

> **`optional`** **target**: `string`

target from a POST array

#### Source

main.ts:145874
