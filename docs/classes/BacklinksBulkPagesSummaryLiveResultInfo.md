**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveResultInfo

# Class: BacklinksBulkPagesSummaryLiveResultInfo

## Implements

- [`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveResultInfo(data)

> **new BacklinksBulkPagesSummaryLiveResultInfo**(`data`?): [`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Source

main.ts:152826

## Properties

### items?

> **`optional`** **items**: [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#items)

#### Source

main.ts:152822

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#items_count)

#### Source

main.ts:152820

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#total_count)

#### Source

main.ts:152818

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:152835

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:152858

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkPagesSummaryLiveResultInfo`](BacklinksBulkPagesSummaryLiveResultInfo.md)

#### Source

main.ts:152851
