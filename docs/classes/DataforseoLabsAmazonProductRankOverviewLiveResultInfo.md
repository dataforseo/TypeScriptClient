[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductRankOverviewLiveResultInfo

# Class: DataforseoLabsAmazonProductRankOverviewLiveResultInfo

Defined in: main.ts:113970

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveResultInfo()

> **new DataforseoLabsAmazonProductRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

Defined in: main.ts:113988

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)[]

Defined in: main.ts:113984

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:113982

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:113978

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:113975

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:113972

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:113980

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113997

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:114023

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

Defined in: main.ts:114016

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)
