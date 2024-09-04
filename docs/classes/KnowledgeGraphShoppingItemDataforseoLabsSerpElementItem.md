[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:100025

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:100018

***

### items?

> `optional` **items**: [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:100021

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:100010

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:100006

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:100003

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:100014

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:100012

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:100030

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:100058

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:100051
