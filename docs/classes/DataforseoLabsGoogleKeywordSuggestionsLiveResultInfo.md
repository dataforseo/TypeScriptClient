[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Class: DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

Defined in: main.ts:94646

## Implements

- [`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo()

> **new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

Defined in: main.ts:94673

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

Defined in: main.ts:94669

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:94661

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:94657

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:94655

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#location_code)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:94663

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:94667

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset_token)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:94648

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#se_type)

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:94650

keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword)

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: `object`

Defined in: main.ts:94653

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword_data)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:94659

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:94682

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:94718

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

Defined in: main.ts:94711

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)
