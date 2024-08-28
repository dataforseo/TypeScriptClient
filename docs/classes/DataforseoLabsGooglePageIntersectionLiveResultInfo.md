[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGooglePageIntersectionLiveResultInfo

# Class: DataforseoLabsGooglePageIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGooglePageIntersectionLiveResultInfo()

> **new DataforseoLabsGooglePageIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:103427

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`exclude_pages`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#exclude_pages)

#### Defined in

main.ts:103413

***

### items?

> `optional` **items**: [`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:103423

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:103421

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:103417

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:103415

***

### pages?

> `optional` **pages**: `object`

URLs you specified a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`pages`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#pages)

#### Defined in

main.ts:103411

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:103409

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:103419

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:103436

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:103474

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:103467
