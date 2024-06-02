**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphExpandedItemSerpElementItem

# Class: KnowledgeGraphExpandedItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphExpandedItemSerpElementItem(data)

> **new KnowledgeGraphExpandedItemSerpElementItem**(`data`?): [`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:27839

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19668

***

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#data_attrid)

#### Source

main.ts:27829

***

### expanded\_element?

> **`optional`** **expanded\_element**: [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)[]

link of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`expanded_element`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#expanded_element)

#### Source

main.ts:27831

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#position)

#### Source

main.ts:27821

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:27817

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rank_group)

#### Source

main.ts:27814

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rectangle)

#### Source

main.ts:27835

***

### title?

> **`optional`** **title**: `string`

title of the link

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#title)

#### Source

main.ts:27825

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#xpath)

#### Source

main.ts:27823

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:27844

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:27873

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:27866
