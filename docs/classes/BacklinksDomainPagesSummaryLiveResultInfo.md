[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainPagesSummaryLiveResultInfo

# Class: BacklinksDomainPagesSummaryLiveResultInfo

## Implements

- [`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesSummaryLiveResultInfo()

> **new BacklinksDomainPagesSummaryLiveResultInfo**(`data`?): [`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Parameters

##### data?

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md)

#### Returns

[`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:155022

## Properties

### items?

> `optional` **items**: [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#items)

#### Defined in

main.ts:155018

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#items_count)

#### Defined in

main.ts:155016

***

### target?

> `optional` **target**: `string`

target in the post array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#target)

#### Defined in

main.ts:155012

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#total_count)

#### Defined in

main.ts:155014

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:155031

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:155055

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:155048
