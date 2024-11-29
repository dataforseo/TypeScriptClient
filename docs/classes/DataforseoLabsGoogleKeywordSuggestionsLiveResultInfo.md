[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Class: DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo()

> **new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Defined in

main.ts:94605

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items)

#### Defined in

main.ts:94601

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items_count)

#### Defined in

main.ts:94593

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#language_code)

#### Defined in

main.ts:94589

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#location_code)

#### Defined in

main.ts:94587

***

### offset?

> `optional` **offset**: `number`

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset)

#### Defined in

main.ts:94595

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset_token)

#### Defined in

main.ts:94599

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#se_type)

#### Defined in

main.ts:94580

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword)

#### Defined in

main.ts:94582

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: `object`

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword_data)

#### Defined in

main.ts:94585

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#total_count)

#### Defined in

main.ts:94591

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:94614

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:94650

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Defined in

main.ts:94643
