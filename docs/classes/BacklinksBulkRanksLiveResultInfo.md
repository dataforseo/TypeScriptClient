[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveResultInfo

# Class: BacklinksBulkRanksLiveResultInfo

Defined in: main.ts:160598

## Implements

- [`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveResultInfo()

> **new BacklinksBulkRanksLiveResultInfo**(`data`?): [`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

Defined in: main.ts:160606

#### Parameters

##### data?

[`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md)

#### Returns

[`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)[]

Defined in: main.ts:160602

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:160600

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160615

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:160637

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

Defined in: main.ts:160630

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)
