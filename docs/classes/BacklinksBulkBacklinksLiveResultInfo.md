[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkBacklinksLiveResultInfo

# Class: BacklinksBulkBacklinksLiveResultInfo

## Implements

- [`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkBacklinksLiveResultInfo()

> **new BacklinksBulkBacklinksLiveResultInfo**(`data`?): [`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md)

#### Returns

[`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

#### Defined in

main.ts:149505

## Properties

### items?

> `optional` **items**: [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)[]

contains relevant backlink data

#### Implementation of

[`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md#items)

#### Defined in

main.ts:149501

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md#items_count)

#### Defined in

main.ts:149499

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:149514

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:149536

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

#### Defined in

main.ts:149529
