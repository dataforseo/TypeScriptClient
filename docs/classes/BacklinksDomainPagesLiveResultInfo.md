**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksDomainPagesLiveResultInfo

# Class: BacklinksDomainPagesLiveResultInfo

## Implements

- [`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesLiveResultInfo(data)

> **new BacklinksDomainPagesLiveResultInfo**(`data`?): [`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md)

#### Returns

[`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)

#### Source

main.ts:141485

## Properties

### items?

> **`optional`** **items**: [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#items)

#### Source

main.ts:141481

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the items array

#### Implementation of

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#items_count)

#### Source

main.ts:141479

***

### target?

> **`optional`** **target**: `string`

target in a POST array

#### Implementation of

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[`target`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#target)

#### Source

main.ts:141475

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#total_count)

#### Source

main.ts:141477

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:141494

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:141518

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)

#### Source

main.ts:141511
