[dataforseo-client](../README.md) / [Exports](../modules.md) / JobsSerpElementItem

# Class: JobsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`JobsSerpElementItem`**

## Implements

- [`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](JobsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](JobsSerpElementItem.md#_discriminator)
- [items](JobsSerpElementItem.md#items)
- [position](JobsSerpElementItem.md#position)
- [rank\_absolute](JobsSerpElementItem.md#rank_absolute)
- [rank\_group](JobsSerpElementItem.md#rank_group)
- [rectangle](JobsSerpElementItem.md#rectangle)
- [title](JobsSerpElementItem.md#title)
- [url](JobsSerpElementItem.md#url)
- [xpath](JobsSerpElementItem.md#xpath)

### Methods

- [init](JobsSerpElementItem.md#init)
- [toJSON](JobsSerpElementItem.md#tojson)
- [fromJS](JobsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new JobsSerpElementItem**(`data?`): [`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md) |

#### Returns

[`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:29423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29423)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### items

• `Optional` **items**: [`JobsElement`](JobsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IJobsSerpElementItem](../interfaces/IJobsSerpElementItem.md).[items](../interfaces/IJobsSerpElementItem.md#items)

#### Defined in

[main.ts:29415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29415)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IJobsSerpElementItem](../interfaces/IJobsSerpElementItem.md).[position](../interfaces/IJobsSerpElementItem.md#position)

#### Defined in

[main.ts:29407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29407)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IJobsSerpElementItem](../interfaces/IJobsSerpElementItem.md).[rank_absolute](../interfaces/IJobsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:29403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29403)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IJobsSerpElementItem](../interfaces/IJobsSerpElementItem.md).[rank_group](../interfaces/IJobsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:29400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29400)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IJobsSerpElementItem](../interfaces/IJobsSerpElementItem.md).[rectangle](../interfaces/IJobsSerpElementItem.md#rectangle)

#### Defined in

[main.ts:29419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29419)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IJobsSerpElementItem](../interfaces/IJobsSerpElementItem.md).[title](../interfaces/IJobsSerpElementItem.md#title)

#### Defined in

[main.ts:29411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29411)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IJobsSerpElementItem](../interfaces/IJobsSerpElementItem.md).[url](../interfaces/IJobsSerpElementItem.md#url)

#### Defined in

[main.ts:29413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29413)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IJobsSerpElementItem](../interfaces/IJobsSerpElementItem.md).[xpath](../interfaces/IJobsSerpElementItem.md#xpath)

#### Defined in

[main.ts:29409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29409)

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

[main.ts:29428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29428)

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

[main.ts:29457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29457)

___

### fromJS

▸ **fromJS**(`data`): [`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`JobsSerpElementItem`](JobsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:29450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29450)
