[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleTopSearchesLiveResultInfo

# Class: DataforseoLabsGoogleTopSearchesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleTopSearchesLiveResultInfo()

> **new DataforseoLabsGoogleTopSearchesLiveResultInfo**(`data`?): [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Defined in

main.ts:99816

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items)

#### Defined in

main.ts:99812

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items_count)

#### Defined in

main.ts:99804

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#language_code)

#### Defined in

main.ts:99800

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#location_code)

#### Defined in

main.ts:99798

***

### offset?

> `optional` **offset**: `number`

current offset value

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset)

#### Defined in

main.ts:99806

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset_token)

#### Defined in

main.ts:99810

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#se_type)

#### Defined in

main.ts:99796

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#total_count)

#### Defined in

main.ts:99802

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:99825

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:99853

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Defined in

main.ts:99846
