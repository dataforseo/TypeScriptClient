[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveResultInfo

# Class: BacklinksBulkPagesSummaryLiveResultInfo

## Implements

- [`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveResultInfo()

> **new BacklinksBulkPagesSummaryLiveResultInfo**(`data`?): [`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Parameters

##### data?

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:162756

## Properties

### items?

> `optional` **items**: [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#items)

#### Defined in

main.ts:162752

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#items_count)

#### Defined in

main.ts:162750

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#total_count)

#### Defined in

main.ts:162748

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:162765

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:162788

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:162781
