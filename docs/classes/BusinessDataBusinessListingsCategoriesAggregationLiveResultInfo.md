[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

Defined in: main.ts:212738

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo()

> **new BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo**(`data`?): [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

Defined in: main.ts:212757

#### Parameters

##### data?

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:212743

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`count`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#count)

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)[]

Defined in: main.ts:212753

encountered item types
types of search engine results encountered in the items array;
possible item types: business_category

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`items`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#items)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:212745

offset in the results array of returned categories

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:212749

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`offset_token`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:212740

total number of results in our database relevant to your request

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`total_count`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:212766

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:212791

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

Defined in: main.ts:212784

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)
