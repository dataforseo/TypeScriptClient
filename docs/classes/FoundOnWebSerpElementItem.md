[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / FoundOnWebSerpElementItem

# Class: FoundOnWebSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`FoundOnWebSerpElementItem`**

## Implements

- [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FoundOnWebSerpElementItem.md#constructor)

### Properties

- [\_discriminator](FoundOnWebSerpElementItem.md#_discriminator)
- [items](FoundOnWebSerpElementItem.md#items)
- [position](FoundOnWebSerpElementItem.md#position)
- [rank\_absolute](FoundOnWebSerpElementItem.md#rank_absolute)
- [rank\_group](FoundOnWebSerpElementItem.md#rank_group)
- [rectangle](FoundOnWebSerpElementItem.md#rectangle)
- [related\_searches](FoundOnWebSerpElementItem.md#related_searches)
- [title](FoundOnWebSerpElementItem.md#title)
- [xpath](FoundOnWebSerpElementItem.md#xpath)

### Methods

- [init](FoundOnWebSerpElementItem.md#init)
- [toJSON](FoundOnWebSerpElementItem.md#tojson)
- [fromJS](FoundOnWebSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new FoundOnWebSerpElementItem**(`data?`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md) |

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:34803](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34803)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`FoundOnWebElement`](FoundOnWebElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[items](../interfaces/IFoundOnWebSerpElementItem.md#items)

#### Defined in

[main.ts:34795](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34795)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[position](../interfaces/IFoundOnWebSerpElementItem.md#position)

#### Defined in

[main.ts:34787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34787)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[rank_absolute](../interfaces/IFoundOnWebSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:34783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34783)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[rank_group](../interfaces/IFoundOnWebSerpElementItem.md#rank_group)

#### Defined in

[main.ts:34780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34780)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[rectangle](../interfaces/IFoundOnWebSerpElementItem.md#rectangle)

#### Defined in

[main.ts:34799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34799)

___


### related\_searches

• `Optional` **related\_searches**: `string`[]

search queries related to the elment

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[related_searches](../interfaces/IFoundOnWebSerpElementItem.md#related_searches)

#### Defined in

[main.ts:34793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34793)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[title](../interfaces/IFoundOnWebSerpElementItem.md#title)

#### Defined in

[main.ts:34791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34791)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[xpath](../interfaces/IFoundOnWebSerpElementItem.md#xpath)

#### Defined in

[main.ts:34789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34789)

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

[main.ts:34808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34808)

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

[main.ts:34841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34841)

___


### fromJS

▸ **fromJS**(`data`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:34834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34834)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")