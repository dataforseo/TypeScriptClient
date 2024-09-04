[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TopSightsSerpElementItem

# Class: TopSightsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopSightsSerpElementItem()

> **new TopSightsSerpElementItem**(`data`?): [`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Parameters

• **data?**: [`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md)

#### Returns

[`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:33539

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`TopSightsElement`](TopSightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`items`](../interfaces/ITopSightsSerpElementItem.md#items)

#### Defined in

main.ts:33531

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`position`](../interfaces/ITopSightsSerpElementItem.md#position)

#### Defined in

main.ts:33524

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopSightsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:33520

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rank_group`](../interfaces/ITopSightsSerpElementItem.md#rank_group)

#### Defined in

main.ts:33516

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rectangle`](../interfaces/ITopSightsSerpElementItem.md#rectangle)

#### Defined in

main.ts:33535

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`title`](../interfaces/ITopSightsSerpElementItem.md#title)

#### Defined in

main.ts:33528

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`xpath`](../interfaces/ITopSightsSerpElementItem.md#xpath)

#### Defined in

main.ts:33526

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

main.ts:33544

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

main.ts:33572

***

### fromJS()

> `static` **fromJS**(`data`): [`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33565
