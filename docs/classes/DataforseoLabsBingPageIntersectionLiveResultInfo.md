[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingPageIntersectionLiveResultInfo

# Class: DataforseoLabsBingPageIntersectionLiveResultInfo

Defined in: main.ts:117926

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingPageIntersectionLiveResultInfo()

> **new DataforseoLabsBingPageIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

Defined in: main.ts:117948

#### Parameters

##### data?

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

Defined in: main.ts:117934

URLs you specified in a POST array that will be excluded from the results

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`exclude_pages`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#exclude_pages)

***

### items?

> `optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)[]

Defined in: main.ts:117944

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:117942

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:117938

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:117936

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#location_code)

***

### pages?

> `optional` **pages**: `object`

Defined in: main.ts:117932

URLs you specified a POST array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`pages`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#pages)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:117930

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:117940

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:117957

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:117995

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

Defined in: main.ts:117988

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)
