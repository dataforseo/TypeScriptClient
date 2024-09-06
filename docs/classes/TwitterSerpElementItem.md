[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TwitterSerpElementItem

# Class: TwitterSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TwitterSerpElementItem()

> **new TwitterSerpElementItem**(`data`?): [`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Parameters

• **data?**: [`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

#### Returns

[`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:30796

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`TwitterElement`](TwitterElement.md)[]

contains arrays of specific images

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`items`](../interfaces/ITwitterSerpElementItem.md#items)

#### Defined in

main.ts:30788

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`position`](../interfaces/ITwitterSerpElementItem.md#position)

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

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rank_absolute`](../interfaces/ITwitterSerpElementItem.md#rank_absolute)

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

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rank_group`](../interfaces/ITwitterSerpElementItem.md#rank_group)

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

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rectangle`](../interfaces/ITwitterSerpElementItem.md#rectangle)

#### Defined in

main.ts:30792

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`title`](../interfaces/ITwitterSerpElementItem.md#title)

#### Defined in

main.ts:30784

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`type`](../interfaces/ITwitterSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`url`](../interfaces/ITwitterSerpElementItem.md#url)

#### Defined in

main.ts:30786

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`xpath`](../interfaces/ITwitterSerpElementItem.md#xpath)

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

main.ts:30801

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

main.ts:30826

***

### fromJS()

> `static` **fromJS**(`data`): [`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30819
