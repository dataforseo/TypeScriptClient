**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo(data)

> **new BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo**(`data`?): [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Source

main.ts:198671

## Properties

### count?

> **`optional`** **count**: `number`

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`count`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#count)

#### Source

main.ts:198657

***

### items?

> **`optional`** **items**: [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_category

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`items`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#items)

#### Source

main.ts:198667

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned categories

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset)

#### Source

main.ts:198659

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`offset_token`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset_token)

#### Source

main.ts:198663

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`total_count`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#total_count)

#### Source

main.ts:198654

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:198680

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:198705

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Source

main.ts:198698
