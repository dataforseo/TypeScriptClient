[Documentation](../README.md) / [Exports](../modules.md) / IBusinessListingAggregationInfo

# Interface: IBusinessListingAggregationInfo

## Implemented by

- [`BusinessListingAggregationInfo`](../classes/BusinessListingAggregationInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IBusinessListingAggregationInfo.md#count)
- [top\_attributes](IBusinessListingAggregationInfo.md#top_attributes)
- [top\_categories](IBusinessListingAggregationInfo.md#top_categories)
- [top\_countries](IBusinessListingAggregationInfo.md#top_countries)
- [top\_place\_topics](IBusinessListingAggregationInfo.md#top_place_topics)
- [websites\_count](IBusinessListingAggregationInfo.md#websites_count)

## Properties

### count

• `Optional` **count**: `number`

number of unique entities

#### Defined in

main.ts:195336

___

### top\_attributes

• `Optional` **top\_attributes**: `Object`

the most mentioned service details
service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:195339

___

### top\_categories

• `Optional` **top\_categories**: `Object`

the most mentioned related categories
top categories displayed with the number of businesses in each category

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:195329

___

### top\_countries

• `Optional` **top\_countries**: `Object`

the most mentioned counties
country codes with the biggest number of businesses in the category

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:195332

___

### top\_place\_topics

• `Optional` **top\_place\_topics**: `Object`

top keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:195342

___

### websites\_count

• `Optional` **websites\_count**: `number`

number of unique websites

#### Defined in

main.ts:195334
