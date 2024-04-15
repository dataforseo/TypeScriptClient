**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveResultInfo

# Class: BacklinksBulkRanksLiveResultInfo

## Implements

- [`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveResultInfo(data)

> **new BacklinksBulkRanksLiveResultInfo**(`data`?): [`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md)

#### Returns

[`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Source

main.ts:145056

## Properties

### items?

> **`optional`** **items**: [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md#items)

#### Source

main.ts:145052

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md#items_count)

#### Source

main.ts:145050

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:145065

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:145087

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Source

main.ts:145080
