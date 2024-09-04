[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / FoundOnWebSerpElementItem

# Class: FoundOnWebSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FoundOnWebSerpElementItem()

> **new FoundOnWebSerpElementItem**(`data`?): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

• **data?**: [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:35220

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`FoundOnWebElement`](FoundOnWebElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`items`](../interfaces/IFoundOnWebSerpElementItem.md#items)

#### Defined in

main.ts:35212

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`position`](../interfaces/IFoundOnWebSerpElementItem.md#position)

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

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_absolute`](../interfaces/IFoundOnWebSerpElementItem.md#rank_absolute)

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

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_group`](../interfaces/IFoundOnWebSerpElementItem.md#rank_group)

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

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rectangle`](../interfaces/IFoundOnWebSerpElementItem.md#rectangle)

#### Defined in

main.ts:35216

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

search queries related to the elment

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`related_searches`](../interfaces/IFoundOnWebSerpElementItem.md#related_searches)

#### Defined in

main.ts:35209

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`title`](../interfaces/IFoundOnWebSerpElementItem.md#title)

#### Defined in

main.ts:35207

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`type`](../interfaces/IFoundOnWebSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`xpath`](../interfaces/IFoundOnWebSerpElementItem.md#xpath)

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

main.ts:35225

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

main.ts:35254

***

### fromJS()

> `static` **fromJS**(`data`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35247
