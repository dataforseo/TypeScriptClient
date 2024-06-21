**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphCarouselItemSerpElementItem

# Class: KnowledgeGraphCarouselItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphCarouselItemSerpElementItem(data)

> **new KnowledgeGraphCarouselItemSerpElementItem**(`data`?): [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:27187

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#data_attrid)

#### Source

main.ts:27175

***

### items?

> **`optional`** **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#items)

#### Source

main.ts:27179

***

### link?

> **`optional`** **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#link)

#### Source

main.ts:27177

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#position)

#### Source

main.ts:27167

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:27163

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rank_group)

#### Source

main.ts:27160

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rectangle)

#### Source

main.ts:27183

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#title)

#### Source

main.ts:27171

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#xpath)

#### Source

main.ts:27169

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

main.ts:27192

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

main.ts:27222

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:27215
