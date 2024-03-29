[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksHistoryLiveRequestInfo

# Class: BacklinksHistoryLiveRequestInfo

## Implements

- [`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksHistoryLiveRequestInfo.md#constructor)

### Properties

- [date\_from](BacklinksHistoryLiveRequestInfo.md#date_from)
- [date\_to](BacklinksHistoryLiveRequestInfo.md#date_to)
- [tag](BacklinksHistoryLiveRequestInfo.md#tag)
- [target](BacklinksHistoryLiveRequestInfo.md#target)

### Methods

- [init](BacklinksHistoryLiveRequestInfo.md#init)
- [toJSON](BacklinksHistoryLiveRequestInfo.md#tojson)
- [fromJS](BacklinksHistoryLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksHistoryLiveRequestInfo**(`data?`): [`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md) |

#### Returns

[`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

#### Defined in

[main.ts:129932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129932)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
minimum value 2019-01-01
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBacklinksHistoryLiveRequestInfo](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[date_from](../interfaces/IBacklinksHistoryLiveRequestInfo.md#date_from)

#### Defined in

[main.ts:129915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129915)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBacklinksHistoryLiveRequestInfo](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[date_to](../interfaces/IBacklinksHistoryLiveRequestInfo.md#date_to)

#### Defined in

[main.ts:129922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129922)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksHistoryLiveRequestInfo](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[tag](../interfaces/IBacklinksHistoryLiveRequestInfo.md#tag)

#### Defined in

[main.ts:129928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129928)

___


### target

• `Optional` **target**: `string`

domain
required field
a domain should be specified without https:// and www.

#### Implementation of

[IBacklinksHistoryLiveRequestInfo](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[target](../interfaces/IBacklinksHistoryLiveRequestInfo.md#target)

#### Defined in

[main.ts:129907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129907)

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

[main.ts:129941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129941)

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

[main.ts:129961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129961)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

#### Defined in

[main.ts:129954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129954)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")