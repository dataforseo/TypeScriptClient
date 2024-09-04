[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksReferringNetworksLiveResultInfo

# Class: BacklinksReferringNetworksLiveResultInfo

## Implements

- [`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringNetworksLiveResultInfo()

> **new BacklinksReferringNetworksLiveResultInfo**(`data`?): [`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

#### Returns

[`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Defined in

main.ts:148480

## Properties

### items?

> `optional` **items**: [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`items`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items)

#### Defined in

main.ts:148476

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the items array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items_count)

#### Defined in

main.ts:148474

***

### target?

> `optional` **target**: `string`

target in a POST array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`target`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#target)

#### Defined in

main.ts:148470

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#total_count)

#### Defined in

main.ts:148472

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:148489

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:148513

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Defined in

main.ts:148506
