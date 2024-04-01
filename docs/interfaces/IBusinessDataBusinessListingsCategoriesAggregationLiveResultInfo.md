[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

# Interface: IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

## Implemented by

- [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../classes/BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#count)
- [items](IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#items)
- [offset](IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset)
- [offset\_token](IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset_token)
- [total\_count](IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#total_count)

## Properties

### count

• `Optional` **count**: `number`

item types
the number of items in the items array

#### Defined in

main.ts:195496

___

### items

• `Optional` **items**: [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](../classes/BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_category

#### Defined in

main.ts:195506

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned categories

#### Defined in

main.ts:195498

___

### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Defined in

main.ts:195502

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:195493
