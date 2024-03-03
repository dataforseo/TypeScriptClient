[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#_discriminator)
- [links](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#links)
- [position](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_group)
- [text](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#text)
- [xpath](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:91685

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[links](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:91681

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:91673

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:91669

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:91666

___

### text

• `Optional` **text**: `string`

description content

#### Implementation of

[IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[text](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#text)

#### Defined in

main.ts:91677

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:91675

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

main.ts:91690

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

main.ts:91717

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:91710
