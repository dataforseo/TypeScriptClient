[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleTrendsTopicsListElementItem

# Class: GoogleTrendsTopicsListElementItem

## Hierarchy

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)
  
  ↳ **`GoogleTrendsTopicsListElementItem`**

## Implements

- [`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleTrendsTopicsListElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleTrendsTopicsListElementItem.md#_discriminator)
- [data](GoogleTrendsTopicsListElementItem.md#data)
- [keywords](GoogleTrendsTopicsListElementItem.md#keywords)
- [position](GoogleTrendsTopicsListElementItem.md#position)
- [title](GoogleTrendsTopicsListElementItem.md#title)

### Methods

- [init](GoogleTrendsTopicsListElementItem.md#init)
- [toJSON](GoogleTrendsTopicsListElementItem.md#tojson)
- [fromJS](GoogleTrendsTopicsListElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleTrendsTopicsListElementItem**(`data?`): [`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md) |

#### Returns

[`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

#### Overrides

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[constructor](BaseGoogleTrendsItem.md#constructor)

#### Defined in

[main.ts:120925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120925)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[_discriminator](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

[main.ts:20382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20382)

___


### data

• `Optional` **data**: [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

Google Trends data from the corresponding item

#### Implementation of

[IGoogleTrendsTopicsListElementItem](../interfaces/IGoogleTrendsTopicsListElementItem.md).[data](../interfaces/IGoogleTrendsTopicsListElementItem.md#data)

#### Defined in

[main.ts:120921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120921)

___


### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_topics_list element is based on the keywords listed in this array

#### Implementation of

[IGoogleTrendsTopicsListElementItem](../interfaces/IGoogleTrendsTopicsListElementItem.md).[keywords](../interfaces/IGoogleTrendsTopicsListElementItem.md#keywords)

#### Defined in

[main.ts:120919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120919)

___


### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[IGoogleTrendsTopicsListElementItem](../interfaces/IGoogleTrendsTopicsListElementItem.md).[position](../interfaces/IGoogleTrendsTopicsListElementItem.md#position)

#### Defined in

[main.ts:120914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120914)

___


### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[IGoogleTrendsTopicsListElementItem](../interfaces/IGoogleTrendsTopicsListElementItem.md).[title](../interfaces/IGoogleTrendsTopicsListElementItem.md#title)

#### Defined in

[main.ts:120916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120916)

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

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[init](BaseGoogleTrendsItem.md#init)

#### Defined in

[main.ts:120930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120930)

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

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[toJSON](BaseGoogleTrendsItem.md#tojson)

#### Defined in

[main.ts:120955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120955)

___


### fromJS

▸ **fromJS**(`data`): [`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

#### Overrides

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[fromJS](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

[main.ts:120948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120948)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")