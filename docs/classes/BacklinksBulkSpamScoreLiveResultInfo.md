[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkSpamScoreLiveResultInfo

# Class: BacklinksBulkSpamScoreLiveResultInfo

Defined in: main.ts:161278

## Implements

- [`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkSpamScoreLiveResultInfo()

> **new BacklinksBulkSpamScoreLiveResultInfo**(`data`?): [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

Defined in: main.ts:161286

#### Parameters

##### data?

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

#### Returns

[`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)[]

Defined in: main.ts:161282

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:161280

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:161295

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:161317

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

Defined in: main.ts:161310

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)
