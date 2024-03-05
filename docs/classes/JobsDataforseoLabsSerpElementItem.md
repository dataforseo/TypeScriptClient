[dataforseo-client](../README.md) / [Exports](../modules.md) / JobsDataforseoLabsSerpElementItem

# Class: JobsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`JobsDataforseoLabsSerpElementItem`**

## Implements

- [`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](JobsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](JobsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](JobsDataforseoLabsSerpElementItem.md#items)
- [position](JobsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](JobsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](JobsDataforseoLabsSerpElementItem.md#rank_group)
- [title](JobsDataforseoLabsSerpElementItem.md#title)
- [url](JobsDataforseoLabsSerpElementItem.md#url)
- [xpath](JobsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](JobsDataforseoLabsSerpElementItem.md#init)
- [toJSON](JobsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](JobsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new JobsDataforseoLabsSerpElementItem**(`data?`): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md) |

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:94783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94783)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### items

• `Optional` **items**: [`JobsElement`](JobsElement.md)[]

elements of search results found in SERP

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[items](../interfaces/IJobsDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:94779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94779)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[position](../interfaces/IJobsDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:94771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94771)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:94767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94767)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:94764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94764)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[title](../interfaces/IJobsDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:94775](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94775)

___

### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[url](../interfaces/IJobsDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:94777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94777)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IJobsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:94773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94773)

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

[main.ts:94788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94788)

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

[main.ts:94816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94816)

___

### fromJS

▸ **fromJS**(`data`): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:94809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94809)
