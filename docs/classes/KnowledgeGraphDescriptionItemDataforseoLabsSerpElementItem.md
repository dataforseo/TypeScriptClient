**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem(data)

> **new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:95967

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#links)

#### Source

main.ts:95963

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:95955

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:95951

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:95948

***

### text?

> **`optional`** **text**: `string`

description content

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#text)

#### Source

main.ts:95959

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:95957

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

main.ts:95972

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

main.ts:95999

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:95992
