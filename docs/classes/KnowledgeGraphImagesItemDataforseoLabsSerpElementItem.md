[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphImagesItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphImagesItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:98277

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:98273

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#link)

#### Defined in

main.ts:98270

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:98266

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:98262

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:98259

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:98268

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

main.ts:98282

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

main.ts:98309

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98302
