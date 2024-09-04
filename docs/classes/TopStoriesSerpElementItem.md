[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TopStoriesSerpElementItem

# Class: TopStoriesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopStoriesSerpElementItem()

> **new TopStoriesSerpElementItem**(`data`?): [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Parameters

• **data?**: [`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md)

#### Returns

[`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:30011

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`items`](../interfaces/ITopStoriesSerpElementItem.md#items)

#### Defined in

main.ts:30003

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`position`](../interfaces/ITopStoriesSerpElementItem.md#position)

#### Defined in

main.ts:29996

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rank_absolute`](../interfaces/ITopStoriesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:29992

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rank_group`](../interfaces/ITopStoriesSerpElementItem.md#rank_group)

#### Defined in

main.ts:29988

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rectangle`](../interfaces/ITopStoriesSerpElementItem.md#rectangle)

#### Defined in

main.ts:30007

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`title`](../interfaces/ITopStoriesSerpElementItem.md#title)

#### Defined in

main.ts:30000

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`xpath`](../interfaces/ITopStoriesSerpElementItem.md#xpath)

#### Defined in

main.ts:29998

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

main.ts:30016

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

main.ts:30044

***

### fromJS()

> `static` **fromJS**(`data`): [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30037
