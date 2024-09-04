[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkRanksLiveResultInfo

# Class: BacklinksBulkRanksLiveResultInfo

## Implements

- [`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveResultInfo()

> **new BacklinksBulkRanksLiveResultInfo**(`data`?): [`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md)

#### Returns

[`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Defined in

main.ts:152270

## Properties

### items?

> `optional` **items**: [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md#items)

#### Defined in

main.ts:152266

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md#items_count)

#### Defined in

main.ts:152264

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:152279

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:152301

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Defined in

main.ts:152294
