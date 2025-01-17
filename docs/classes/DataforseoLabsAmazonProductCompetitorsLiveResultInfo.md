[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveResultInfo

Defined in: main.ts:114512

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductCompetitorsLiveResultInfo()

> **new DataforseoLabsAmazonProductCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

Defined in: main.ts:114532

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:114516

ASIN in a POST array

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#asin)

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

Defined in: main.ts:114528

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:114526

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:114522

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:114519

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:114514

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:114524

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:114541

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:114568

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

Defined in: main.ts:114561

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)
