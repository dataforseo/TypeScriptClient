**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostBacklinksLiveResultInfo

# Class: BacklinksBulkNewLostBacklinksLiveResultInfo

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkNewLostBacklinksLiveResultInfo(data)

> **new BacklinksBulkNewLostBacklinksLiveResultInfo**(`data`?): [`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Source

main.ts:146468

## Properties

### items?

> **`optional`** **items**: [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md#items)

#### Source

main.ts:146464

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md#items_count)

#### Source

main.ts:146462

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:146477

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:146499

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Source

main.ts:146492
