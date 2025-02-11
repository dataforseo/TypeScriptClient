[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsItem

# Class: OnPageDuplicateTagsItem

Defined in: main.ts:168746

## Implements

- [`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsItem()

> **new OnPageDuplicateTagsItem**(`data`?): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

Defined in: main.ts:168756

#### Parameters

##### data?

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

## Properties

### accumulator?

> `optional` **accumulator**: `string`

Defined in: main.ts:168748

contains the value of duplicated tag

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`accumulator`](../interfaces/IOnPageDuplicateTagsItem.md#accumulator)

***

### pages?

> `optional` **pages**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:168752

pages with duplicate tags

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`pages`](../interfaces/IOnPageDuplicateTagsItem.md#pages)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:168750

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`total_count`](../interfaces/IOnPageDuplicateTagsItem.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168765

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:168788

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

Defined in: main.ts:168781

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)
