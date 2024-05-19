**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphShoppingItemSerpElementItem

# Class: KnowledgeGraphShoppingItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphShoppingItemSerpElementItem(data)

> **new KnowledgeGraphShoppingItemSerpElementItem**(`data`?): [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:28319

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#data_attrid)

#### Source

main.ts:28308

***

### items?

> **`optional`** **items**: [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#items)

#### Source

main.ts:28311

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#position)

#### Source

main.ts:28300

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:28296

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_group)

#### Source

main.ts:28293

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rectangle)

#### Source

main.ts:28315

***

### title?

> **`optional`** **title**: `string`

title of the place

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#title)

#### Source

main.ts:28304

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#xpath)

#### Source

main.ts:28302

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

main.ts:28324

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

main.ts:28353

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:28346
