**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsItem

# Class: OnPageDuplicateTagsItem

## Implements

- [`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsItem(data)

> **new OnPageDuplicateTagsItem**(`data`?): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Parameters

• **data?**: [`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Source

main.ts:155611

## Properties

### accumulator?

> **`optional`** **accumulator**: `string`

contains the value of duplicated tag

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`accumulator`](../interfaces/IOnPageDuplicateTagsItem.md#accumulator)

#### Source

main.ts:155603

***

### pages?

> **`optional`** **pages**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

pages with duplicate tags

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`pages`](../interfaces/IOnPageDuplicateTagsItem.md#pages)

#### Source

main.ts:155607

***

### total\_count?

> **`optional`** **total\_count**: `number`

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`total_count`](../interfaces/IOnPageDuplicateTagsItem.md#total_count)

#### Source

main.ts:155605

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:155620

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:155643

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Source

main.ts:155636
