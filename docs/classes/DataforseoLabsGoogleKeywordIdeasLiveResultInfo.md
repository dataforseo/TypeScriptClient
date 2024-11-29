[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Class: DataforseoLabsGoogleKeywordIdeasLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordIdeasLiveResultInfo()

> **new DataforseoLabsGoogleKeywordIdeasLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Defined in

main.ts:95191

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items)

#### Defined in

main.ts:95187

***

### items\_count?

> `optional` **items\_count**: `number`

number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items_count)

#### Defined in

main.ts:95179

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#language_code)

#### Defined in

main.ts:95175

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#location_code)

#### Defined in

main.ts:95173

***

### offset?

> `optional` **offset**: `number`

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset)

#### Defined in

main.ts:95181

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset_token)

#### Defined in

main.ts:95185

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#se_type)

#### Defined in

main.ts:95168

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

keywords in a POST array
keywords are returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`seed_keywords`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#seed_keywords)

#### Defined in

main.ts:95171

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results relevant to your request in our database

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#total_count)

#### Defined in

main.ts:95177

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:95200

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:95233

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Defined in

main.ts:95226
