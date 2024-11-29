[**Documentation**](../README.md)

***

[Documentation](../README.md) / AiOverviewSerpElementItem

# Class: AiOverviewSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AiOverviewSerpElementItem()

> **new AiOverviewSerpElementItem**(`data`?): [`AiOverviewSerpElementItem`](AiOverviewSerpElementItem.md)

#### Parameters

##### data?

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md)

#### Returns

[`AiOverviewSerpElementItem`](AiOverviewSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:38094

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### asynchronous\_ai\_overview?

> `optional` **asynchronous\_ai\_overview**: `boolean`

indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache;

#### Implementation of

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`asynchronous_ai_overview`](../interfaces/IAiOverviewSerpElementItem.md#asynchronous_ai_overview)

#### Defined in

main.ts:38081

***

### items?

> `optional` **items**: [`AiOverviewElement`](AiOverviewElement.md)[]

contains arrays of specific images

#### Implementation of

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`items`](../interfaces/IAiOverviewSerpElementItem.md#items)

#### Defined in

main.ts:38083

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`position`](../interfaces/IAiOverviewSerpElementItem.md#position)

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

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`rank_absolute`](../interfaces/IAiOverviewSerpElementItem.md#rank_absolute)

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

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`rank_group`](../interfaces/IAiOverviewSerpElementItem.md#rank_group)

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

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`rectangle`](../interfaces/IAiOverviewSerpElementItem.md#rectangle)

#### Defined in

main.ts:38090

***

### references?

> `optional` **references**: [`AiOverviewReference`](AiOverviewReference.md)[]

additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview

#### Implementation of

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`references`](../interfaces/IAiOverviewSerpElementItem.md#references)

#### Defined in

main.ts:38086

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`type`](../interfaces/IAiOverviewSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAiOverviewSerpElementItem`](../interfaces/IAiOverviewSerpElementItem.md).[`xpath`](../interfaces/IAiOverviewSerpElementItem.md#xpath)

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

main.ts:38099

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

main.ts:38128

***

### fromJS()

> `static` **fromJS**(`data`): [`AiOverviewSerpElementItem`](AiOverviewSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`AiOverviewSerpElementItem`](AiOverviewSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:38121
