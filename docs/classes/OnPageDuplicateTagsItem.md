[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsItem

# Class: OnPageDuplicateTagsItem

Defined in: main.ts:168582

## Implements

- [`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsItem()

> **new OnPageDuplicateTagsItem**(`data`?): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

Defined in: main.ts:168592

#### Parameters

##### data?

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

## Properties

### accumulator?

> `optional` **accumulator**: `string`

Defined in: main.ts:168584

contains the value of duplicated tag

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`accumulator`](../interfaces/IOnPageDuplicateTagsItem.md#accumulator)

***

### pages?

> `optional` **pages**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:168588

pages with duplicate tags

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`pages`](../interfaces/IOnPageDuplicateTagsItem.md#pages)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:168586

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`total_count`](../interfaces/IOnPageDuplicateTagsItem.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168601

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:168624

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

Defined in: main.ts:168617

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)
