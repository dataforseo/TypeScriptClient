[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRankedKeywordsLiveResultInfo

# Class: DataforseoLabsAmazonRankedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRankedKeywordsLiveResultInfo()

> **new DataforseoLabsAmazonRankedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:113358

## Properties

### asin?

> `optional` **asin**: `string`

ASIN in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#asin)

#### Defined in

main.ts:113342

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:113354

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:113352

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:113348

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:113345

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#se_type)

#### Defined in

main.ts:113340

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#total_count)

#### Defined in

main.ts:113350

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:113367

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:113394

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:113387
