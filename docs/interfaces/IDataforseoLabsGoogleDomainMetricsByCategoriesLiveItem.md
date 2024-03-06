[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

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

[main.ts:84752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84752)

___


### main\_domain

• `Optional` **main\_domain**: `string`

primary domain

#### Defined in

[main.ts:84754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84754)

___


### metrics\_difference

• `Optional` **metrics\_difference**: `Object`

metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

[main.ts:84759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84759)

___


### metrics\_history

• `Optional` **metrics\_history**: `Object`

historical ranking and traffic data of the domain

#### Index signature

▪ [key: `string`]: \{ `[key: string]`: [`MetricsInfo`](../classes/MetricsInfo.md);  }

#### Defined in

[main.ts:84756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84756)

___


### organic\_count

• `Optional` **organic\_count**: `number`

current total count of organic SERPs that contain the domain

#### Defined in

[main.ts:84744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84744)

___


### organic\_etv

• `Optional` **organic\_etv**: `number`

current organic ETV of the domain

#### Defined in

[main.ts:84742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84742)

___


### organic\_is\_lost

• `Optional` **organic\_is\_lost**: `number`

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

#### Defined in

[main.ts:84747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84747)

___


### organic\_is\_new

• `Optional` **organic\_is\_new**: `number`

current number of new ranked elements
indicates how many new ranked elements were found for the domain

#### Defined in

[main.ts:84750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84750)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:84738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84738)

___


### top\_categories

• `Optional` **top\_categories**: `number`[]

categories for which domains are collected

#### Defined in

[main.ts:84740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84740)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")