[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AmazonKeywordInfo

# Class: AmazonKeywordInfo

## Implements

- [`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonKeywordInfo.md#constructor)

### Properties

- [last\_updated\_time](AmazonKeywordInfo.md#last_updated_time)
- [se\_type](AmazonKeywordInfo.md#se_type)
- [search\_volume](AmazonKeywordInfo.md#search_volume)

### Methods

- [init](AmazonKeywordInfo.md#init)
- [toJSON](AmazonKeywordInfo.md#tojson)
- [fromJS](AmazonKeywordInfo.md#fromjs)

## Constructors

### constructor

• **new AmazonKeywordInfo**(`data?`): [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md) |

#### Returns

[`AmazonKeywordInfo`](AmazonKeywordInfo.md)

#### Defined in

[main.ts:21396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21396)

## Properties

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:    '2019-11-15 12:57:46 +00:00'

#### Implementation of

[IAmazonKeywordInfo](../interfaces/IAmazonKeywordInfo.md).[last_updated_time](../interfaces/IAmazonKeywordInfo.md#last_updated_time)

#### Defined in

[main.ts:21389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21389)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IAmazonKeywordInfo](../interfaces/IAmazonKeywordInfo.md).[se_type](../interfaces/IAmazonKeywordInfo.md#se_type)

#### Defined in

[main.ts:21385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21385)

___


### search\_volume

• `Optional` **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the provided keyword idea on Amazon

#### Implementation of

[IAmazonKeywordInfo](../interfaces/IAmazonKeywordInfo.md).[search_volume](../interfaces/IAmazonKeywordInfo.md#search_volume)

#### Defined in

[main.ts:21392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21392)

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

[main.ts:21405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21405)

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

[main.ts:21424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21424)

___


### fromJS

▸ **fromJS**(`data`): [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonKeywordInfo`](AmazonKeywordInfo.md)

#### Defined in

[main.ts:21417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21417)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")