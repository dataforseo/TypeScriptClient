[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CoursesSerpElementItem

# Class: CoursesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CoursesSerpElementItem()

> **new CoursesSerpElementItem**(`data`?): [`CoursesSerpElementItem`](CoursesSerpElementItem.md)

#### Parameters

• **data?**: [`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md)

#### Returns

[`CoursesSerpElementItem`](CoursesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:36519

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### categories?

> `optional` **categories**: `string`[]

array of course categories
contains a list of categories relevant to courses

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`categories`](../interfaces/ICoursesSerpElementItem.md#categories)

#### Defined in

main.ts:36509

***

### items?

> `optional` **items**: [`CoursesElement`](CoursesElement.md)[]

contains arrays of specific images

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`items`](../interfaces/ICoursesSerpElementItem.md#items)

#### Defined in

main.ts:36511

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`position`](../interfaces/ICoursesSerpElementItem.md#position)

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

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rank_absolute`](../interfaces/ICoursesSerpElementItem.md#rank_absolute)

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

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rank_group`](../interfaces/ICoursesSerpElementItem.md#rank_group)

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

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rectangle`](../interfaces/ICoursesSerpElementItem.md#rectangle)

#### Defined in

main.ts:36515

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`title`](../interfaces/ICoursesSerpElementItem.md#title)

#### Defined in

main.ts:36506

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`type`](../interfaces/ICoursesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`xpath`](../interfaces/ICoursesSerpElementItem.md#xpath)

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

main.ts:36524

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

main.ts:36553

***

### fromJS()

> `static` **fromJS**(`data`): [`CoursesSerpElementItem`](CoursesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CoursesSerpElementItem`](CoursesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36546
