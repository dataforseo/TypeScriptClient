[Documentation](../README.md) / [Exports](../modules.md) / DiscussionsAndForumsElement

# Class: DiscussionsAndForumsElement

## Implements

- [`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DiscussionsAndForumsElement.md#constructor)

### Properties

- [description](DiscussionsAndForumsElement.md#description)
- [domain](DiscussionsAndForumsElement.md#domain)
- [posts\_count](DiscussionsAndForumsElement.md#posts_count)
- [source](DiscussionsAndForumsElement.md#source)
- [timestamp](DiscussionsAndForumsElement.md#timestamp)
- [title](DiscussionsAndForumsElement.md#title)
- [type](DiscussionsAndForumsElement.md#type)
- [url](DiscussionsAndForumsElement.md#url)

### Methods

- [init](DiscussionsAndForumsElement.md#init)
- [toJSON](DiscussionsAndForumsElement.md#tojson)
- [fromJS](DiscussionsAndForumsElement.md#fromjs)

## Constructors

### constructor

• **new DiscussionsAndForumsElement**(`data?`): [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md) |

#### Returns

[`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Defined in

main.ts:36583

## Properties

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IDiscussionsAndForumsElement](../interfaces/IDiscussionsAndForumsElement.md).[description](../interfaces/IDiscussionsAndForumsElement.md#description)

#### Defined in

main.ts:36572

___

### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[IDiscussionsAndForumsElement](../interfaces/IDiscussionsAndForumsElement.md).[domain](../interfaces/IDiscussionsAndForumsElement.md#domain)

#### Defined in

main.ts:36567

___

### posts\_count

• `Optional` **posts\_count**: `number`

number of posts from the discussion on the related source

#### Implementation of

[IDiscussionsAndForumsElement](../interfaces/IDiscussionsAndForumsElement.md).[posts_count](../interfaces/IDiscussionsAndForumsElement.md#posts_count)

#### Defined in

main.ts:36579

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[IDiscussionsAndForumsElement](../interfaces/IDiscussionsAndForumsElement.md).[source](../interfaces/IDiscussionsAndForumsElement.md#source)

#### Defined in

main.ts:36570

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IDiscussionsAndForumsElement](../interfaces/IDiscussionsAndForumsElement.md).[timestamp](../interfaces/IDiscussionsAndForumsElement.md#timestamp)

#### Defined in

main.ts:36577

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IDiscussionsAndForumsElement](../interfaces/IDiscussionsAndForumsElement.md).[title](../interfaces/IDiscussionsAndForumsElement.md#title)

#### Defined in

main.ts:36563

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IDiscussionsAndForumsElement](../interfaces/IDiscussionsAndForumsElement.md).[type](../interfaces/IDiscussionsAndForumsElement.md#type)

#### Defined in

main.ts:36561

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IDiscussionsAndForumsElement](../interfaces/IDiscussionsAndForumsElement.md).[url](../interfaces/IDiscussionsAndForumsElement.md#url)

#### Defined in

main.ts:36565

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:36592

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:36616

___

### fromJS

▸ **fromJS**(`data`): [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Defined in

main.ts:36609
