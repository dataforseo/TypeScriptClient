[dataforseo-client](../README.md) / [Exports](../modules.md) / PopularProductsDataforseoLabsSerpElementItem

# Class: PopularProductsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`PopularProductsDataforseoLabsSerpElementItem`**

## Implements

- [`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PopularProductsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PopularProductsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](PopularProductsDataforseoLabsSerpElementItem.md#items)
- [position](PopularProductsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](PopularProductsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](PopularProductsDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](PopularProductsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](PopularProductsDataforseoLabsSerpElementItem.md#init)
- [toJSON](PopularProductsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](PopularProductsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PopularProductsDataforseoLabsSerpElementItem**(`data?`): [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md) |

#### Returns

[`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:95355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95355)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### items

• `Optional` **items**: [`PopularProductsElement`](PopularProductsElement.md)[]

elements of search results found in SERP

#### Implementation of

[IPopularProductsDataforseoLabsSerpElementItem](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[items](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:95351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95351)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPopularProductsDataforseoLabsSerpElementItem](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[position](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:95347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95347)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPopularProductsDataforseoLabsSerpElementItem](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:95343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95343)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPopularProductsDataforseoLabsSerpElementItem](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:95340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95340)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPopularProductsDataforseoLabsSerpElementItem](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:95349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95349)

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

[main.ts:95360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95360)

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

[main.ts:95386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95386)

___

### fromJS

▸ **fromJS**(`data`): [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:95379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95379)
