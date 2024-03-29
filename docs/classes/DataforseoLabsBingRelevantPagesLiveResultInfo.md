[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRelevantPagesLiveResultInfo

# Class: DataforseoLabsBingRelevantPagesLiveResultInfo

## Implements

- [`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRelevantPagesLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingRelevantPagesLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingRelevantPagesLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingRelevantPagesLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingRelevantPagesLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingRelevantPagesLiveResultInfo.md#se_type)
- [target](DataforseoLabsBingRelevantPagesLiveResultInfo.md#target)
- [total\_count](DataforseoLabsBingRelevantPagesLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingRelevantPagesLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingRelevantPagesLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingRelevantPagesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRelevantPagesLiveResultInfo**(`data?`): [`DataforseoLabsBingRelevantPagesLiveResultInfo`](DataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingRelevantPagesLiveResultInfo`](DataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Defined in

[main.ts:106562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106562)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#items)

#### Defined in

[main.ts:106558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106558)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#items_count)

#### Defined in

[main.ts:106556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106556)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#language_code)

#### Defined in

[main.ts:106552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106552)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#location_code)

#### Defined in

[main.ts:106549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106549)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#se_type)

#### Defined in

[main.ts:106544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106544)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[target](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#target)

#### Defined in

[main.ts:106546](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106546)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#total_count)

#### Defined in

[main.ts:106554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106554)

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

[main.ts:106571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106571)

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

[main.ts:106598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106598)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRelevantPagesLiveResultInfo`](DataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRelevantPagesLiveResultInfo`](DataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Defined in

[main.ts:106591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106591)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")