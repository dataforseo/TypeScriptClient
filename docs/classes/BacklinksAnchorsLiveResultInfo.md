[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksAnchorsLiveResultInfo

# Class: BacklinksAnchorsLiveResultInfo

## Implements

- [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksAnchorsLiveResultInfo()

> **new BacklinksAnchorsLiveResultInfo**(`data`?): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Parameters

##### data?

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Defined in

main.ts:153074

## Properties

### items?

> `optional` **items**: [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items)

#### Defined in

main.ts:153070

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:153068

***

### target?

> `optional` **target**: `string`

target in the post array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`target`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#target)

#### Defined in

main.ts:153064

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:153066

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:153083

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:153107

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Defined in

main.ts:153100
