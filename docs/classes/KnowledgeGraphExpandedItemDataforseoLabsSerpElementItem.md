**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem(data)

> **new KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:98192

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Source

main.ts:98186

***

### expanded\_element?

> **`optional`** **expanded\_element**: [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)[]

link of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`expanded_element`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#expanded_element)

#### Source

main.ts:98188

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:98178

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:98174

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:98171

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:98182

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:98180

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:98197

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:98225

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:98218
