[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksAnchorsLiveResultInfo

# Class: BacklinksAnchorsLiveResultInfo

Defined in: main.ts:153294

## Implements

- [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksAnchorsLiveResultInfo()

> **new BacklinksAnchorsLiveResultInfo**(`data`?): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

Defined in: main.ts:153306

#### Parameters

##### data?

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)[]

Defined in: main.ts:153302

items array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:153300

number of items in the results array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:153296

target in the post array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`target`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:153298

total number of relevant items in the database

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:153315

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:153339

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

Defined in: main.ts:153332

#### Parameters

##### data

`any`

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)
