[Documentation](../README.md) / [Exports](../modules.md) / RecipesDataforseoLabsSerpElementItem

# Class: RecipesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`RecipesDataforseoLabsSerpElementItem`**

## Implements

- [`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RecipesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](RecipesDataforseoLabsSerpElementItem.md#_discriminator)
- [items](RecipesDataforseoLabsSerpElementItem.md#items)
- [position](RecipesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](RecipesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](RecipesDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](RecipesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](RecipesDataforseoLabsSerpElementItem.md#init)
- [toJSON](RecipesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](RecipesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new RecipesDataforseoLabsSerpElementItem**(`data?`): [`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md) |

#### Returns

[`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:97450

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`RecipesElement`](RecipesElement.md)[]

elements of search results found in SERP

#### Implementation of

[IRecipesDataforseoLabsSerpElementItem](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[items](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97446

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IRecipesDataforseoLabsSerpElementItem](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[position](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97442

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IRecipesDataforseoLabsSerpElementItem](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97438

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IRecipesDataforseoLabsSerpElementItem](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97435

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IRecipesDataforseoLabsSerpElementItem](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97444

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

main.ts:97455

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

main.ts:97481

___

### fromJS

▸ **fromJS**(`data`): [`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97474
