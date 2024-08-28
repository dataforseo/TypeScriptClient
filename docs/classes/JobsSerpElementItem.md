[**Documentation**](../README.md) • **Docs**

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

• **data?**: [`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md)

#### Returns

[`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:31171

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`JobsElement`](JobsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`items`](../interfaces/IJobsSerpElementItem.md#items)

#### Defined in

main.ts:31163

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`position`](../interfaces/IJobsSerpElementItem.md#position)

#### Defined in

main.ts:31154

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rank_absolute`](../interfaces/IJobsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31150

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rank_group`](../interfaces/IJobsSerpElementItem.md#rank_group)

#### Defined in

main.ts:31146

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rectangle`](../interfaces/IJobsSerpElementItem.md#rectangle)

#### Defined in

main.ts:31167

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`title`](../interfaces/IJobsSerpElementItem.md#title)

#### Defined in

main.ts:31158

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`url`](../interfaces/IJobsSerpElementItem.md#url)

#### Defined in

main.ts:31160

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`xpath`](../interfaces/IJobsSerpElementItem.md#xpath)

#### Defined in

main.ts:31156

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

main.ts:31176

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

main.ts:31205

***

### fromJS()

> `static` **fromJS**(`data`): [`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31198
