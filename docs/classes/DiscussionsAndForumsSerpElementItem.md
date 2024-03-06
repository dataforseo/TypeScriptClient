[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DiscussionsAndForumsSerpElementItem

# Class: DiscussionsAndForumsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`DiscussionsAndForumsSerpElementItem`**

## Implements

- [`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DiscussionsAndForumsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](DiscussionsAndForumsSerpElementItem.md#_discriminator)
- [items](DiscussionsAndForumsSerpElementItem.md#items)
- [position](DiscussionsAndForumsSerpElementItem.md#position)
- [rank\_absolute](DiscussionsAndForumsSerpElementItem.md#rank_absolute)
- [rank\_group](DiscussionsAndForumsSerpElementItem.md#rank_group)
- [rectangle](DiscussionsAndForumsSerpElementItem.md#rectangle)
- [title](DiscussionsAndForumsSerpElementItem.md#title)
- [xpath](DiscussionsAndForumsSerpElementItem.md#xpath)

### Methods

- [init](DiscussionsAndForumsSerpElementItem.md#init)
- [toJSON](DiscussionsAndForumsSerpElementItem.md#tojson)
- [fromJS](DiscussionsAndForumsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new DiscussionsAndForumsSerpElementItem**(`data?`): [`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md) |

#### Returns

[`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:35711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35711)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IDiscussionsAndForumsSerpElementItem](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[items](../interfaces/IDiscussionsAndForumsSerpElementItem.md#items)

#### Defined in

[main.ts:35703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35703)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IDiscussionsAndForumsSerpElementItem](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[position](../interfaces/IDiscussionsAndForumsSerpElementItem.md#position)

#### Defined in

[main.ts:35697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35697)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IDiscussionsAndForumsSerpElementItem](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[rank_absolute](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:35693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35693)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IDiscussionsAndForumsSerpElementItem](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[rank_group](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:35690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35690)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IDiscussionsAndForumsSerpElementItem](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[rectangle](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rectangle)

#### Defined in

[main.ts:35707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35707)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IDiscussionsAndForumsSerpElementItem](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[title](../interfaces/IDiscussionsAndForumsSerpElementItem.md#title)

#### Defined in

[main.ts:35701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35701)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IDiscussionsAndForumsSerpElementItem](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[xpath](../interfaces/IDiscussionsAndForumsSerpElementItem.md#xpath)

#### Defined in

[main.ts:35699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35699)

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

[main.ts:35716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35716)

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

[main.ts:35744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35744)

___


### fromJS

▸ **fromJS**(`data`): [`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:35737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35737)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")