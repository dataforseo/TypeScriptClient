[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphListItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphListItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphListItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphListItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:97714

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
kc:/common/topic:social media presence

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:97705

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97710

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#link)

#### Defined in

main.ts:97707

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#position)

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

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97701

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:97719

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

main.ts:97744

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97737
