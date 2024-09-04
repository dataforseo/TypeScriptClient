[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ImagesSerpElementItem

# Class: ImagesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImagesSerpElementItem()

> **new ImagesSerpElementItem**(`data`?): [`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Parameters

• **data?**: [`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md)

#### Returns

[`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:30357

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`ImagesElement`](ImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`items`](../interfaces/IImagesSerpElementItem.md#items)

#### Defined in

main.ts:30346

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`position`](../interfaces/IImagesSerpElementItem.md#position)

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

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rank_absolute`](../interfaces/IImagesSerpElementItem.md#rank_absolute)

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

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rank_group`](../interfaces/IImagesSerpElementItem.md#rank_group)

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

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rectangle`](../interfaces/IImagesSerpElementItem.md#rectangle)

#### Defined in

main.ts:30353

***

### related\_image\_searches?

> `optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`related_image_searches`](../interfaces/IImagesSerpElementItem.md#related_image_searches)

#### Defined in

main.ts:30349

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`title`](../interfaces/IImagesSerpElementItem.md#title)

#### Defined in

main.ts:30341

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`type`](../interfaces/IImagesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`url`](../interfaces/IImagesSerpElementItem.md#url)

#### Defined in

main.ts:30343

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`xpath`](../interfaces/IImagesSerpElementItem.md#xpath)

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

main.ts:30362

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

main.ts:30392

***

### fromJS()

> `static` **fromJS**(`data`): [`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30385
