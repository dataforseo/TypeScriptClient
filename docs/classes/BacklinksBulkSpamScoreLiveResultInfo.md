[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BacklinksBulkSpamScoreLiveResultInfo

# Class: BacklinksBulkSpamScoreLiveResultInfo

## Implements

- [`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkSpamScoreLiveResultInfo()

> **new BacklinksBulkSpamScoreLiveResultInfo**(`data`?): [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

#### Returns

[`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Defined in

main.ts:152950

## Properties

### items?

> `optional` **items**: [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items)

#### Defined in

main.ts:152946

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items_count)

#### Defined in

main.ts:152944

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:152959

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:152981

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Defined in

main.ts:152974
