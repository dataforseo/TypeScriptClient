[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

# Class: DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

## Implements

- [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem()

> **new DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem**(`data`?): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Defined in

main.ts:99163

## Properties

### domain?

> `optional` **domain**: `string`

domain found for the specified category

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`domain`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#domain)

#### Defined in

main.ts:99152

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`main_domain`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#main_domain)

#### Defined in

main.ts:99154

***

### metrics\_difference?

> `optional` **metrics\_difference**: `object`

metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`metrics_difference`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_difference)

#### Defined in

main.ts:99159

***

### metrics\_history?

> `optional` **metrics\_history**: `object`

historical ranking and traffic data of the domain

#### Index Signature

 \[`key`: `string`\]: `object`

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`metrics_history`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_history)

#### Defined in

main.ts:99156

***

### organic\_count?

> `optional` **organic\_count**: `number`

current total count of organic SERPs that contain the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_count`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_count)

#### Defined in

main.ts:99144

***

### organic\_etv?

> `optional` **organic\_etv**: `number`

current organic ETV of the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_etv`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_etv)

#### Defined in

main.ts:99142

***

### organic\_is\_lost?

> `optional` **organic\_is\_lost**: `number`

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_is_lost`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_lost)

#### Defined in

main.ts:99147

***

### organic\_is\_new?

> `optional` **organic\_is\_new**: `number`

current number of new ranked elements
indicates how many new ranked elements were found for the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_is_new`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_new)

#### Defined in

main.ts:99150

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#se_type)

#### Defined in

main.ts:99138

***

### top\_categories?

> `optional` **top\_categories**: `number`[]

categories for which domains are collected

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`top_categories`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#top_categories)

#### Defined in

main.ts:99140

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:99172

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:99214

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Defined in

main.ts:99207
