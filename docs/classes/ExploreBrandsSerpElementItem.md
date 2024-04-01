[Documentation](../README.md) / [Exports](../modules.md) / ExploreBrandsSerpElementItem

# Class: ExploreBrandsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`ExploreBrandsSerpElementItem`**

## Implements

- [`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ExploreBrandsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ExploreBrandsSerpElementItem.md#_discriminator)
- [items](ExploreBrandsSerpElementItem.md#items)
- [position](ExploreBrandsSerpElementItem.md#position)
- [rank\_absolute](ExploreBrandsSerpElementItem.md#rank_absolute)
- [rank\_group](ExploreBrandsSerpElementItem.md#rank_group)
- [rectangle](ExploreBrandsSerpElementItem.md#rectangle)
- [title](ExploreBrandsSerpElementItem.md#title)
- [xpath](ExploreBrandsSerpElementItem.md#xpath)

### Methods

- [init](ExploreBrandsSerpElementItem.md#init)
- [toJSON](ExploreBrandsSerpElementItem.md#tojson)
- [fromJS](ExploreBrandsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ExploreBrandsSerpElementItem**(`data?`): [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md) |

#### Returns

[`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:36263

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`ExploreBrandsElement`](ExploreBrandsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[items](../interfaces/IExploreBrandsSerpElementItem.md#items)

#### Defined in

main.ts:36255

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[position](../interfaces/IExploreBrandsSerpElementItem.md#position)

#### Defined in

main.ts:36248

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[rank_absolute](../interfaces/IExploreBrandsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:36244

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[rank_group](../interfaces/IExploreBrandsSerpElementItem.md#rank_group)

#### Defined in

main.ts:36240

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[rectangle](../interfaces/IExploreBrandsSerpElementItem.md#rectangle)

#### Defined in

main.ts:36259

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[title](../interfaces/IExploreBrandsSerpElementItem.md#title)

#### Defined in

main.ts:36252

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[xpath](../interfaces/IExploreBrandsSerpElementItem.md#xpath)

#### Defined in

main.ts:36250

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

main.ts:36268

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

main.ts:36296

___

### fromJS

▸ **fromJS**(`data`): [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36289
