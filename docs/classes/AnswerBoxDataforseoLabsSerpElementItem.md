[dataforseo-client](../README.md) / [Exports](../modules.md) / AnswerBoxDataforseoLabsSerpElementItem

# Class: AnswerBoxDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`AnswerBoxDataforseoLabsSerpElementItem`**

## Implements

- [`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AnswerBoxDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AnswerBoxDataforseoLabsSerpElementItem.md#_discriminator)
- [links](AnswerBoxDataforseoLabsSerpElementItem.md#links)
- [position](AnswerBoxDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](AnswerBoxDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](AnswerBoxDataforseoLabsSerpElementItem.md#rank_group)
- [text](AnswerBoxDataforseoLabsSerpElementItem.md#text)
- [xpath](AnswerBoxDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](AnswerBoxDataforseoLabsSerpElementItem.md#init)
- [toJSON](AnswerBoxDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](AnswerBoxDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AnswerBoxDataforseoLabsSerpElementItem**(`data?`): [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md) |

#### Returns

[`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:92705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92705)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[links](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#links)

#### Defined in

[main.ts:92701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92701)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[position](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:92692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92692)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:92688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92688)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:92685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92685)

___

### text

• `Optional` **text**: `string`[]

text
if there is none, equals null

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[text](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#text)

#### Defined in

[main.ts:92697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92697)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:92694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92694)

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

[main.ts:92710](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92710)

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

[main.ts:92741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92741)

___

### fromJS

▸ **fromJS**(`data`): [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:92734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92734)
