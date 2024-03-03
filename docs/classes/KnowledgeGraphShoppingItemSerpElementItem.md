[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphShoppingItemSerpElementItem

# Class: KnowledgeGraphShoppingItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`KnowledgeGraphShoppingItemSerpElementItem`**

## Implements

- [`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphShoppingItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphShoppingItemSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphShoppingItemSerpElementItem.md#data_attrid)
- [items](KnowledgeGraphShoppingItemSerpElementItem.md#items)
- [position](KnowledgeGraphShoppingItemSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphShoppingItemSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphShoppingItemSerpElementItem.md#rank_group)
- [rectangle](KnowledgeGraphShoppingItemSerpElementItem.md#rectangle)
- [title](KnowledgeGraphShoppingItemSerpElementItem.md#title)
- [xpath](KnowledgeGraphShoppingItemSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphShoppingItemSerpElementItem.md#init)
- [toJSON](KnowledgeGraphShoppingItemSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphShoppingItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphShoppingItemSerpElementItem**(`data?`): [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md) |

#### Returns

[`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:27570

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Implementation of

[IKnowledgeGraphShoppingItemSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:27559

___

### items

• `Optional` **items**: [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IKnowledgeGraphShoppingItemSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[items](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#items)

#### Defined in

main.ts:27562

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphShoppingItemSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[position](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#position)

#### Defined in

main.ts:27551

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphShoppingItemSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:27547

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphShoppingItemSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:27544

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IKnowledgeGraphShoppingItemSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[rectangle](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:27566

___

### title

• `Optional` **title**: `string`

title of the place

#### Implementation of

[IKnowledgeGraphShoppingItemSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[title](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#title)

#### Defined in

main.ts:27555

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphShoppingItemSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#xpath)

#### Defined in

main.ts:27553

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

main.ts:27575

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

main.ts:27604

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:27597
