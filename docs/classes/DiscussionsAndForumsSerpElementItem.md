[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DiscussionsAndForumsSerpElementItem

# Class: DiscussionsAndForumsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DiscussionsAndForumsSerpElementItem()

> **new DiscussionsAndForumsSerpElementItem**(`data`?): [`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Parameters

• **data?**: [`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md)

#### Returns

[`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:36184

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)[]

contains arrays of specific images

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`items`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#items)

#### Defined in

main.ts:36176

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`position`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#position)

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

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`rank_absolute`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rank_absolute)

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

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`rank_group`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rank_group)

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

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`rectangle`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rectangle)

#### Defined in

main.ts:36180

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`title`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#title)

#### Defined in

main.ts:36174

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`type`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`xpath`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#xpath)

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

main.ts:36189

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

main.ts:36213

***

### fromJS()

> `static` **fromJS**(`data`): [`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36206
