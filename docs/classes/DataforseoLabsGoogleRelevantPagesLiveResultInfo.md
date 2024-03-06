[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRelevantPagesLiveResultInfo

# Class: DataforseoLabsGoogleRelevantPagesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRelevantPagesLiveResultInfo**(`data?`): [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Defined in

[main.ts:90294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90294)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items)

#### Defined in

[main.ts:90290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90290)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items_count)

#### Defined in

[main.ts:90288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90288)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#language_code)

#### Defined in

[main.ts:90284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90284)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#location_code)

#### Defined in

[main.ts:90281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90281)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#se_type)

#### Defined in

[main.ts:90276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90276)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#target)

#### Defined in

[main.ts:90278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90278)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResultInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#total_count)

#### Defined in

[main.ts:90286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90286)

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

[main.ts:90303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90303)

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

[main.ts:90330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90330)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Defined in

[main.ts:90323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90323)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")