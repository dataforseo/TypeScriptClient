[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksTimeseriesNewLostSummaryLiveItem

# Class: BacklinksTimeseriesNewLostSummaryLiveItem

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesNewLostSummaryLiveItem()

> **new BacklinksTimeseriesNewLostSummaryLiveItem**(`data`?): [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Parameters

##### data?

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Defined in

main.ts:159907

## Properties

### date?

> `optional` **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`date`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#date)

#### Defined in

main.ts:159885

***

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_backlinks)

#### Defined in

main.ts:159891

***

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_domains)

#### Defined in

main.ts:159897

***

### lost\_referring\_main\_domains?

> `optional` **lost\_referring\_main\_domains**: `number`

number of lost referring main domains
number of lost referring main domains of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_referring_main_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_main_domains)

#### Defined in

main.ts:159903

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_backlinks)

#### Defined in

main.ts:159888

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_domains)

#### Defined in

main.ts:159894

***

### new\_referring\_main\_domains?

> `optional` **new\_referring\_main\_domains**: `number`

number of new referring main domains
number of new referring main domains pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_referring_main_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_main_domains)

#### Defined in

main.ts:159900

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`type`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#type)

#### Defined in

main.ts:159880

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:159916

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:159940

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Defined in

main.ts:159933
