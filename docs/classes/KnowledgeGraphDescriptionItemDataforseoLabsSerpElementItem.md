[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:96057

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20742

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:96053

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20738

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20734

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20731

***

### text?

> `optional` **text**: `string`

description content

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#text)

#### Defined in

main.ts:96049

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20728

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20740

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

main.ts:96062

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

main.ts:96085

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:96078
