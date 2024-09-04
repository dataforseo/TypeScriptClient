[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkPagesSummaryLiveResultInfo

# Class: BacklinksBulkPagesSummaryLiveResultInfo

## Implements

- [`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveResultInfo()

> **new BacklinksBulkPagesSummaryLiveResultInfo**(`data`?): [`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:154652

## Properties

### items?

> `optional` **items**: [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#items)

#### Defined in

main.ts:154648

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#items_count)

#### Defined in

main.ts:154646

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#total_count)

#### Defined in

main.ts:154644

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:154661

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:154684

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:154677
