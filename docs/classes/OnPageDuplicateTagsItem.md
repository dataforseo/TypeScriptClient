[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsItem

# Class: OnPageDuplicateTagsItem

## Implements

- [`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsItem()

> **new OnPageDuplicateTagsItem**(`data`?): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Parameters

##### data?

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Defined in

main.ts:168524

## Properties

### accumulator?

> `optional` **accumulator**: `string`

contains the value of duplicated tag

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`accumulator`](../interfaces/IOnPageDuplicateTagsItem.md#accumulator)

#### Defined in

main.ts:168516

***

### pages?

> `optional` **pages**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

pages with duplicate tags

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`pages`](../interfaces/IOnPageDuplicateTagsItem.md#pages)

#### Defined in

main.ts:168520

***

### total\_count?

> `optional` **total\_count**: `number`

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`total_count`](../interfaces/IOnPageDuplicateTagsItem.md#total_count)

#### Defined in

main.ts:168518

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:168533

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:168556

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Defined in

main.ts:168549
