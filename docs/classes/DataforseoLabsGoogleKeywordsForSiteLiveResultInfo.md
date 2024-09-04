[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleKeywordsForSiteLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForSiteLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForSiteLiveResultInfo()

> **new DataforseoLabsGoogleKeywordsForSiteLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Defined in

main.ts:84965

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items)

#### Defined in

main.ts:84961

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items_count)

#### Defined in

main.ts:84953

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#language_code)

#### Defined in

main.ts:84949

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#location_code)

#### Defined in

main.ts:84947

***

### offset?

> `optional` **offset**: `number`

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset)

#### Defined in

main.ts:84955

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset_token)

#### Defined in

main.ts:84959

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#se_type)

#### Defined in

main.ts:84943

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#target)

#### Defined in

main.ts:84945

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#total_count)

#### Defined in

main.ts:84951

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:84974

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:85003

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Defined in

main.ts:84996
