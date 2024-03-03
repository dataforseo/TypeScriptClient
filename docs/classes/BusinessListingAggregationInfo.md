[Documentation](../README.md) / [Exports](../modules.md) / BusinessListingAggregationInfo

# Class: BusinessListingAggregationInfo

## Implements

- [`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessListingAggregationInfo.md#constructor)

### Properties

- [count](BusinessListingAggregationInfo.md#count)
- [top\_attributes](BusinessListingAggregationInfo.md#top_attributes)
- [top\_categories](BusinessListingAggregationInfo.md#top_categories)
- [top\_countries](BusinessListingAggregationInfo.md#top_countries)
- [top\_place\_topics](BusinessListingAggregationInfo.md#top_place_topics)
- [websites\_count](BusinessListingAggregationInfo.md#websites_count)

### Methods

- [init](BusinessListingAggregationInfo.md#init)
- [toJSON](BusinessListingAggregationInfo.md#tojson)
- [fromJS](BusinessListingAggregationInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessListingAggregationInfo**(`data?`): [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md) |

#### Returns

[`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Defined in

main.ts:189898

## Properties

### count

• `Optional` **count**: `number`

number of unique entities

#### Implementation of

[IBusinessListingAggregationInfo](../interfaces/IBusinessListingAggregationInfo.md).[count](../interfaces/IBusinessListingAggregationInfo.md#count)

#### Defined in

main.ts:189888

___

### top\_attributes

• `Optional` **top\_attributes**: `Object`

the most mentioned service details
service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBusinessListingAggregationInfo](../interfaces/IBusinessListingAggregationInfo.md).[top_attributes](../interfaces/IBusinessListingAggregationInfo.md#top_attributes)

#### Defined in

main.ts:189891

___

### top\_categories

• `Optional` **top\_categories**: `Object`

the most mentioned related categories
top categories displayed with the number of businesses in each category

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBusinessListingAggregationInfo](../interfaces/IBusinessListingAggregationInfo.md).[top_categories](../interfaces/IBusinessListingAggregationInfo.md#top_categories)

#### Defined in

main.ts:189881

___

### top\_countries

• `Optional` **top\_countries**: `Object`

the most mentioned counties
country codes with the biggest number of businesses in the category

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBusinessListingAggregationInfo](../interfaces/IBusinessListingAggregationInfo.md).[top_countries](../interfaces/IBusinessListingAggregationInfo.md#top_countries)

#### Defined in

main.ts:189884

___

### top\_place\_topics

• `Optional` **top\_place\_topics**: `Object`

top keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBusinessListingAggregationInfo](../interfaces/IBusinessListingAggregationInfo.md).[top_place_topics](../interfaces/IBusinessListingAggregationInfo.md#top_place_topics)

#### Defined in

main.ts:189894

___

### websites\_count

• `Optional` **websites\_count**: `number`

number of unique websites

#### Implementation of

[IBusinessListingAggregationInfo](../interfaces/IBusinessListingAggregationInfo.md).[websites_count](../interfaces/IBusinessListingAggregationInfo.md#websites_count)

#### Defined in

main.ts:189886

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

main.ts:189907

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

main.ts:189953

___

### fromJS

▸ **fromJS**(`data`): [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Defined in

main.ts:189946
