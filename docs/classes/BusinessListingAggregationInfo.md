[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessListingAggregationInfo

# Class: BusinessListingAggregationInfo

## Implements

- [`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessListingAggregationInfo()

> **new BusinessListingAggregationInfo**(`data`?): [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Parameters

• **data?**: [`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md)

#### Returns

[`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Defined in

main.ts:199597

## Properties

### count?

> `optional` **count**: `number`

number of unique entities

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`count`](../interfaces/IBusinessListingAggregationInfo.md#count)

#### Defined in

main.ts:199587

***

### top\_attributes?

> `optional` **top\_attributes**: `object`

the most mentioned service details
service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_attributes`](../interfaces/IBusinessListingAggregationInfo.md#top_attributes)

#### Defined in

main.ts:199590

***

### top\_categories?

> `optional` **top\_categories**: `object`

the most mentioned related categories
top categories displayed with the number of businesses in each category

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_categories`](../interfaces/IBusinessListingAggregationInfo.md#top_categories)

#### Defined in

main.ts:199580

***

### top\_countries?

> `optional` **top\_countries**: `object`

the most mentioned counties
country codes with the biggest number of businesses in the category

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_countries`](../interfaces/IBusinessListingAggregationInfo.md#top_countries)

#### Defined in

main.ts:199583

***

### top\_place\_topics?

> `optional` **top\_place\_topics**: `object`

top keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_place_topics`](../interfaces/IBusinessListingAggregationInfo.md#top_place_topics)

#### Defined in

main.ts:199593

***

### websites\_count?

> `optional` **websites\_count**: `number`

number of unique websites

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`websites_count`](../interfaces/IBusinessListingAggregationInfo.md#websites_count)

#### Defined in

main.ts:199585

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:199606

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:199652

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Defined in

main.ts:199645
