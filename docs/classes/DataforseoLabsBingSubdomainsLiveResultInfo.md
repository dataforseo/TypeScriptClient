[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingSubdomainsLiveResultInfo

# Class: DataforseoLabsBingSubdomainsLiveResultInfo

## Implements

- [`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingSubdomainsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingSubdomainsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingSubdomainsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingSubdomainsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingSubdomainsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingSubdomainsLiveResultInfo.md#se_type)
- [target](DataforseoLabsBingSubdomainsLiveResultInfo.md#target)
- [total\_count](DataforseoLabsBingSubdomainsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingSubdomainsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingSubdomainsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingSubdomainsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingSubdomainsLiveResultInfo**(`data?`): [`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Defined in

[main.ts:107598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107598)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)[]

contains subdomains and related data

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#items)

#### Defined in

[main.ts:107594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107594)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:107592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107592)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:107588](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107588)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:107586](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107586)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:107582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107582)

___


### target

• `Optional` **target**: `string`

domain in a POST array

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[target](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#target)

#### Defined in

[main.ts:107584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107584)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingSubdomainsLiveResultInfo](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:107590](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107590)

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

[main.ts:107607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107607)

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

[main.ts:107634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107634)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Defined in

[main.ts:107627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107627)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")