[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ShoppingSerpElementItem

# Class: ShoppingSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`ShoppingSerpElementItem`**

## Implements

- [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ShoppingSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ShoppingSerpElementItem.md#_discriminator)
- [items](ShoppingSerpElementItem.md#items)
- [position](ShoppingSerpElementItem.md#position)
- [rank\_absolute](ShoppingSerpElementItem.md#rank_absolute)
- [rank\_group](ShoppingSerpElementItem.md#rank_group)
- [rectangle](ShoppingSerpElementItem.md#rectangle)
- [title](ShoppingSerpElementItem.md#title)
- [xpath](ShoppingSerpElementItem.md#xpath)

### Methods

- [init](ShoppingSerpElementItem.md#init)
- [toJSON](ShoppingSerpElementItem.md#tojson)
- [fromJS](ShoppingSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ShoppingSerpElementItem**(`data?`): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md) |

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:30521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30521)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`ShoppingElement`](ShoppingElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[items](../interfaces/IShoppingSerpElementItem.md#items)

#### Defined in

[main.ts:30513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30513)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[position](../interfaces/IShoppingSerpElementItem.md#position)

#### Defined in

[main.ts:30507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30507)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[rank_absolute](../interfaces/IShoppingSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:30503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30503)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[rank_group](../interfaces/IShoppingSerpElementItem.md#rank_group)

#### Defined in

[main.ts:30500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30500)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[rectangle](../interfaces/IShoppingSerpElementItem.md#rectangle)

#### Defined in

[main.ts:30517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30517)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[title](../interfaces/IShoppingSerpElementItem.md#title)

#### Defined in

[main.ts:30511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30511)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[xpath](../interfaces/IShoppingSerpElementItem.md#xpath)

#### Defined in

[main.ts:30509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30509)

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

[main.ts:30526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30526)

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

[main.ts:30554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30554)

___


### fromJS

▸ **fromJS**(`data`): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:30547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30547)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")