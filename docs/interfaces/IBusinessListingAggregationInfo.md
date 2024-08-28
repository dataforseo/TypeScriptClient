[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBusinessListingAggregationInfo

# Interface: IBusinessListingAggregationInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

number of unique entities

#### Defined in

main.ts:204320

***

### top\_attributes?

> `optional` **top\_attributes**: `object`

the most mentioned service details
service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:204323

***

### top\_categories?

> `optional` **top\_categories**: `object`

the most mentioned related categories
top categories displayed with the number of businesses in each category

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:204313

***

### top\_countries?

> `optional` **top\_countries**: `object`

the most mentioned counties
country codes with the biggest number of businesses in the category

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:204316

***

### top\_place\_topics?

> `optional` **top\_place\_topics**: `object`

top keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:204326

***

### websites\_count?

> `optional` **websites\_count**: `number`

number of unique websites

#### Defined in

main.ts:204318
