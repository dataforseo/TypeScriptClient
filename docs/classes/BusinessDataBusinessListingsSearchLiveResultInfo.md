[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsSearchLiveResultInfo

# Class: BusinessDataBusinessListingsSearchLiveResultInfo

Defined in: main.ts:211630

## Implements

- [`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsSearchLiveResultInfo()

> **new BusinessDataBusinessListingsSearchLiveResultInfo**(`data`?): [`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

Defined in: main.ts:211649

#### Parameters

##### data?

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Returns

[`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:211635

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`count`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#count)

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)[]

Defined in: main.ts:211645

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`items`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#items)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:211637

offset in the results array of returned businesses

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:211641

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:211632

total number of results in our database relevant to your request

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211658

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:211683

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

Defined in: main.ts:211676

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)
