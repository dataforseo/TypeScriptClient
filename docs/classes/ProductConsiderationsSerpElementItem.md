[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductConsiderationsSerpElementItem

# Class: ProductConsiderationsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`ProductConsiderationsSerpElementItem`**

## Implements

- [`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductConsiderationsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ProductConsiderationsSerpElementItem.md#_discriminator)
- [items](ProductConsiderationsSerpElementItem.md#items)
- [position](ProductConsiderationsSerpElementItem.md#position)
- [rank\_absolute](ProductConsiderationsSerpElementItem.md#rank_absolute)
- [rank\_group](ProductConsiderationsSerpElementItem.md#rank_group)
- [rectangle](ProductConsiderationsSerpElementItem.md#rectangle)
- [title](ProductConsiderationsSerpElementItem.md#title)
- [xpath](ProductConsiderationsSerpElementItem.md#xpath)

### Methods

- [init](ProductConsiderationsSerpElementItem.md#init)
- [toJSON](ProductConsiderationsSerpElementItem.md#tojson)
- [fromJS](ProductConsiderationsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ProductConsiderationsSerpElementItem**(`data?`): [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md) |

#### Returns

[`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:34627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34627)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### items

• `Optional` **items**: [`ProductConsiderationsElement`](ProductConsiderationsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IProductConsiderationsSerpElementItem](../interfaces/IProductConsiderationsSerpElementItem.md).[items](../interfaces/IProductConsiderationsSerpElementItem.md#items)

#### Defined in

[main.ts:34619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34619)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IProductConsiderationsSerpElementItem](../interfaces/IProductConsiderationsSerpElementItem.md).[position](../interfaces/IProductConsiderationsSerpElementItem.md#position)

#### Defined in

[main.ts:34613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34613)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IProductConsiderationsSerpElementItem](../interfaces/IProductConsiderationsSerpElementItem.md).[rank_absolute](../interfaces/IProductConsiderationsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:34609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34609)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IProductConsiderationsSerpElementItem](../interfaces/IProductConsiderationsSerpElementItem.md).[rank_group](../interfaces/IProductConsiderationsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:34606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34606)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IProductConsiderationsSerpElementItem](../interfaces/IProductConsiderationsSerpElementItem.md).[rectangle](../interfaces/IProductConsiderationsSerpElementItem.md#rectangle)

#### Defined in

[main.ts:34623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34623)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IProductConsiderationsSerpElementItem](../interfaces/IProductConsiderationsSerpElementItem.md).[title](../interfaces/IProductConsiderationsSerpElementItem.md#title)

#### Defined in

[main.ts:34617](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34617)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IProductConsiderationsSerpElementItem](../interfaces/IProductConsiderationsSerpElementItem.md).[xpath](../interfaces/IProductConsiderationsSerpElementItem.md#xpath)

#### Defined in

[main.ts:34615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34615)

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

[main.ts:34632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34632)

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

[main.ts:34660](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34660)

___

### fromJS

▸ **fromJS**(`data`): [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:34653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34653)
