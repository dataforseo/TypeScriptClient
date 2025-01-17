[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRankedKeywordsLiveResultInfo

# Class: DataforseoLabsAmazonRankedKeywordsLiveResultInfo

Defined in: main.ts:113406

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRankedKeywordsLiveResultInfo()

> **new DataforseoLabsAmazonRankedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

Defined in: main.ts:113426

#### Parameters

##### data?

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:113410

ASIN in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#asin)

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)[]

Defined in: main.ts:113422

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:113420

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:113416

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:113413

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:113408

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:113418

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113435

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:113462

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

Defined in: main.ts:113455

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)
