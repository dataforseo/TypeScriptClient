[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductRankOverviewLiveItem

# Class: DataforseoLabsAmazonProductRankOverviewLiveItem

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveItem()

> **new DataforseoLabsAmazonProductRankOverviewLiveItem**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Defined in

main.ts:113848

## Properties

### asin?

> `optional` **asin**: `string`

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#asin)

#### Defined in

main.ts:113842

***

### metrics?

> `optional` **metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

average keyword position of the product

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#metrics)

#### Defined in

main.ts:113844

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#se_type)

#### Defined in

main.ts:113838

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:113857

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:113876

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Defined in

main.ts:113869
