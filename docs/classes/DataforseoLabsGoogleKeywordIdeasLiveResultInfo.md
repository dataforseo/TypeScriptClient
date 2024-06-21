**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Class: DataforseoLabsGoogleKeywordIdeasLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordIdeasLiveResultInfo(data)

> **new DataforseoLabsGoogleKeywordIdeasLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Source

main.ts:85587

## Properties

### items?

> **`optional`** **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items)

#### Source

main.ts:85583

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items_count)

#### Source

main.ts:85575

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#language_code)

#### Source

main.ts:85571

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#location_code)

#### Source

main.ts:85569

***

### offset?

> **`optional`** **offset**: `number`

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset)

#### Source

main.ts:85577

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset_token)

#### Source

main.ts:85581

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#se_type)

#### Source

main.ts:85564

***

### seed\_keywords?

> **`optional`** **seed\_keywords**: `string`[]

keywords in a POST array
keywords are returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`seed_keywords`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#seed_keywords)

#### Source

main.ts:85567

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results relevant to your request in our database

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#total_count)

#### Source

main.ts:85573

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:85596

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:85629

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Source

main.ts:85622
