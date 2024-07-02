**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksReferringNetworksLiveResultInfo

# Class: BacklinksReferringNetworksLiveResultInfo

## Implements

- [`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringNetworksLiveResultInfo(data)

> **new BacklinksReferringNetworksLiveResultInfo**(`data`?): [`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

#### Returns

[`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Source

main.ts:143821

## Properties

### items?

> **`optional`** **items**: [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`items`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items)

#### Source

main.ts:143817

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the items array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items_count)

#### Source

main.ts:143815

***

### target?

> **`optional`** **target**: `string`

target in a POST array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`target`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#target)

#### Source

main.ts:143811

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#total_count)

#### Source

main.ts:143813

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:143830

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:143854

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Source

main.ts:143847
