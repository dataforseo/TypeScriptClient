[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksHistoryLiveResultInfo

# Interface: IBacklinksHistoryLiveResultInfo

## Implemented by

- [`BacklinksHistoryLiveResultInfo`](../classes/BacklinksHistoryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IBacklinksHistoryLiveResultInfo.md#date_from)
- [date\_to](IBacklinksHistoryLiveResultInfo.md#date_to)
- [items](IBacklinksHistoryLiveResultInfo.md#items)
- [items\_count](IBacklinksHistoryLiveResultInfo.md#items_count)
- [target](IBacklinksHistoryLiveResultInfo.md#target)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Defined in

main.ts:135816

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:135821

___

### items

• `Optional` **items**: [`BacklinksHistoryLiveItem`](../classes/BacklinksHistoryLiveItem.md)[]

contains historical backlink data for the specified domain
the data is provided month-by-month;
the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month

#### Defined in

main.ts:135827

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:135823

___

### target

• `Optional` **target**: `string`

target from the POST array

#### Defined in

main.ts:135811
