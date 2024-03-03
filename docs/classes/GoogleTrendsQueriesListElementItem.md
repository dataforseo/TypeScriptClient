[Documentation](../README.md) / [Exports](../modules.md) / GoogleTrendsQueriesListElementItem

# Class: GoogleTrendsQueriesListElementItem

## Hierarchy

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

  ↳ **`GoogleTrendsQueriesListElementItem`**

## Implements

- [`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleTrendsQueriesListElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleTrendsQueriesListElementItem.md#_discriminator)
- [data](GoogleTrendsQueriesListElementItem.md#data)
- [keywords](GoogleTrendsQueriesListElementItem.md#keywords)
- [position](GoogleTrendsQueriesListElementItem.md#position)
- [title](GoogleTrendsQueriesListElementItem.md#title)

### Methods

- [init](GoogleTrendsQueriesListElementItem.md#init)
- [toJSON](GoogleTrendsQueriesListElementItem.md#tojson)
- [fromJS](GoogleTrendsQueriesListElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleTrendsQueriesListElementItem**(`data?`): [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md) |

#### Returns

[`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Overrides

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[constructor](BaseGoogleTrendsItem.md#constructor)

#### Defined in

main.ts:121281

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[_discriminator](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

main.ts:20382

___

### data

• `Optional` **data**: [`QueriesListDataInfo`](QueriesListDataInfo.md)

Google Trends data from the corresponding item

#### Implementation of

[IGoogleTrendsQueriesListElementItem](../interfaces/IGoogleTrendsQueriesListElementItem.md).[data](../interfaces/IGoogleTrendsQueriesListElementItem.md#data)

#### Defined in

main.ts:121277

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_queries_list element is based on the keywords listed in this array

#### Implementation of

[IGoogleTrendsQueriesListElementItem](../interfaces/IGoogleTrendsQueriesListElementItem.md).[keywords](../interfaces/IGoogleTrendsQueriesListElementItem.md#keywords)

#### Defined in

main.ts:121275

___

### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[IGoogleTrendsQueriesListElementItem](../interfaces/IGoogleTrendsQueriesListElementItem.md).[position](../interfaces/IGoogleTrendsQueriesListElementItem.md#position)

#### Defined in

main.ts:121270

___

### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[IGoogleTrendsQueriesListElementItem](../interfaces/IGoogleTrendsQueriesListElementItem.md).[title](../interfaces/IGoogleTrendsQueriesListElementItem.md#title)

#### Defined in

main.ts:121272

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

main.ts:121286

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

main.ts:121311

___

### fromJS

▸ **fromJS**(`data`): [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Overrides

[BaseGoogleTrendsItem](BaseGoogleTrendsItem.md).[fromJS](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

main.ts:121304
