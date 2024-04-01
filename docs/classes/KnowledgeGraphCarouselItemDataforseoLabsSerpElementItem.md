[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#data_attrid)
- [items](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#items)
- [link](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#link)
- [position](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#title)
- [xpath](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:94537

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
ss:/webfacts:net_worth

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:94528

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[items](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:94533

___

### link

• `Optional` **link**: `any`

link of the element

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[link](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#link)

#### Defined in

main.ts:94530

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:94520

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:94516

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:94513

___

### title

• `Optional` **title**: `string`

title of the link

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[title](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:94524

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:94522

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

main.ts:94542

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

main.ts:94571

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:94564
