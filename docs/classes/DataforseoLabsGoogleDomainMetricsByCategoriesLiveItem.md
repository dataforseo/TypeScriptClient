[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

# Class: DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

## Implements

- [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#constructor)

### Properties

- [domain](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#domain)
- [main\_domain](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#main_domain)
- [metrics\_difference](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_difference)
- [metrics\_history](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_history)
- [organic\_count](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_count)
- [organic\_etv](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_etv)
- [organic\_is\_lost](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_lost)
- [organic\_is\_new](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_new)
- [se\_type](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#se_type)
- [top\_categories](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#top_categories)

### Methods

- [init](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem**(`data?`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Defined in

[main.ts:84649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84649)

## Properties

### domain

• `Optional` **domain**: `string`

domain found for the specified category

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[domain](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#domain)

#### Defined in

[main.ts:84638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84638)

___


### main\_domain

• `Optional` **main\_domain**: `string`

primary domain

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[main_domain](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#main_domain)

#### Defined in

[main.ts:84640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84640)

___


### metrics\_difference

• `Optional` **metrics\_difference**: `Object`

metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[metrics_difference](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_difference)

#### Defined in

[main.ts:84645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84645)

___


### metrics\_history

• `Optional` **metrics\_history**: `Object`

historical ranking and traffic data of the domain

#### Index signature

▪ [key: `string`]: \{ `[key: string]`: [`MetricsInfo`](MetricsInfo.md);  }

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[metrics_history](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#metrics_history)

#### Defined in

[main.ts:84642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84642)

___


### organic\_count

• `Optional` **organic\_count**: `number`

current total count of organic SERPs that contain the domain

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[organic_count](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_count)

#### Defined in

[main.ts:84630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84630)

___


### organic\_etv

• `Optional` **organic\_etv**: `number`

current organic ETV of the domain

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[organic_etv](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_etv)

#### Defined in

[main.ts:84628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84628)

___


### organic\_is\_lost

• `Optional` **organic\_is\_lost**: `number`

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[organic_is_lost](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_lost)

#### Defined in

[main.ts:84633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84633)

___


### organic\_is\_new

• `Optional` **organic\_is\_new**: `number`

current number of new ranked elements
indicates how many new ranked elements were found for the domain

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[organic_is_new](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#organic_is_new)

#### Defined in

[main.ts:84636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84636)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#se_type)

#### Defined in

[main.ts:84624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84624)

___


### top\_categories

• `Optional` **top\_categories**: `number`[]

categories for which domains are collected

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md).[top_categories](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md#top_categories)

#### Defined in

[main.ts:84626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84626)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:84658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84658)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:84700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84700)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)

#### Defined in

[main.ts:84693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84693)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")