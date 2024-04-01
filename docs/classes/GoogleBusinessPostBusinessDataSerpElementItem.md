[Documentation](../README.md) / [Exports](../modules.md) / GoogleBusinessPostBusinessDataSerpElementItem

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

main.ts:197844

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20532

___

### author

• `Optional` **author**: `string`

author of the post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[author](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#author)

#### Defined in

main.ts:197821

___

### images\_url

• `Optional` **images\_url**: `string`

url of an image included in the post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[images_url](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#images_url)

#### Defined in

main.ts:197829

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

links included in the post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[links](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#links)

#### Defined in

main.ts:197840

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values: right

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[position](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#position)

#### Defined in

main.ts:197817

___

### post\_date

• `Optional` **post\_date**: `string`

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[post_date](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_date)

#### Defined in

main.ts:197833

___

### post\_text

• `Optional` **post\_text**: `string`

main content of a post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[post_text](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_text)

#### Defined in

main.ts:197825

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed updates
absolute position among all present elements

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:197814

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[rank_group](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:197811

___

### snippet

• `Optional` **snippet**: `string`

additional content of a post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[snippet](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#snippet)

#### Defined in

main.ts:197823

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

main.ts:197838

___

### url

• `Optional` **url**: `string`

url of a post

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[url](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#url)

#### Defined in

main.ts:197827

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleBusinessPostBusinessDataSerpElementItem](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[xpath](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#xpath)

#### Defined in

main.ts:197819

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

main.ts:197849

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

main.ts:197882

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

main.ts:197875
