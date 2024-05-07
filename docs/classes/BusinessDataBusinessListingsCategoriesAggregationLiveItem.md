**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsCategoriesAggregationLiveItem

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveItem

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsCategoriesAggregationLiveItem(data)

> **new BusinessDataBusinessListingsCategoriesAggregationLiveItem**(`data`?): [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Parameters

• **data?**: [`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Source

main.ts:197242

## Properties

### aggregation?

> **`optional`** **aggregation**: [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

aggregation of the category

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md).[`aggregation`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md#aggregation)

#### Source

main.ts:197238

***

### categories?

> **`optional`** **categories**: `string`[]

business categories
Google My Business general category that best describes the cluster of related categories

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md).[`categories`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md#categories)

#### Source

main.ts:197236

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md).[`type`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md#type)

#### Source

main.ts:197233

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:197251

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:197274

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Source

main.ts:197267
