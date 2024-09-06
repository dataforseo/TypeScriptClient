[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphPartItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphPartItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphPartItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphPartItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:97793

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20747

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:97785

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:97789

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20743

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20739

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### text?

> `optional` **text**: `string`

content within the item

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#text)

#### Defined in

main.ts:97787

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97781

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20745

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

main.ts:97798

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

main.ts:97823

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97816
