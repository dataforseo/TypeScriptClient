**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppCompetitorsLiveItem

# Class: DataforseoLabsAppleAppCompetitorsLiveItem

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppCompetitorsLiveItem(data)

> **new DataforseoLabsAppleAppCompetitorsLiveItem**(`data`?): [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Source

main.ts:116133

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the competitor app

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#app_id)

#### Source

main.ts:116112

***

### avg\_position?

> **`optional`** **avg\_position**: `number`

average position of the app in App Store SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#avg_position)

#### Source

main.ts:116116

***

### competitor\_metrics?

> **`optional`** **competitor\_metrics**: [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#competitor_metrics)

#### Source

main.ts:116126

***

### full\_metrics?

> **`optional`** **full\_metrics**: [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`full_metrics`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#full_metrics)

#### Source

main.ts:116129

***

### intersections?

> **`optional`** **intersections**: `number`

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#intersections)

#### Source

main.ts:116122

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#se_type)

#### Source

main.ts:116110

***

### sum\_position?

> **`optional`** **sum\_position**: `number`

sum of all app positions in App Store SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#sum_position)

#### Source

main.ts:116120

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:116142

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:116165

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Source

main.ts:116158
