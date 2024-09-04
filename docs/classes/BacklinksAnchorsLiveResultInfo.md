[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksAnchorsLiveResultInfo

# Class: BacklinksAnchorsLiveResultInfo

## Implements

- [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksAnchorsLiveResultInfo()

> **new BacklinksAnchorsLiveResultInfo**(`data`?): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Defined in

main.ts:144970

## Properties

### items?

> `optional` **items**: [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items)

#### Defined in

main.ts:144966

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:144964

***

### target?

> `optional` **target**: `string`

target in the post array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`target`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#target)

#### Defined in

main.ts:144960

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:144962

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:144979

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:145003

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Defined in

main.ts:144996
