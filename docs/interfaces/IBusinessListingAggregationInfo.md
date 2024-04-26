**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessListingAggregationInfo

# Interface: IBusinessListingAggregationInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> **`optional`** **count**: `number`

number of unique entities

#### Source

main.ts:196346

***

### top\_attributes?

> **`optional`** **top\_attributes**: `Object`

the most mentioned service details
service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:196349

***

### top\_categories?

> **`optional`** **top\_categories**: `Object`

the most mentioned related categories
top categories displayed with the number of businesses in each category

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:196339

***

### top\_countries?

> **`optional`** **top\_countries**: `Object`

the most mentioned counties
country codes with the biggest number of businesses in the category

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:196342

***

### top\_place\_topics?

> **`optional`** **top\_place\_topics**: `Object`

top keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:196352

***

### websites\_count?

> **`optional`** **websites\_count**: `number`

number of unique websites

#### Source

main.ts:196344
