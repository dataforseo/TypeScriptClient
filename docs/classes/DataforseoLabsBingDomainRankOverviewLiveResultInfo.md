[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#se_type)
- [target](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#target)
- [total\_count](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingDomainRankOverviewLiveResultInfo**(`data?`): [`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Defined in

[main.ts:104118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104118)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items)

#### Defined in

[main.ts:104114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104114)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items_count)

#### Defined in

[main.ts:104112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104112)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#language_code)

#### Defined in

[main.ts:104108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104108)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#location_code)

#### Defined in

[main.ts:104106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104106)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#se_type)

#### Defined in

[main.ts:104102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104102)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[target](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#target)

#### Defined in

[main.ts:104104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104104)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#total_count)

#### Defined in

[main.ts:104110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104110)

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

[main.ts:104127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104127)

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

[main.ts:104154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104154)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Defined in

[main.ts:104147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104147)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")