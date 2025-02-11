[**Documentation**](../README.md)

***

[Documentation](../README.md) / CoursesSerpElementItem

# Class: CoursesSerpElementItem

Defined in: main.ts:38005

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CoursesSerpElementItem()

> **new CoursesSerpElementItem**(`data`?): [`CoursesSerpElementItem`](CoursesSerpElementItem.md)

Defined in: main.ts:38020

#### Parameters

##### data?

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md)

#### Returns

[`CoursesSerpElementItem`](CoursesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:38010

array of course categories
contains a list of categories relevant to courses

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`categories`](../interfaces/ICoursesSerpElementItem.md#categories)

***

### items?

> `optional` **items**: [`CoursesElement`](CoursesElement.md)[]

Defined in: main.ts:38012

contains arrays of specific images

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`items`](../interfaces/ICoursesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`position`](../interfaces/ICoursesSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rank_absolute`](../interfaces/ICoursesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rank_group`](../interfaces/ICoursesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:38016

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rectangle`](../interfaces/ICoursesSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38007

title of the row

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`title`](../interfaces/ICoursesSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`type`](../interfaces/ICoursesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`xpath`](../interfaces/ICoursesSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:38025

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:38054

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`CoursesSerpElementItem`](CoursesSerpElementItem.md)

Defined in: main.ts:38047

#### Parameters

##### data

`any`

#### Returns

[`CoursesSerpElementItem`](CoursesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
