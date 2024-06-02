**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksTimeseriesNewLostSummaryLiveItem

# Class: BacklinksTimeseriesNewLostSummaryLiveItem

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesNewLostSummaryLiveItem(data)

> **new BacklinksTimeseriesNewLostSummaryLiveItem**(`data`?): [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Source

main.ts:145714

## Properties

### date?

> **`optional`** **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`date`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#date)

#### Source

main.ts:145692

***

### lost\_backlinks?

> **`optional`** **lost\_backlinks**: `number`

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_backlinks)

#### Source

main.ts:145698

***

### lost\_referring\_domains?

> **`optional`** **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_domains)

#### Source

main.ts:145704

***

### lost\_referring\_main\_domains?

> **`optional`** **lost\_referring\_main\_domains**: `number`

number of lost referring main domains
number of lost referring main domains of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_referring_main_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_main_domains)

#### Source

main.ts:145710

***

### new\_backlinks?

> **`optional`** **new\_backlinks**: `number`

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_backlinks)

#### Source

main.ts:145695

***

### new\_referring\_domains?

> **`optional`** **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_domains)

#### Source

main.ts:145701

***

### new\_referring\_main\_domains?

> **`optional`** **new\_referring\_main\_domains**: `number`

number of new referring main domains
number of new referring main domains pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_referring_main_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_main_domains)

#### Source

main.ts:145707

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`type`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#type)

#### Source

main.ts:145687

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:145723

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:145747

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Source

main.ts:145740
