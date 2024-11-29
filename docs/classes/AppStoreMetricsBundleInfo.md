[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppStoreMetricsBundleInfo

# Class: AppStoreMetricsBundleInfo

## Implements

- [`IAppStoreMetricsBundleInfo`](../interfaces/IAppStoreMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppStoreMetricsBundleInfo()

> **new AppStoreMetricsBundleInfo**(`data`?): [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Parameters

##### data?

[`IAppStoreMetricsBundleInfo`](../interfaces/IAppStoreMetricsBundleInfo.md)

#### Returns

[`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Defined in

main.ts:124282

## Properties

### app\_store\_search\_organic?

> `optional` **app\_store\_search\_organic**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from App Store organic search

#### Implementation of

[`IAppStoreMetricsBundleInfo`](../interfaces/IAppStoreMetricsBundleInfo.md).[`app_store_search_organic`](../interfaces/IAppStoreMetricsBundleInfo.md#app_store_search_organic)

#### Defined in

main.ts:124278

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:124291

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:124308

***

### fromJS()

> `static` **fromJS**(`data`): [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Defined in

main.ts:124301
