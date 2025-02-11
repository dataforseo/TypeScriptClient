[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleRelatedKeywordsLiveResultInfo

Defined in: main.ts:94122

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelatedKeywordsLiveResultInfo()

> **new DataforseoLabsGoogleRelatedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

Defined in: main.ts:94143

#### Parameters

##### data?

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)[]

Defined in: main.ts:94139

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:94137

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:94133

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:94131

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:94124

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#se_type)

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:94126

keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#seed_keyword)

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:94129

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:94135

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:94152

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:94180

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

Defined in: main.ts:94173

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)
