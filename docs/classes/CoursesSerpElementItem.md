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

main.ts:38082

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### categories?

> `optional` **categories**: `string`[]

array of course categories
contains a list of categories relevant to courses

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`categories`](../interfaces/ICoursesSerpElementItem.md#categories)

#### Defined in

main.ts:38071

***

### items?

> `optional` **items**: [`CoursesElement`](CoursesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`items`](../interfaces/ICoursesSerpElementItem.md#items)

#### Defined in

main.ts:38074

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`position`](../interfaces/ICoursesSerpElementItem.md#position)

#### Defined in

main.ts:38064

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rank_absolute`](../interfaces/ICoursesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:38060

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rank_group`](../interfaces/ICoursesSerpElementItem.md#rank_group)

#### Defined in

main.ts:38056

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`rectangle`](../interfaces/ICoursesSerpElementItem.md#rectangle)

#### Defined in

main.ts:38078

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`title`](../interfaces/ICoursesSerpElementItem.md#title)

#### Defined in

main.ts:38068

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICoursesSerpElementItem`](../interfaces/ICoursesSerpElementItem.md).[`xpath`](../interfaces/ICoursesSerpElementItem.md#xpath)

#### Defined in

main.ts:38066

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

main.ts:38087

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

main.ts:38120

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

main.ts:38113
