**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessListingAggregationInfo

# Class: BusinessListingAggregationInfo

## Implements

- [`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessListingAggregationInfo(data)

> **new BusinessListingAggregationInfo**(`data`?): [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Parameters

• **data?**: [`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md)

#### Returns

[`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Source

main.ts:196241

## Properties

### count?

> **`optional`** **count**: `number`

number of unique entities

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`count`](../interfaces/IBusinessListingAggregationInfo.md#count)

#### Source

main.ts:196231

***

### top\_attributes?

> **`optional`** **top\_attributes**: `Object`

the most mentioned service details
service details of a business entity displayed in a form of checks and the number of entities mentioning each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_attributes`](../interfaces/IBusinessListingAggregationInfo.md#top_attributes)

#### Source

main.ts:196234

***

### top\_categories?

> **`optional`** **top\_categories**: `Object`

the most mentioned related categories
top categories displayed with the number of businesses in each category

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_categories`](../interfaces/IBusinessListingAggregationInfo.md#top_categories)

#### Source

main.ts:196224

***

### top\_countries?

> **`optional`** **top\_countries**: `Object`

the most mentioned counties
country codes with the biggest number of businesses in the category

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_countries`](../interfaces/IBusinessListingAggregationInfo.md#top_countries)

#### Source

main.ts:196227

***

### top\_place\_topics?

> **`optional`** **top\_place\_topics**: `Object`

top keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`top_place_topics`](../interfaces/IBusinessListingAggregationInfo.md#top_place_topics)

#### Source

main.ts:196237

***

### websites\_count?

> **`optional`** **websites\_count**: `number`

number of unique websites

#### Implementation of

[`IBusinessListingAggregationInfo`](../interfaces/IBusinessListingAggregationInfo.md).[`websites_count`](../interfaces/IBusinessListingAggregationInfo.md#websites_count)

#### Source

main.ts:196229

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:196250

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:196296

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

#### Source

main.ts:196289
