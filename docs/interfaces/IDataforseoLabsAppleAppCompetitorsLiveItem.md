[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAppleAppCompetitorsLiveItem

# Interface: IDataforseoLabsAppleAppCompetitorsLiveItem

Defined in: main.ts:124584

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:124588

id of the competitor app

***

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:124592

average position of the app in App Store SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`AppStoreMetricsBundleInfo`](../classes/AppStoreMetricsBundleInfo.md)

Defined in: main.ts:124602

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

***

### full\_metrics?

> `optional` **full\_metrics**: [`AppStoreMetricsBundleInfo`](../classes/AppStoreMetricsBundleInfo.md)

Defined in: main.ts:124605

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

***

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:124598

number of intersecting keywords

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:124586

search engine type

***

### sum\_position?

> `optional` **sum\_position**: `number`

Defined in: main.ts:124596

sum of all app positions in App Store SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications
