[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphRowItemSerpElementItem

# Class: KnowledgeGraphRowItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`KnowledgeGraphRowItemSerpElementItem`**

## Implements

- [`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphRowItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphRowItemSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphRowItemSerpElementItem.md#data_attrid)
- [links](KnowledgeGraphRowItemSerpElementItem.md#links)
- [position](KnowledgeGraphRowItemSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphRowItemSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphRowItemSerpElementItem.md#rank_group)
- [rectangle](KnowledgeGraphRowItemSerpElementItem.md#rectangle)
- [text](KnowledgeGraphRowItemSerpElementItem.md#text)
- [title](KnowledgeGraphRowItemSerpElementItem.md#title)
- [xpath](KnowledgeGraphRowItemSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphRowItemSerpElementItem.md#init)
- [toJSON](KnowledgeGraphRowItemSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphRowItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphRowItemSerpElementItem**(`data?`): [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md) |

#### Returns

[`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:27294

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:27282

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

links featured in the faq_box_element

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[links](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#links)

#### Defined in

main.ts:27286

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[position](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#position)

#### Defined in

main.ts:27274

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:27270

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:27267

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[rectangle](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:27290

___

### text

• `Optional` **text**: `string`

row content

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[text](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#text)

#### Defined in

main.ts:27284

___

### title

• `Optional` **title**: `string`

title of the item

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[title](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#title)

#### Defined in

main.ts:27278

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphRowItemSerpElementItem](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#xpath)

#### Defined in

main.ts:27276

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

main.ts:27299

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:27329

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:27322
