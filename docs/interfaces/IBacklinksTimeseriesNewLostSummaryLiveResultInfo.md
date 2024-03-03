[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksTimeseriesNewLostSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesNewLostSummaryLiveResultInfo

## Implemented by

- [`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](../classes/BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_from)
- [date\_to](IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_to)
- [group\_range](IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#group_range)
- [items](IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items)
- [items\_count](IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items_count)
- [target](IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#target)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Defined in

main.ts:139315

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:139320

___

### group\_range

• `Optional` **group\_range**: `string`

group_range from the POST array

#### Defined in

main.ts:139322

___

### items

• `Optional` **items**: [`BacklinksTimeseriesNewLostSummaryLiveItem`](../classes/BacklinksTimeseriesNewLostSummaryLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Defined in

main.ts:139326

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:139324

___

### target

• `Optional` **target**: `string`

target from a POST array

#### Defined in

main.ts:139310
