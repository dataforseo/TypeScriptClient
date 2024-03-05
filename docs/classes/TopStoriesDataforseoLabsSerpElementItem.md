[dataforseo-client](../README.md) / [Exports](../modules.md) / TopStoriesDataforseoLabsSerpElementItem

# Class: TopStoriesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`TopStoriesDataforseoLabsSerpElementItem`**

## Implements

- [`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TopStoriesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TopStoriesDataforseoLabsSerpElementItem.md#_discriminator)
- [items](TopStoriesDataforseoLabsSerpElementItem.md#items)
- [position](TopStoriesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](TopStoriesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](TopStoriesDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](TopStoriesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](TopStoriesDataforseoLabsSerpElementItem.md#init)
- [toJSON](TopStoriesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](TopStoriesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TopStoriesDataforseoLabsSerpElementItem**(`data?`): [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md) |

#### Returns

[`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:92609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92609)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### items

• `Optional` **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ITopStoriesDataforseoLabsSerpElementItem](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[items](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:92605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92605)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ITopStoriesDataforseoLabsSerpElementItem](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[position](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:92600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92600)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ITopStoriesDataforseoLabsSerpElementItem](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:92596](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92596)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITopStoriesDataforseoLabsSerpElementItem](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:92593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92593)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ITopStoriesDataforseoLabsSerpElementItem](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:92602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92602)

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

[main.ts:92614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92614)

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

[main.ts:92640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92640)

___

### fromJS

▸ **fromJS**(`data`): [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:92633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92633)
