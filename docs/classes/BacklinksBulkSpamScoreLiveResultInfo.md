**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkSpamScoreLiveResultInfo

# Class: BacklinksBulkSpamScoreLiveResultInfo

## Implements

- [`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkSpamScoreLiveResultInfo(data)

> **new BacklinksBulkSpamScoreLiveResultInfo**(`data`?): [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

#### Returns

[`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Source

main.ts:145736

## Properties

### items?

> **`optional`** **items**: [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items)

#### Source

main.ts:145732

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items_count)

#### Source

main.ts:145730

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:145745

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:145767

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Source

main.ts:145760
