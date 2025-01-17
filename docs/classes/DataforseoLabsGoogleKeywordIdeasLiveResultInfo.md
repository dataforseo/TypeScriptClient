[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Class: DataforseoLabsGoogleKeywordIdeasLiveResultInfo

Defined in: main.ts:95234

## Implements

- [`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordIdeasLiveResultInfo()

> **new DataforseoLabsGoogleKeywordIdeasLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

Defined in: main.ts:95259

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

Defined in: main.ts:95255

contains keyword ideas and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:95247

number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95243

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:95241

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#location_code)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:95249

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:95253

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset_token)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:95236

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#se_type)

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

Defined in: main.ts:95239

keywords in a POST array
keywords are returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`seed_keywords`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#seed_keywords)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:95245

total number of results relevant to your request in our database

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:95268

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:95301

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

Defined in: main.ts:95294

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)
