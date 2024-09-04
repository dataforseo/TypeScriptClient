[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsAmazonProductCompetitorsLiveItem

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Defined in

main.ts:107617

***

### avg\_position?

> `optional` **avg\_position**: `number`

average position of the product in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Defined in

main.ts:107621

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`AmazonMetricsBundleInfo`](../classes/AmazonMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided asin shares with the target asin;
Note: in this object ranking data is provided for the returned competitor’s asin

#### Defined in

main.ts:107631

***

### full\_metrics?

> `optional` **full\_metrics**: [`AmazonMetricsBundleInfo`](../classes/AmazonMetricsBundleInfo.md)

metrics for all keywords of the product
full overview of ranking data relevant to all keywords that the provided asin is ranking for

#### Defined in

main.ts:107634

***

### intersections?

> `optional` **intersections**: `number`

number of intersecting keywords

#### Defined in

main.ts:107627

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:107613

***

### sum\_position?

> `optional` **sum\_position**: `number`

sum of all product positions in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Defined in

main.ts:107625
