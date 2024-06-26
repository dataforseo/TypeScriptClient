**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductRankOverviewLiveItem

# Class: DataforseoLabsAmazonProductRankOverviewLiveItem

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveItem(data)

> **new DataforseoLabsAmazonProductRankOverviewLiveItem**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Source

main.ts:105398

## Properties

### asin?

> **`optional`** **asin**: `string`

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#asin)

#### Source

main.ts:105392

***

### metrics?

> **`optional`** **metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

average keyword position of the product

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#metrics)

#### Source

main.ts:105394

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#se_type)

#### Source

main.ts:105388

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:105407

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:105426

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Source

main.ts:105419
