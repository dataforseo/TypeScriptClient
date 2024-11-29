[**Documentation**](../README.md)

***

[Documentation](../README.md) / JobsSerpElementItem

# Class: JobsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new JobsSerpElementItem()

> **new JobsSerpElementItem**(`data`?): [`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Parameters

##### data?

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md)

#### Returns

[`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:32621

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### items?

> `optional` **items**: [`JobsElement`](JobsElement.md)[]

contains arrays of specific images

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`items`](../interfaces/IJobsSerpElementItem.md#items)

#### Defined in

main.ts:32613

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`position`](../interfaces/IJobsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:21041

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rank_absolute`](../interfaces/IJobsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21037

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rank_group`](../interfaces/IJobsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21034

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rectangle`](../interfaces/IJobsSerpElementItem.md#rectangle)

#### Defined in

main.ts:32617

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`title`](../interfaces/IJobsSerpElementItem.md#title)

#### Defined in

main.ts:32609

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`type`](../interfaces/IJobsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`url`](../interfaces/IJobsSerpElementItem.md#url)

#### Defined in

main.ts:32611

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`xpath`](../interfaces/IJobsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21043

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:32626

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:32651

***

### fromJS()

> `static` **fromJS**(`data`): [`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32644
