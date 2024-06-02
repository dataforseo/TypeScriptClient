**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Class: DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo(data)

> **new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Source

main.ts:84485

## Properties

### items?

> **`optional`** **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items)

#### Source

main.ts:84481

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items_count)

#### Source

main.ts:84473

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#language_code)

#### Source

main.ts:84469

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#location_code)

#### Source

main.ts:84467

***

### offset?

> **`optional`** **offset**: `number`

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset)

#### Source

main.ts:84475

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset_token)

#### Source

main.ts:84479

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#se_type)

#### Source

main.ts:84460

***

### seed\_keyword?

> **`optional`** **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword)

#### Source

main.ts:84462

***

### seed\_keyword\_data?

> **`optional`** **seed\_keyword\_data**: `Object`

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword_data)

#### Source

main.ts:84465

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#total_count)

#### Source

main.ts:84471

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:84494

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:84530

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Source

main.ts:84523
