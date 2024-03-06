[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsAppleAppCompetitorsLiveItem

# Interface: IDataforseoLabsAppleAppCompetitorsLiveItem

## Implemented by

- [`DataforseoLabsAppleAppCompetitorsLiveItem`](../classes/DataforseoLabsAppleAppCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IDataforseoLabsAppleAppCompetitorsLiveItem.md#app_id)
- [avg\_position](IDataforseoLabsAppleAppCompetitorsLiveItem.md#avg_position)
- [competitor\_metrics](IDataforseoLabsAppleAppCompetitorsLiveItem.md#competitor_metrics)
- [full\_metrics](IDataforseoLabsAppleAppCompetitorsLiveItem.md#full_metrics)
- [intersections](IDataforseoLabsAppleAppCompetitorsLiveItem.md#intersections)
- [se\_type](IDataforseoLabsAppleAppCompetitorsLiveItem.md#se_type)
- [sum\_position](IDataforseoLabsAppleAppCompetitorsLiveItem.md#sum_position)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the competitor app

#### Defined in

[main.ts:111494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111494)

___


### avg\_position

• `Optional` **avg\_position**: `number`

average position of the app in App Store SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Defined in

[main.ts:111498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111498)

___


### competitor\_metrics

• `Optional` **competitor\_metrics**: [`AppStoreMetricsBundleInfo`](../classes/AppStoreMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Defined in

[main.ts:111508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111508)

___


### full\_metrics

• `Optional` **full\_metrics**: [`AppStoreMetricsBundleInfo`](../classes/AppStoreMetricsBundleInfo.md)

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Defined in

[main.ts:111511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111511)

___


### intersections

• `Optional` **intersections**: `number`

number of intersecting keywords

#### Defined in

[main.ts:111504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111504)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:111492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111492)

___


### sum\_position

• `Optional` **sum\_position**: `number`

sum of all app positions in App Store SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Defined in

[main.ts:111502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111502)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")