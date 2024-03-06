[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSubdomainsLiveResultInfo

# Class: DataforseoLabsGoogleSubdomainsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSubdomainsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSubdomainsLiveResultInfo**(`data?`): [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Defined in

[main.ts:89710](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89710)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)[]

contains subdomains and related data

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items)

#### Defined in

[main.ts:89706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89706)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:89704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89704)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:89700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89700)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:89698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89698)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:89694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89694)

___


### target

• `Optional` **target**: `string`

domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#target)

#### Defined in

[main.ts:89696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89696)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:89702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89702)

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

[main.ts:89719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89719)

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

[main.ts:89746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89746)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Defined in

[main.ts:89739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89739)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")