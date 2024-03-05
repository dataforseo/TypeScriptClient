[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleTrendsMapElementItem

# Class: GoogleTrendsMapElementItem

## Hierarchy

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

  ↳ **`GoogleTrendsMapElementItem`**

## Implements

- [`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleTrendsMapElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleTrendsMapElementItem.md#_discriminator)
- [data](GoogleTrendsMapElementItem.md#data)
- [keywords](GoogleTrendsMapElementItem.md#keywords)
- [position](GoogleTrendsMapElementItem.md#position)
- [title](GoogleTrendsMapElementItem.md#title)

### Methods

- [init](GoogleTrendsMapElementItem.md#init)
- [toJSON](GoogleTrendsMapElementItem.md#tojson)
- [fromJS](GoogleTrendsMapElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleTrendsMapElementItem**(`data?`): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md) |

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[constructor](BaseGoogleTrendsItem.md#constructor)

#### Defined in

[main.ts:120691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120691)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[_discriminator](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

[main.ts:20382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20382)

___

### data

• `Optional` **data**: [`TrendsMapDataInfo`](TrendsMapDataInfo.md)[]

Google Trends data from the corresponding item

#### Implementation of

[IGoogleTrendsMapElementItem](../interfaces/IGoogleTrendsMapElementItem.md).[data](../interfaces/IGoogleTrendsMapElementItem.md#data)

#### Defined in

[main.ts:120687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120687)

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_map element is based on the keywords listed in this array

#### Implementation of

[IGoogleTrendsMapElementItem](../interfaces/IGoogleTrendsMapElementItem.md).[keywords](../interfaces/IGoogleTrendsMapElementItem.md#keywords)

#### Defined in

[main.ts:120685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120685)

___

### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[IGoogleTrendsMapElementItem](../interfaces/IGoogleTrendsMapElementItem.md).[position](../interfaces/IGoogleTrendsMapElementItem.md#position)

#### Defined in

[main.ts:120680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120680)

___

### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[IGoogleTrendsMapElementItem](../interfaces/IGoogleTrendsMapElementItem.md).[title](../interfaces/IGoogleTrendsMapElementItem.md#title)

#### Defined in

[main.ts:120682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120682)

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

[main.ts:120696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120696)

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

[main.ts:120725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120725)

___

### fromJS

▸ **fromJS**(`data`): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[fromJS](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

[main.ts:120718](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120718)
