[Documentation](../README.md) / [Exports](../modules.md) / RefineProductsSerpElementItem

# Class: RefineProductsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`RefineProductsSerpElementItem`**

## Implements

- [`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RefineProductsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](RefineProductsSerpElementItem.md#_discriminator)
- [items](RefineProductsSerpElementItem.md#items)
- [position](RefineProductsSerpElementItem.md#position)
- [rank\_absolute](RefineProductsSerpElementItem.md#rank_absolute)
- [rank\_group](RefineProductsSerpElementItem.md#rank_group)
- [rectangle](RefineProductsSerpElementItem.md#rectangle)
- [title](RefineProductsSerpElementItem.md#title)
- [xpath](RefineProductsSerpElementItem.md#xpath)

### Methods

- [init](RefineProductsSerpElementItem.md#init)
- [toJSON](RefineProductsSerpElementItem.md#tojson)
- [fromJS](RefineProductsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new RefineProductsSerpElementItem**(`data?`): [`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md) |

#### Returns

[`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:35249

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### items

• `Optional` **items**: [`RefineProductsElement`](RefineProductsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[items](../interfaces/IRefineProductsSerpElementItem.md#items)

#### Defined in

main.ts:35241

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[position](../interfaces/IRefineProductsSerpElementItem.md#position)

#### Defined in

main.ts:35235

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[rank_absolute](../interfaces/IRefineProductsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:35231

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[rank_group](../interfaces/IRefineProductsSerpElementItem.md#rank_group)

#### Defined in

main.ts:35228

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[rectangle](../interfaces/IRefineProductsSerpElementItem.md#rectangle)

#### Defined in

main.ts:35245

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[title](../interfaces/IRefineProductsSerpElementItem.md#title)

#### Defined in

main.ts:35239

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[xpath](../interfaces/IRefineProductsSerpElementItem.md#xpath)

#### Defined in

main.ts:35237

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

main.ts:35254

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

main.ts:35282

___

### fromJS

▸ **fromJS**(`data`): [`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35275
