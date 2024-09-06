[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingPageIntersectionLiveResultInfo

# Class: DataforseoLabsBingPageIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingPageIntersectionLiveResultInfo()

> **new DataforseoLabsBingPageIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:108400

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`exclude_pages`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#exclude_pages)

#### Defined in

main.ts:108386

***

### items?

> `optional` **items**: [`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:108396

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:108394

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:108390

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:108388

***

### pages?

> `optional` **pages**: `object`

URLs you specified a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`pages`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#pages)

#### Defined in

main.ts:108384

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:108382

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:108392

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:108409

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:108447

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:108440
