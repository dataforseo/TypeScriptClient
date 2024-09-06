[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksPageIntersectionLiveResultInfo

# Class: BacklinksPageIntersectionLiveResultInfo

## Implements

- [`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageIntersectionLiveResultInfo()

> **new BacklinksPageIntersectionLiveResultInfo**(`data`?): [`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md)

#### Returns

[`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:147835

## Properties

### items?

> `optional` **items**: [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[`items`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:147831

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:147829

***

### targets?

> `optional` **targets**: `object`

targets from a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[`targets`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#targets)

#### Defined in

main.ts:147825

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results relevant the request

#### Implementation of

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:147827

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:147844

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:147874

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:147867
