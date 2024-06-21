**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksAnchorsLiveResultInfo

# Class: BacklinksAnchorsLiveResultInfo

## Implements

- [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksAnchorsLiveResultInfo(data)

> **new BacklinksAnchorsLiveResultInfo**(`data`?): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Source

main.ts:140015

## Properties

### items?

> **`optional`** **items**: [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items)

#### Source

main.ts:140011

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items_count)

#### Source

main.ts:140009

***

### target?

> **`optional`** **target**: `string`

target in the post array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`target`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#target)

#### Source

main.ts:140005

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#total_count)

#### Source

main.ts:140007

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:140024

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:140048

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Source

main.ts:140041
