[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphListItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphListItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`KnowledgeGraphListItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#data_attrid)
- [items](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#items)
- [link](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#link)
- [position](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#title)
- [xpath](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphListItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:93749

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Implementation of

[IKnowledgeGraphListItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:93740

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IKnowledgeGraphListItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[items](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:93745

___

### link

• `Optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[IKnowledgeGraphListItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[link](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#link)

#### Defined in

main.ts:93742

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphListItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:93732

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphListItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:93728

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphListItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:93725

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IKnowledgeGraphListItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[title](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:93736

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphListItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:93734

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

main.ts:93754

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

main.ts:93783

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:93776
