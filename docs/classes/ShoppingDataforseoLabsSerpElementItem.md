[dataforseo-client](../README.md) / [Exports](../modules.md) / ShoppingDataforseoLabsSerpElementItem

# Class: ShoppingDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`ShoppingDataforseoLabsSerpElementItem`**

## Implements

- [`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ShoppingDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ShoppingDataforseoLabsSerpElementItem.md#_discriminator)
- [items](ShoppingDataforseoLabsSerpElementItem.md#items)
- [position](ShoppingDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ShoppingDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ShoppingDataforseoLabsSerpElementItem.md#rank_group)
- [title](ShoppingDataforseoLabsSerpElementItem.md#title)
- [xpath](ShoppingDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](ShoppingDataforseoLabsSerpElementItem.md#init)
- [toJSON](ShoppingDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](ShoppingDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ShoppingDataforseoLabsSerpElementItem**(`data?`): [`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md) |

#### Returns

[`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:94687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94687)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### items

• `Optional` **items**: [`ShoppingElement`](ShoppingElement.md)[]

elements of search results found in SERP

#### Implementation of

[IShoppingDataforseoLabsSerpElementItem](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[items](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:94683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94683)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IShoppingDataforseoLabsSerpElementItem](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[position](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:94677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94677)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IShoppingDataforseoLabsSerpElementItem](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:94673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94673)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IShoppingDataforseoLabsSerpElementItem](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:94670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94670)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IShoppingDataforseoLabsSerpElementItem](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[title](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:94681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94681)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IShoppingDataforseoLabsSerpElementItem](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:94679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94679)

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

[main.ts:94692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94692)

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

[main.ts:94719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94719)

___

### fromJS

▸ **fromJS**(`data`): [`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:94712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94712)
