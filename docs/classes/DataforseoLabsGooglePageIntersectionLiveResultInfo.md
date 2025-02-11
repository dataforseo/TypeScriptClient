[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGooglePageIntersectionLiveResultInfo

# Class: DataforseoLabsGooglePageIntersectionLiveResultInfo

Defined in: main.ts:110452

## Implements

- [`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGooglePageIntersectionLiveResultInfo()

> **new DataforseoLabsGooglePageIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

Defined in: main.ts:110472

#### Parameters

##### data?

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

Defined in: main.ts:110458

URLs you specified in a POST array that will be excluded from the results

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`exclude_pages`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#exclude_pages)

***

### items?

> `optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)[]

Defined in: main.ts:110468

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:110466

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:110462

language code in a POST array

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:110460

location code in a POST array

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#location_code)

***

### pages?

> `optional` **pages**: `object`

Defined in: main.ts:110456

URLs you specified a POST array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`pages`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#pages)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:110454

search engine type

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:110464

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:110481

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:110519

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

Defined in: main.ts:110512

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)
