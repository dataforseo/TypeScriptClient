[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

# Interface: IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

item types
the number of items in the items array

#### Defined in

main.ts:199862

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](../classes/BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_category

#### Defined in

main.ts:199872

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned categories

#### Defined in

main.ts:199864

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Defined in

main.ts:199868

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:199859
