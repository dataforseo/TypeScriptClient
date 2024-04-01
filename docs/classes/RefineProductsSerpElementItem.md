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

main.ts:36065

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`RefineProductsElement`](RefineProductsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[items](../interfaces/IRefineProductsSerpElementItem.md#items)

#### Defined in

main.ts:36057

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[position](../interfaces/IRefineProductsSerpElementItem.md#position)

#### Defined in

main.ts:36050

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[rank_absolute](../interfaces/IRefineProductsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:36046

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[rank_group](../interfaces/IRefineProductsSerpElementItem.md#rank_group)

#### Defined in

main.ts:36042

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[rectangle](../interfaces/IRefineProductsSerpElementItem.md#rectangle)

#### Defined in

main.ts:36061

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[title](../interfaces/IRefineProductsSerpElementItem.md#title)

#### Defined in

main.ts:36054

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IRefineProductsSerpElementItem](../interfaces/IRefineProductsSerpElementItem.md).[xpath](../interfaces/IRefineProductsSerpElementItem.md#xpath)

#### Defined in

main.ts:36052

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

main.ts:36070

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

main.ts:36098

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

main.ts:36091
