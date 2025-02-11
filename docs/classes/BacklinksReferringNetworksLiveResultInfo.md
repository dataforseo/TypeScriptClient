[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksReferringNetworksLiveResultInfo

# Class: BacklinksReferringNetworksLiveResultInfo

Defined in: main.ts:156804

## Implements

- [`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringNetworksLiveResultInfo()

> **new BacklinksReferringNetworksLiveResultInfo**(`data`?): [`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

Defined in: main.ts:156816

#### Parameters

##### data?

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

#### Returns

[`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)[]

Defined in: main.ts:156812

items array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`items`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:156810

number of items in the items array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:156806

target in a POST array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`target`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:156808

total number of relevant items in the database

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:156825

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:156849

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

Defined in: main.ts:156842

#### Parameters

##### data

`any`

#### Returns

[`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)
