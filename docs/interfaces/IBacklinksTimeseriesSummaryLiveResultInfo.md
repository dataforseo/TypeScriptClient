[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksTimeseriesSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesSummaryLiveResultInfo

## Implemented by

- [`BacklinksTimeseriesSummaryLiveResultInfo`](../classes/BacklinksTimeseriesSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IBacklinksTimeseriesSummaryLiveResultInfo.md#date_from)
- [date\_to](IBacklinksTimeseriesSummaryLiveResultInfo.md#date_to)
- [group\_range](IBacklinksTimeseriesSummaryLiveResultInfo.md#group_range)
- [items](IBacklinksTimeseriesSummaryLiveResultInfo.md#items)
- [items\_count](IBacklinksTimeseriesSummaryLiveResultInfo.md#items_count)
- [target](IBacklinksTimeseriesSummaryLiveResultInfo.md#target)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Defined in

[main.ts:138707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138707)

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

[main.ts:138712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138712)

___

### group\_range

• `Optional` **group\_range**: `string`

group_range from a POST array

#### Defined in

[main.ts:138714](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138714)

___

### items

• `Optional` **items**: [`BacklinksTimeseriesSummaryLiveItem`](../classes/BacklinksTimeseriesSummaryLiveItem.md)[]

contains relevant summary data

#### Defined in

[main.ts:138718](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138718)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:138716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138716)

___

### target

• `Optional` **target**: `string`

target from a POST array

#### Defined in

[main.ts:138702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138702)
