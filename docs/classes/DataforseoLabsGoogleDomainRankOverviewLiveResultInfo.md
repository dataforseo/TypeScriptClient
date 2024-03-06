[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainRankOverviewLiveResultInfo**(`data?`): [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Defined in

[main.ts:90766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90766)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items)

#### Defined in

[main.ts:90762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90762)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items_count)

#### Defined in

[main.ts:90760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90760)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#language_code)

#### Defined in

[main.ts:90756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90756)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#location_code)

#### Defined in

[main.ts:90754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90754)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#se_type)

#### Defined in

[main.ts:90750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90750)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#target)

#### Defined in

[main.ts:90752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90752)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#total_count)

#### Defined in

[main.ts:90758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90758)

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

[main.ts:90775](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90775)

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

[main.ts:90802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90802)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Defined in

[main.ts:90795](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90795)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")