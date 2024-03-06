[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo

# Class: DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#constructor)

### Properties

- [categories](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#categories)
- [items](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo**(`data?`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md)

#### Defined in

[main.ts:84782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84782)

## Properties

### categories

• `Optional` **categories**: `number`[]

categories in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md).[categories](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#categories)

#### Defined in

[main.ts:84768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84768)

___


### items

• `Optional` **items**: [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem.md)[]

contains historical ranking and traffic data

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#items)

#### Defined in

[main.ts:84778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84778)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#items_count)

#### Defined in

[main.ts:84776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84776)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#language_code)

#### Defined in

[main.ts:84772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84772)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#location_code)

#### Defined in

[main.ts:84770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84770)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#se_type)

#### Defined in

[main.ts:84766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84766)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md#total_count)

#### Defined in

[main.ts:84774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84774)

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

[main.ts:84791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84791)

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

[main.ts:84822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84822)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md)

#### Defined in

[main.ts:84815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84815)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")