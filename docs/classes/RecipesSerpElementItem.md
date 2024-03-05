[dataforseo-client](../README.md) / [Exports](../modules.md) / RecipesSerpElementItem

# Class: RecipesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`RecipesSerpElementItem`**

## Implements

- [`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RecipesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](RecipesSerpElementItem.md#_discriminator)
- [items](RecipesSerpElementItem.md#items)
- [position](RecipesSerpElementItem.md#position)
- [rank\_absolute](RecipesSerpElementItem.md#rank_absolute)
- [rank\_group](RecipesSerpElementItem.md#rank_group)
- [rectangle](RecipesSerpElementItem.md#rectangle)
- [xpath](RecipesSerpElementItem.md#xpath)

### Methods

- [init](RecipesSerpElementItem.md#init)
- [toJSON](RecipesSerpElementItem.md#tojson)
- [fromJS](RecipesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new RecipesSerpElementItem**(`data?`): [`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md) |

#### Returns

[`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:31535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31535)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### items

• `Optional` **items**: [`RecipesElement`](RecipesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IRecipesSerpElementItem](../interfaces/IRecipesSerpElementItem.md).[items](../interfaces/IRecipesSerpElementItem.md#items)

#### Defined in

[main.ts:31527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31527)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IRecipesSerpElementItem](../interfaces/IRecipesSerpElementItem.md).[position](../interfaces/IRecipesSerpElementItem.md#position)

#### Defined in

[main.ts:31523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31523)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IRecipesSerpElementItem](../interfaces/IRecipesSerpElementItem.md).[rank_absolute](../interfaces/IRecipesSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:31519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31519)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IRecipesSerpElementItem](../interfaces/IRecipesSerpElementItem.md).[rank_group](../interfaces/IRecipesSerpElementItem.md#rank_group)

#### Defined in

[main.ts:31516](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31516)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IRecipesSerpElementItem](../interfaces/IRecipesSerpElementItem.md).[rectangle](../interfaces/IRecipesSerpElementItem.md#rectangle)

#### Defined in

[main.ts:31531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31531)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IRecipesSerpElementItem](../interfaces/IRecipesSerpElementItem.md).[xpath](../interfaces/IRecipesSerpElementItem.md#xpath)

#### Defined in

[main.ts:31525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31525)

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

[main.ts:31540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31540)

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

[main.ts:31567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31567)

___

### fromJS

▸ **fromJS**(`data`): [`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:31560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31560)
