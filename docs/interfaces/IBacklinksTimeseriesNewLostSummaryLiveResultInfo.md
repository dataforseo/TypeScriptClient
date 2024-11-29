[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesNewLostSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesNewLostSummaryLiveResultInfo

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

main.ts:160072

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:160077

***

### group\_range?

> `optional` **group\_range**: `string`

group_range from the POST array

#### Defined in

main.ts:160079

***

### items?

> `optional` **items**: [`BacklinksTimeseriesNewLostSummaryLiveItem`](../classes/BacklinksTimeseriesNewLostSummaryLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Defined in

main.ts:160083

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:160081

***

### target?

> `optional` **target**: `string`

target from a POST array

#### Defined in

main.ts:160067
