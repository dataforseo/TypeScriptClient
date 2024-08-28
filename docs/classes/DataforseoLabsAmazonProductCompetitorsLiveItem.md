[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsAmazonProductCompetitorsLiveItem

# Class: DataforseoLabsAmazonProductCompetitorsLiveItem

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductCompetitorsLiveItem()

> **new DataforseoLabsAmazonProductCompetitorsLiveItem**(`data`?): [`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Defined in

main.ts:107562

## Properties

### asin?

> `optional` **asin**: `string`

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#asin)

#### Defined in

main.ts:107541

***

### avg\_position?

> `optional` **avg\_position**: `number`

average position of the product in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#avg_position)

#### Defined in

main.ts:107545

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided asin shares with the target asin;
Note: in this object ranking data is provided for the returned competitor’s asin

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#competitor_metrics)

#### Defined in

main.ts:107555

***

### full\_metrics?

> `optional` **full\_metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

metrics for all keywords of the product
full overview of ranking data relevant to all keywords that the provided asin is ranking for

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`full_metrics`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#full_metrics)

#### Defined in

main.ts:107558

***

### intersections?

> `optional` **intersections**: `number`

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#intersections)

#### Defined in

main.ts:107551

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#se_type)

#### Defined in

main.ts:107537

***

### sum\_position?

> `optional` **sum\_position**: `number`

sum of all product positions in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#sum_position)

#### Defined in

main.ts:107549

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:107571

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:107594

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Defined in

main.ts:107587
