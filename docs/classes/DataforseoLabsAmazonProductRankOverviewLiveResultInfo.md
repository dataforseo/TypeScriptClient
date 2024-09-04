[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAmazonProductRankOverviewLiveResultInfo

# Class: DataforseoLabsAmazonProductRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveResultInfo()

> **new DataforseoLabsAmazonProductRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:107115

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#items)

#### Defined in

main.ts:107111

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#items_count)

#### Defined in

main.ts:107109

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#language_code)

#### Defined in

main.ts:107105

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#location_code)

#### Defined in

main.ts:107102

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#se_type)

#### Defined in

main.ts:107099

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResultInfo.md#total_count)

#### Defined in

main.ts:107107

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:107124

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:107150

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveResultInfo`](DataforseoLabsAmazonProductRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:107143
