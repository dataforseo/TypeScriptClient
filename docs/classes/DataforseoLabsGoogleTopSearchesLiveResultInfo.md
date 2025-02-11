[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleTopSearchesLiveResultInfo

# Class: DataforseoLabsGoogleTopSearchesLiveResultInfo

Defined in: main.ts:99890

## Implements

- [`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleTopSearchesLiveResultInfo()

> **new DataforseoLabsGoogleTopSearchesLiveResultInfo**(`data`?): [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

Defined in: main.ts:99912

#### Parameters

##### data?

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

Defined in: main.ts:99908

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:99900

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:99896

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:99894

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#location_code)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:99902

current offset value

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:99906

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset_token)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:99892

search engine type

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:99898

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:99921

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:99949

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

Defined in: main.ts:99942

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)
