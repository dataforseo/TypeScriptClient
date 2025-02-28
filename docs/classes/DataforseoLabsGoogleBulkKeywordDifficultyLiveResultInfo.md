[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

Defined in: main.ts:96228

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo()

> **new DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo**(`data`?): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

Defined in: main.ts:96246

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)[]

Defined in: main.ts:96242

contains keywords and related keyword difficulty scores

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:96240

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:96236

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:96233

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:96230

search engine type

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:96238

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96255

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:96281

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

Defined in: main.ts:96274

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)
