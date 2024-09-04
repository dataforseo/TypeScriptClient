[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataBusinessListingsCategoriesAggregationLiveItem

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveItem

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsCategoriesAggregationLiveItem()

> **new BusinessDataBusinessListingsCategoriesAggregationLiveItem**(`data`?): [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Parameters

• **data?**: [`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Defined in

main.ts:204342

## Properties

### aggregation?

> `optional` **aggregation**: [`BusinessListingAggregationInfo`](BusinessListingAggregationInfo.md)

aggregation of the category

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md).[`aggregation`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md#aggregation)

#### Defined in

main.ts:204338

***

### categories?

> `optional` **categories**: `string`[]

business categories
Google My Business general category that best describes the cluster of related categories

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md).[`categories`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md#categories)

#### Defined in

main.ts:204336

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveItem`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md).[`type`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveItem.md#type)

#### Defined in

main.ts:204333

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:204351

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:204374

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)

#### Defined in

main.ts:204367
