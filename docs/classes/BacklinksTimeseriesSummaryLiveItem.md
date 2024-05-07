**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksTimeseriesSummaryLiveItem

# Class: BacklinksTimeseriesSummaryLiveItem

## Implements

- [`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesSummaryLiveItem(data)

> **new BacklinksTimeseriesSummaryLiveItem**(`data`?): [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md)

#### Returns

[`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Source

main.ts:145110

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

number of backlinks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`backlinks`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#backlinks)

#### Source

main.ts:145086

***

### backlinks\_nofollow?

> **`optional`** **backlinks\_nofollow**: `number`

number of nofollow backlinks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`backlinks_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#backlinks_nofollow)

#### Source

main.ts:145088

***

### date?

> **`optional`** **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`date`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#date)

#### Source

main.ts:145081

***

### rank?

> **`optional`** **rank**: `number`

target rank for the given date
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`rank`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#rank)

#### Source

main.ts:145084

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

number of referring domains for the given date
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_domains)

#### Source

main.ts:145095

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_domains_nofollow)

#### Source

main.ts:145097

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses for the given date
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_ips)

#### Source

main.ts:145104

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

number of referring main domains for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains)

#### Source

main.ts:145099

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains_nofollow)

#### Source

main.ts:145101

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

number of pages pointing to target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_pages)

#### Source

main.ts:145090

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_pages_nofollow)

#### Source

main.ts:145092

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_subnets)

#### Source

main.ts:145106

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`type`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#type)

#### Source

main.ts:145076

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:145119

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:145148

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Source

main.ts:145141
