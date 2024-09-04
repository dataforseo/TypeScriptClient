[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:99919

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
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:99913

***

### expanded\_element?

> `optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)[]

link of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`expanded_element`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#expanded_element)

#### Defined in

main.ts:99915

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:99905

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:99901

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:99898

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:99909

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:99907

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

main.ts:99924

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

main.ts:99952

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:99945
