[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductCompetitorsLiveItem

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveItem

Defined in: main.ts:114552

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:114558

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

***

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:114562

average position of the product in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`AmazonMetricsBundleInfo`](../classes/AmazonMetricsBundleInfo.md)

Defined in: main.ts:114572

metrics for intersecting keywords
ranking data relevant to the keywords that the provided asin shares with the target asin;
Note: in this object ranking data is provided for the returned competitor’s asin

***

### full\_metrics?

> `optional` **full\_metrics**: [`AmazonMetricsBundleInfo`](../classes/AmazonMetricsBundleInfo.md)

Defined in: main.ts:114575

metrics for all keywords of the product
full overview of ranking data relevant to all keywords that the provided asin is ranking for

***

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:114568

number of intersecting keywords

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:114554

search engine type

***

### sum\_position?

> `optional` **sum\_position**: `number`

Defined in: main.ts:114566

sum of all product positions in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products
