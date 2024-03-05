[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonProductCompetitorsLiveItem

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveItem

## Implemented by

- [`DataforseoLabsAmazonProductCompetitorsLiveItem`](../classes/DataforseoLabsAmazonProductCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IDataforseoLabsAmazonProductCompetitorsLiveItem.md#asin)
- [avg\_position](IDataforseoLabsAmazonProductCompetitorsLiveItem.md#avg_position)
- [competitor\_metrics](IDataforseoLabsAmazonProductCompetitorsLiveItem.md#competitor_metrics)
- [full\_metrics](IDataforseoLabsAmazonProductCompetitorsLiveItem.md#full_metrics)
- [intersections](IDataforseoLabsAmazonProductCompetitorsLiveItem.md#intersections)
- [se\_type](IDataforseoLabsAmazonProductCompetitorsLiveItem.md#se_type)
- [sum\_position](IDataforseoLabsAmazonProductCompetitorsLiveItem.md#sum_position)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Defined in

[main.ts:101290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101290)

___

### avg\_position

• `Optional` **avg\_position**: `number`

average position of the product in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Defined in

[main.ts:101294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101294)

___

### competitor\_metrics

• `Optional` **competitor\_metrics**: [`AmazonMetricsBundleInfo`](../classes/AmazonMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided asin shares with the target asin;
Note: in this object ranking data is provided for the returned competitor’s asin

#### Defined in

[main.ts:101304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101304)

___

### full\_metrics

• `Optional` **full\_metrics**: [`AmazonMetricsBundleInfo`](../classes/AmazonMetricsBundleInfo.md)

metrics for all keywords of the product
full overview of ranking data relevant to all keywords that the provided asin is ranking for

#### Defined in

[main.ts:101307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101307)

___

### intersections

• `Optional` **intersections**: `number`

number of intersecting keywords

#### Defined in

[main.ts:101300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101300)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:101286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101286)

___

### sum\_position

• `Optional` **sum\_position**: `number`

sum of all product positions in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Defined in

[main.ts:101298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101298)
