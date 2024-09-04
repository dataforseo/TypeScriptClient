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

main.ts:28965

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:28954

***

### items?

> `optional` **items**: [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#items)

#### Defined in

main.ts:28957

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#position)

#### Defined in

main.ts:28946

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:28942

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:28939

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:28961

***

### title?

> `optional` **title**: `string`

title of the place

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#title)

#### Defined in

main.ts:28950

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#xpath)

#### Defined in

main.ts:28948

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

main.ts:28970

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

main.ts:28999

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

main.ts:28992
