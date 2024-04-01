[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

# Interface: IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

## Implemented by

- [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../classes/DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#domain)
- [main\_domain](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#main_domain)
- [metrics\_difference](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_difference)
- [metrics\_history](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_history)
- [organic\_count](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_count)
- [organic\_etv](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_etv)
- [organic\_is\_lost](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_lost)
- [organic\_is\_new](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_new)
- [se\_type](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#se_type)
- [top\_categories](IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#top_categories)

## Properties

### domain

• `Optional` **domain**: `string`

domain found for the specified category

#### Defined in

main.ts:87129

___

### main\_domain

• `Optional` **main\_domain**: `string`

primary domain

#### Defined in

main.ts:87131

___

### metrics\_difference

• `Optional` **metrics\_difference**: `Object`

metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:87136

___

### metrics\_history

• `Optional` **metrics\_history**: `Object`

historical ranking and traffic data of the domain

#### Index signature

▪ [key: `string`]: \{ `[key: string]`: [`MetricsInfo`](../classes/MetricsInfo.md);  }

#### Defined in

main.ts:87133

___

### organic\_count

• `Optional` **organic\_count**: `number`

current total count of organic SERPs that contain the domain

#### Defined in

main.ts:87121

___

### organic\_etv

• `Optional` **organic\_etv**: `number`

current organic ETV of the domain

#### Defined in

main.ts:87119

___

### organic\_is\_lost

• `Optional` **organic\_is\_lost**: `number`

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

#### Defined in

main.ts:87124

___

### organic\_is\_new

• `Optional` **organic\_is\_new**: `number`

current number of new ranked elements
indicates how many new ranked elements were found for the domain

#### Defined in

main.ts:87127

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:87115

___

### top\_categories

• `Optional` **top\_categories**: `number`[]

categories for which domains are collected

#### Defined in

main.ts:87117
