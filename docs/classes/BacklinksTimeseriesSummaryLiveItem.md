[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksTimeseriesSummaryLiveItem

# Class: BacklinksTimeseriesSummaryLiveItem

## Implements

- [`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesSummaryLiveItem()

> **new BacklinksTimeseriesSummaryLiveItem**(`data`?): [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md)

#### Returns

[`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Defined in

main.ts:151310

## Properties

### backlinks?

> `optional` **backlinks**: `number`

number of backlinks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`backlinks`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#backlinks)

#### Defined in

main.ts:151286

***

### backlinks\_nofollow?

> `optional` **backlinks\_nofollow**: `number`

number of nofollow backlinks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`backlinks_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#backlinks_nofollow)

#### Defined in

main.ts:151288

***

### date?

> `optional` **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`date`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#date)

#### Defined in

main.ts:151281

***

### rank?

> `optional` **rank**: `number`

target rank for the given date
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`rank`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#rank)

#### Defined in

main.ts:151284

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

number of referring domains for the given date
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_domains)

#### Defined in

main.ts:151295

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:151297

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

number of referring IP addresses for the given date
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_ips)

#### Defined in

main.ts:151304

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

number of referring main domains for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains)

#### Defined in

main.ts:151299

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:151301

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

number of pages pointing to target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_pages)

#### Defined in

main.ts:151290

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_pages_nofollow)

#### Defined in

main.ts:151292

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

number of referring subnetworks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_subnets)

#### Defined in

main.ts:151306

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`type`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#type)

#### Defined in

main.ts:151276

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:151319

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:151348

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Defined in

main.ts:151341
