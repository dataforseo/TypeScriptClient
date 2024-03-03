[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksTimeseriesSummaryLiveItem

# Interface: IBacklinksTimeseriesSummaryLiveItem

## Implemented by

- [`BacklinksTimeseriesSummaryLiveItem`](../classes/BacklinksTimeseriesSummaryLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IBacklinksTimeseriesSummaryLiveItem.md#backlinks)
- [backlinks\_nofollow](IBacklinksTimeseriesSummaryLiveItem.md#backlinks_nofollow)
- [date](IBacklinksTimeseriesSummaryLiveItem.md#date)
- [rank](IBacklinksTimeseriesSummaryLiveItem.md#rank)
- [referring\_domains](IBacklinksTimeseriesSummaryLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](IBacklinksTimeseriesSummaryLiveItem.md#referring_domains_nofollow)
- [referring\_ips](IBacklinksTimeseriesSummaryLiveItem.md#referring_ips)
- [referring\_main\_domains](IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains_nofollow)
- [referring\_pages](IBacklinksTimeseriesSummaryLiveItem.md#referring_pages)
- [referring\_subnets](IBacklinksTimeseriesSummaryLiveItem.md#referring_subnets)
- [type](IBacklinksTimeseriesSummaryLiveItem.md#type)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

number of backlinks for the given date

#### Defined in

main.ts:138744

___

### backlinks\_nofollow

• `Optional` **backlinks\_nofollow**: `number`

number of nofollow backlinks for the given date

#### Defined in

main.ts:138746

___

### date

• `Optional` **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:138739

___

### rank

• `Optional` **rank**: `number`

target rank for the given date
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:138742

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains for the given date
referring domains include subdomains that are counted as separate domains for this metric

#### Defined in

main.ts:138751

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target for the given date

#### Defined in

main.ts:138753

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses for the given date
number of IP addresses pointing to this page

#### Defined in

main.ts:138760

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains for the given date

#### Defined in

main.ts:138755

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target for the given date

#### Defined in

main.ts:138757

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

number of pages pointing to target for the given date

#### Defined in

main.ts:138748

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks for the given date

#### Defined in

main.ts:138762

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:138734
