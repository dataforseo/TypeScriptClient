[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksTimeseriesNewLostSummaryLiveItem

# Interface: IBacklinksTimeseriesNewLostSummaryLiveItem

## Implemented by

- [`BacklinksTimeseriesNewLostSummaryLiveItem`](../classes/BacklinksTimeseriesNewLostSummaryLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date](IBacklinksTimeseriesNewLostSummaryLiveItem.md#date)
- [lost\_backlinks](IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_backlinks)
- [lost\_referring\_domains](IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_domains)
- [lost\_referring\_main\_domains](IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_main_domains)
- [new\_backlinks](IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_backlinks)
- [new\_referring\_domains](IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_domains)
- [new\_referring\_main\_domains](IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_main_domains)
- [type](IBacklinksTimeseriesNewLostSummaryLiveItem.md#type)

## Properties

### date

• `Optional` **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:144491

___

### lost\_backlinks

• `Optional` **lost\_backlinks**: `number`

number of lost backlinks
number of lost backlinks of the target

#### Defined in

main.ts:144497

___

### lost\_referring\_domains

• `Optional` **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Defined in

main.ts:144503

___

### lost\_referring\_main\_domains

• `Optional` **lost\_referring\_main\_domains**: `number`

number of lost referring main domains
number of lost referring main domains of the target

#### Defined in

main.ts:144509

___

### new\_backlinks

• `Optional` **new\_backlinks**: `number`

number of new backlinks
number of new backlinks pointing to the target

#### Defined in

main.ts:144494

___

### new\_referring\_domains

• `Optional` **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Defined in

main.ts:144500

___

### new\_referring\_main\_domains

• `Optional` **new\_referring\_main\_domains**: `number`

number of new referring main domains
number of new referring main domains pointing to the target

#### Defined in

main.ts:144506

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:144486
