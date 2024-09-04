[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphRowItemSerpElementItem

# Class: KnowledgeGraphRowItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphRowItemSerpElementItem()

> **new KnowledgeGraphRowItemSerpElementItem**(`data`?): [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:28310

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
kc:/common/topic:social media presence

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:28298

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

links featured in the faq_box_element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#links)

#### Defined in

main.ts:28302

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#position)

#### Defined in

main.ts:28290

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:28286

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:28283

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:28306

***

### text?

> `optional` **text**: `string`

row content

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#text)

#### Defined in

main.ts:28300

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#title)

#### Defined in

main.ts:28294

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#xpath)

#### Defined in

main.ts:28292

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

main.ts:28315

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

main.ts:28345

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:28338
