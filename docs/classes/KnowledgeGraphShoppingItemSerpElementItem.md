[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphShoppingItemSerpElementItem

# Class: KnowledgeGraphShoppingItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphShoppingItemSerpElementItem()

> **new KnowledgeGraphShoppingItemSerpElementItem**(`data`?): [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:28922

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:28911

***

### items?

> `optional` **items**: [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#items)

#### Defined in

main.ts:28914

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#position)

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

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_group)

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

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:28918

***

### title?

> `optional` **title**: `string`

title of the place

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#title)

#### Defined in

main.ts:28907

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#xpath)

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

main.ts:28927

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

main.ts:28952

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:28945
