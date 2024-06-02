**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleTopSearchesLiveResultInfo

# Class: DataforseoLabsGoogleTopSearchesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleTopSearchesLiveResultInfo(data)

> **new DataforseoLabsGoogleTopSearchesLiveResultInfo**(`data`?): [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Source

main.ts:88810

## Properties

### items?

> **`optional`** **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items)

#### Source

main.ts:88806

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items_count)

#### Source

main.ts:88798

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#language_code)

#### Source

main.ts:88794

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#location_code)

#### Source

main.ts:88792

***

### offset?

> **`optional`** **offset**: `number`

current offset value

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset)

#### Source

main.ts:88800

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset_token)

#### Source

main.ts:88804

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#se_type)

#### Source

main.ts:88790

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#total_count)

#### Source

main.ts:88796

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:88819

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:88847

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Source

main.ts:88840
