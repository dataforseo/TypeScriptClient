**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppStoreMetricsBundleInfo

# Class: AppStoreMetricsBundleInfo

## Implements

- [`IAppStoreMetricsBundleInfo`](../interfaces/IAppStoreMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppStoreMetricsBundleInfo(data)

> **new AppStoreMetricsBundleInfo**(`data`?): [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Parameters

• **data?**: [`IAppStoreMetricsBundleInfo`](../interfaces/IAppStoreMetricsBundleInfo.md)

#### Returns

[`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Source

main.ts:116064

## Properties

### app\_store\_search\_organic?

> **`optional`** **app\_store\_search\_organic**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from App Store organic search

#### Implementation of

[`IAppStoreMetricsBundleInfo`](../interfaces/IAppStoreMetricsBundleInfo.md).[`app_store_search_organic`](../interfaces/IAppStoreMetricsBundleInfo.md#app_store_search_organic)

#### Source

main.ts:116060

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:116073

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:116090

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Source

main.ts:116083
