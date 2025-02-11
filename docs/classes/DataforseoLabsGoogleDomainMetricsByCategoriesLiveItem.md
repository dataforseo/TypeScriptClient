[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

# Class: DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

Defined in: main.ts:99232

## Implements

- [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem()

> **new DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem**(`data`?): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

Defined in: main.ts:99259

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:99248

domain found for the specified category

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`domain`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#domain)

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:99250

primary domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`main_domain`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#main_domain)

***

### metrics\_difference?

> `optional` **metrics\_difference**: `object`

Defined in: main.ts:99255

metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`metrics_difference`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_difference)

***

### metrics\_history?

> `optional` **metrics\_history**: `object`

Defined in: main.ts:99252

historical ranking and traffic data of the domain

#### Index Signature

\[`key`: `string`\]: `object`

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`metrics_history`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_history)

***

### organic\_count?

> `optional` **organic\_count**: `number`

Defined in: main.ts:99240

current total count of organic SERPs that contain the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_count`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_count)

***

### organic\_etv?

> `optional` **organic\_etv**: `number`

Defined in: main.ts:99238

current organic ETV of the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_etv`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_etv)

***

### organic\_is\_lost?

> `optional` **organic\_is\_lost**: `number`

Defined in: main.ts:99243

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_is_lost`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_lost)

***

### organic\_is\_new?

> `optional` **organic\_is\_new**: `number`

Defined in: main.ts:99246

current number of new ranked elements
indicates how many new ranked elements were found for the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_is_new`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_new)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:99234

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#se_type)

***

### top\_categories?

> `optional` **top\_categories**: `number`[]

Defined in: main.ts:99236

categories for which domains are collected

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`top_categories`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#top_categories)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:99268

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:99310

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

Defined in: main.ts:99303

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)
