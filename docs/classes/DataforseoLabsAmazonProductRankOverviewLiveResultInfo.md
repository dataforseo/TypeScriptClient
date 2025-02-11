[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductRankOverviewLiveResultInfo

# Class: DataforseoLabsAmazonProductRankOverviewLiveResultInfo

Defined in: main.ts:114038

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveResultInfo()

> **new DataforseoLabsAmazonProductRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

Defined in: main.ts:114056

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)[]

Defined in: main.ts:114052

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:114050

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:114046

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:114043

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:114040

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:114048

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:114065

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:114091

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

Defined in: main.ts:114084

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)
