[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphDescriptionItemSerpElementItem

# Class: KnowledgeGraphDescriptionItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphDescriptionItemSerpElementItem()

> **new KnowledgeGraphDescriptionItemSerpElementItem**(`data`?): [`KnowledgeGraphDescriptionItemSerpElementItem`](KnowledgeGraphDescriptionItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphDescriptionItemSerpElementItem`](KnowledgeGraphDescriptionItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:27884

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#links)

#### Defined in

main.ts:27876

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#position)

#### Defined in

main.ts:27868

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:27864

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:27861

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:27880

***

### text?

> `optional` **text**: `string`

description content

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#text)

#### Defined in

main.ts:27872

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#xpath)

#### Defined in

main.ts:27870

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

main.ts:27889

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

main.ts:27917

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphDescriptionItemSerpElementItem`](KnowledgeGraphDescriptionItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphDescriptionItemSerpElementItem`](KnowledgeGraphDescriptionItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:27910
