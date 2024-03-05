[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleBusinessPostBusinessDataSerpElementItem

# Class: GoogleBusinessPostBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

  ↳ **`GoogleBusinessPostBusinessDataSerpElementItem`**

## Implements

- [`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleBusinessPostBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleBusinessPostBusinessDataSerpElementItem.md#_discriminator)
- [author](GoogleBusinessPostBusinessDataSerpElementItem.md#author)
- [images\_url](GoogleBusinessPostBusinessDataSerpElementItem.md#images_url)
- [links](GoogleBusinessPostBusinessDataSerpElementItem.md#links)
- [position](GoogleBusinessPostBusinessDataSerpElementItem.md#position)
- [post\_date](GoogleBusinessPostBusinessDataSerpElementItem.md#post_date)
- [post\_text](GoogleBusinessPostBusinessDataSerpElementItem.md#post_text)
- [rank\_absolute](GoogleBusinessPostBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleBusinessPostBusinessDataSerpElementItem.md#rank_group)
- [snippet](GoogleBusinessPostBusinessDataSerpElementItem.md#snippet)
- [timestamp](GoogleBusinessPostBusinessDataSerpElementItem.md#timestamp)
- [url](GoogleBusinessPostBusinessDataSerpElementItem.md#url)
- [xpath](GoogleBusinessPostBusinessDataSerpElementItem.md#xpath)

### Methods

- [init](GoogleBusinessPostBusinessDataSerpElementItem.md#init)
- [toJSON](GoogleBusinessPostBusinessDataSerpElementItem.md#tojson)
- [fromJS](GoogleBusinessPostBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleBusinessPostBusinessDataSerpElementItem**(`data?`): [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md) |

#### Returns

[`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:192383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192383)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20076)

___

### author

• `Optional` **author**: `string`

author of the post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[author](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#author)

#### Defined in

[main.ts:192360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192360)

___

### images\_url

• `Optional` **images\_url**: `string`

url of an image included in the post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[images_url](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#images_url)

#### Defined in

[main.ts:192368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192368)

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

links included in the post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[links](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#links)

#### Defined in

[main.ts:192379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192379)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values: right

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[position](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#position)

#### Defined in

[main.ts:192356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192356)

___

### post\_date

• `Optional` **post\_date**: `string`

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[post_date](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_date)

#### Defined in

[main.ts:192372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192372)

___

### post\_text

• `Optional` **post\_text**: `string`

main content of a post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[post_text](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_text)

#### Defined in

[main.ts:192364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192364)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed updates
absolute position among all present elements

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:192353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192353)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[rank_group](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_group)

#### Defined in

[main.ts:192350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192350)

___

### snippet

• `Optional` **snippet**: `string`

additional content of a post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[snippet](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#snippet)

#### Defined in

[main.ts:192362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192362)

___

### timestamp

• `Optional` **timestamp**: `string`

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[timestamp](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#timestamp)

#### Defined in

[main.ts:192377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192377)

___

### url

• `Optional` **url**: `string`

url of a post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[url](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#url)

#### Defined in

[main.ts:192366](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192366)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[xpath](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#xpath)

#### Defined in

[main.ts:192358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192358)

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

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[init](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

[main.ts:192388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192388)

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

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[toJSON](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

[main.ts:192421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192421)

___

### fromJS

▸ **fromJS**(`data`): [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:192414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192414)
