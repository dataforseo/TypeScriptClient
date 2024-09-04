[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsAppleAppCompetitorsLiveItem

# Interface: IDataforseoLabsAppleAppCompetitorsLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the competitor app

#### Defined in

main.ts:115199

***

### avg\_position?

> `optional` **avg\_position**: `number`

average position of the app in App Store SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Defined in

main.ts:115203

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`AppStoreMetricsBundleInfo`](../classes/AppStoreMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Defined in

main.ts:115213

***

### full\_metrics?

> `optional` **full\_metrics**: [`AppStoreMetricsBundleInfo`](../classes/AppStoreMetricsBundleInfo.md)

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Defined in

main.ts:115216

***

### intersections?

> `optional` **intersections**: `number`

number of intersecting keywords

#### Defined in

main.ts:115209

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:115197

***

### sum\_position?

> `optional` **sum\_position**: `number`

sum of all app positions in App Store SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Defined in

main.ts:115207
