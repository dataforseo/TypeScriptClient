[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ExploreBrandsSerpElementItem

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

[main.ts:35299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35299)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`ExploreBrandsElement`](ExploreBrandsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[items](../interfaces/IExploreBrandsSerpElementItem.md#items)

#### Defined in

[main.ts:35291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35291)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[position](../interfaces/IExploreBrandsSerpElementItem.md#position)

#### Defined in

[main.ts:35285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35285)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[rank_absolute](../interfaces/IExploreBrandsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:35281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35281)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[rank_group](../interfaces/IExploreBrandsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:35278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35278)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[rectangle](../interfaces/IExploreBrandsSerpElementItem.md#rectangle)

#### Defined in

[main.ts:35295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35295)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[title](../interfaces/IExploreBrandsSerpElementItem.md#title)

#### Defined in

[main.ts:35289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35289)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IExploreBrandsSerpElementItem](../interfaces/IExploreBrandsSerpElementItem.md).[xpath](../interfaces/IExploreBrandsSerpElementItem.md#xpath)

#### Defined in

[main.ts:35287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35287)

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

[main.ts:35304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35304)

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

[main.ts:35332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35332)

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

[main.ts:35325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35325)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")