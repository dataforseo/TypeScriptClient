**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsAppleAppCompetitorsLiveItem

# Interface: IDataforseoLabsAppleAppCompetitorsLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the competitor app

#### Source

main.ts:115117

***

### avg\_position?

> **`optional`** **avg\_position**: `number`

average position of the app in App Store SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Source

main.ts:115121

***

### competitor\_metrics?

> **`optional`** **competitor\_metrics**: [`AppStoreMetricsBundleInfo`](../classes/AppStoreMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Source

main.ts:115131

***

### full\_metrics?

> **`optional`** **full\_metrics**: [`AppStoreMetricsBundleInfo`](../classes/AppStoreMetricsBundleInfo.md)

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Source

main.ts:115134

***

### intersections?

> **`optional`** **intersections**: `number`

number of intersecting keywords

#### Source

main.ts:115127

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:115115

***

### sum\_position?

> **`optional`** **sum\_position**: `number`

sum of all app positions in App Store SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Source

main.ts:115125
