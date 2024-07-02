**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphImagesItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphImagesItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem(data)

> **new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:96918

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:96914

***

### link?

> **`optional`** **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#link)

#### Source

main.ts:96911

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:96907

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:96903

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:96900

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:96909

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

main.ts:96923

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

main.ts:96950

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:96943
