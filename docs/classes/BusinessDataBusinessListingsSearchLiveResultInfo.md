[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataBusinessListingsSearchLiveResultInfo

# Class: BusinessDataBusinessListingsSearchLiveResultInfo

## Implements

- [`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsSearchLiveResultInfo()

> **new BusinessDataBusinessListingsSearchLiveResultInfo**(`data`?): [`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Returns

[`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Defined in

main.ts:203816

## Properties

### count?

> `optional` **count**: `number`

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`count`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#count)

#### Defined in

main.ts:203802

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`items`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#items)

#### Defined in

main.ts:203812

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned businesses

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset)

#### Defined in

main.ts:203804

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset_token)

#### Defined in

main.ts:203808

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#total_count)

#### Defined in

main.ts:203799

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:203825

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:203850

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Defined in

main.ts:203843
