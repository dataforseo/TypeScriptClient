[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageDuplicateContentItem

# Class: OnPageDuplicateContentItem

## Implements

- [`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentItem()

> **new OnPageDuplicateContentItem**(`data`?): [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Parameters

• **data?**: [`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

#### Returns

[`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Defined in

main.ts:157314

## Properties

### pages?

> `optional` **pages**: [`Pages`](Pages.md)[]

pages with duplicate content

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`pages`](../interfaces/IOnPageDuplicateContentItem.md#pages)

#### Defined in

main.ts:157310

***

### total\_count?

> `optional` **total\_count**: `number`

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`total_count`](../interfaces/IOnPageDuplicateContentItem.md#total_count)

#### Defined in

main.ts:157308

***

### url?

> `optional` **url**: `string`

URL of the specified page

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`url`](../interfaces/IOnPageDuplicateContentItem.md#url)

#### Defined in

main.ts:157306

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:157323

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:157346

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Defined in

main.ts:157339
