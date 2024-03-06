[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainIntersectionLiveResultInfo

# Class: DataforseoLabsGoogleDomainIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#se_type)
- [target1](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#target1)
- [target2](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#target2)
- [total\_count](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainIntersectionLiveResultInfo**(`data?`): [`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Defined in

[main.ts:89124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89124)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#items)

#### Defined in

[main.ts:89120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89120)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#items_count)

#### Defined in

[main.ts:89118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89118)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#language_code)

#### Defined in

[main.ts:89114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89114)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#location_code)

#### Defined in

[main.ts:89112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89112)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#se_type)

#### Defined in

[main.ts:89106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89106)

___


### target1

• `Optional` **target1**: `string`

the first target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[target1](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#target1)

#### Defined in

[main.ts:89108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89108)

___


### target2

• `Optional` **target2**: `string`

the second target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[target2](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#target2)

#### Defined in

[main.ts:89110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89110)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#total_count)

#### Defined in

[main.ts:89116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89116)

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

[main.ts:89133](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89133)

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

[main.ts:89161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89161)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Defined in

[main.ts:89154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89154)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")