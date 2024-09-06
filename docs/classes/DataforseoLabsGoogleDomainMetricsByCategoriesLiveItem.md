[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

# Class: DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

## Implements

- [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem()

> **new DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem**(`data`?): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Defined in

main.ts:89445

## Properties

### domain?

> `optional` **domain**: `string`

domain found for the specified category

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`domain`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#domain)

#### Defined in

main.ts:89434

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`main_domain`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#main_domain)

#### Defined in

main.ts:89436

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

main.ts:89441

***

### metrics\_history?

> `optional` **metrics\_history**: `object`

historical ranking and traffic data of the domain

#### Index Signature

 \[`key`: `string`\]: `object`

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`metrics_history`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_history)

#### Defined in

main.ts:89438

***

### organic\_count?

> `optional` **organic\_count**: `number`

current total count of organic SERPs that contain the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_count`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_count)

#### Defined in

main.ts:89426

***

### organic\_etv?

> `optional` **organic\_etv**: `number`

current organic ETV of the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_etv`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_etv)

#### Defined in

main.ts:89424

***

### organic\_is\_lost?

> `optional` **organic\_is\_lost**: `number`

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_is_lost`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_lost)

#### Defined in

main.ts:89429

***

### organic\_is\_new?

> `optional` **organic\_is\_new**: `number`

current number of new ranked elements
indicates how many new ranked elements were found for the domain

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`organic_is_new`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_new)

#### Defined in

main.ts:89432

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#se_type)

#### Defined in

main.ts:89420

***

### top\_categories?

> `optional` **top\_categories**: `number`[]

categories for which domains are collected

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[`top_categories`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#top_categories)

#### Defined in

main.ts:89422

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:89454

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:89496

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Defined in

main.ts:89489
