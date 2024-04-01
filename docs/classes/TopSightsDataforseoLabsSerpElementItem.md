[Documentation](../README.md) / [Exports](../modules.md) / TopSightsDataforseoLabsSerpElementItem

# Class: TopSightsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`TopSightsDataforseoLabsSerpElementItem`**

## Implements

- [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TopSightsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TopSightsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](TopSightsDataforseoLabsSerpElementItem.md#items)
- [position](TopSightsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](TopSightsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](TopSightsDataforseoLabsSerpElementItem.md#rank_group)
- [title](TopSightsDataforseoLabsSerpElementItem.md#title)
- [xpath](TopSightsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](TopSightsDataforseoLabsSerpElementItem.md#init)
- [toJSON](TopSightsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](TopSightsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TopSightsDataforseoLabsSerpElementItem**(`data?`): [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md) |

#### Returns

[`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:97540

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`TopSightsElement`](TopSightsElement.md)[]

elements of search results found in SERP

#### Implementation of

[ITopSightsDataforseoLabsSerpElementItem](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[items](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97536

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ITopSightsDataforseoLabsSerpElementItem](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[position](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97530

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ITopSightsDataforseoLabsSerpElementItem](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97526

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITopSightsDataforseoLabsSerpElementItem](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97523

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[ITopSightsDataforseoLabsSerpElementItem](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[title](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97534

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ITopSightsDataforseoLabsSerpElementItem](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97532

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

main.ts:97545

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

main.ts:97572

___

### fromJS

▸ **fromJS**(`data`): [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97565
