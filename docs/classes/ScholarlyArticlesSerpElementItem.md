[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ScholarlyArticlesSerpElementItem

# Class: ScholarlyArticlesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ScholarlyArticlesSerpElementItem()

> **new ScholarlyArticlesSerpElementItem**(`data`?): [`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Parameters

• **data?**: [`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md)

#### Returns

[`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:33026

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

contains arrays of specific images

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`items`](../interfaces/IScholarlyArticlesSerpElementItem.md#items)

#### Defined in

main.ts:33018

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`position`](../interfaces/IScholarlyArticlesSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:20363

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rank_absolute`](../interfaces/IScholarlyArticlesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20359

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rank_group`](../interfaces/IScholarlyArticlesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20356

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rectangle`](../interfaces/IScholarlyArticlesSerpElementItem.md#rectangle)

#### Defined in

main.ts:33022

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`title`](../interfaces/IScholarlyArticlesSerpElementItem.md#title)

#### Defined in

main.ts:33014

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`type`](../interfaces/IScholarlyArticlesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`url`](../interfaces/IScholarlyArticlesSerpElementItem.md#url)

#### Defined in

main.ts:33016

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`xpath`](../interfaces/IScholarlyArticlesSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20365

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:33031

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:33056

***

### fromJS()

> `static` **fromJS**(`data`): [`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33049
