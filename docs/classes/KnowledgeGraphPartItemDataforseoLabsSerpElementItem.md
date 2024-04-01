[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphPartItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphPartItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#data_attrid)
- [links](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#links)
- [position](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_group)
- [text](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#text)
- [title](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#title)
- [xpath](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphPartItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:96094

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:96086

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[links](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:96090

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:96078

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:96074

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:96071

___

### text

• `Optional` **text**: `string`

content within the item

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[text](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#text)

#### Defined in

main.ts:96088

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[title](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:96082

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:96080

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:96099

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:96128

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:96121
