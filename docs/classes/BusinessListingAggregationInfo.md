[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessListingAggregationInfo

# Class: BusinessListingAggregationInfo

Defined in: main.ts:212028

## Implements

- [`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessListingAggregationInfo()

> **new BusinessListingAggregationInfo**(`data`?): [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

Defined in: main.ts:212048

#### Parameters

##### data?

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md)

#### Returns

[`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:212038

number of unique entities

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`count`](../interfaces/IBusinessListingAggregationInfo.md#count)

***

### top\_attributes?

> `optional` **top\_attributes**: `object`

Defined in: main.ts:212041

the most mentioned service details
service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_attributes`](../interfaces/IBusinessListingAggregationInfo.md#top_attributes)

***

### top\_categories?

> `optional` **top\_categories**: `object`

Defined in: main.ts:212031

the most mentioned related categories
top categories displayed with the number of businesses in each category

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_categories`](../interfaces/IBusinessListingAggregationInfo.md#top_categories)

***

### top\_countries?

> `optional` **top\_countries**: `object`

Defined in: main.ts:212034

the most mentioned counties
country codes with the biggest number of businesses in the category

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_countries`](../interfaces/IBusinessListingAggregationInfo.md#top_countries)

***

### top\_place\_topics?

> `optional` **top\_place\_topics**: `object`

Defined in: main.ts:212044

top keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_place_topics`](../interfaces/IBusinessListingAggregationInfo.md#top_place_topics)

***

### websites\_count?

> `optional` **websites\_count**: `number`

Defined in: main.ts:212036

number of unique websites

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`websites_count`](../interfaces/IBusinessListingAggregationInfo.md#websites_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:212057

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:212103

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

Defined in: main.ts:212096

#### Parameters

##### data

`any`

#### Returns

[`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)
