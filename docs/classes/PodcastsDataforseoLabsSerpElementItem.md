[dataforseo-client](../README.md) / [Exports](../modules.md) / PodcastsDataforseoLabsSerpElementItem

# Class: PodcastsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`PodcastsDataforseoLabsSerpElementItem`**

## Implements

- [`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PodcastsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PodcastsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](PodcastsDataforseoLabsSerpElementItem.md#items)
- [position](PodcastsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](PodcastsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](PodcastsDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](PodcastsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](PodcastsDataforseoLabsSerpElementItem.md#init)
- [toJSON](PodcastsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](PodcastsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PodcastsDataforseoLabsSerpElementItem**(`data?`): [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md) |

#### Returns

[`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:95443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95443)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### items

• `Optional` **items**: [`PodcastsElement`](PodcastsElement.md)[]

elements of search results found in SERP

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[items](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:95439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95439)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[position](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:95435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95435)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:95431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95431)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:95428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95428)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:95437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95437)

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

[main.ts:95448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95448)

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

[main.ts:95474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95474)

___

### fromJS

▸ **fromJS**(`data`): [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:95467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95467)
