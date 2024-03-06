[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataIdListResultInfo

# Class: KeywordsDataIdListResultInfo

## Implements

- [`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataIdListResultInfo.md#constructor)

### Properties

- [cost](KeywordsDataIdListResultInfo.md#cost)
- [datetime\_done](KeywordsDataIdListResultInfo.md#datetime_done)
- [datetime\_posted](KeywordsDataIdListResultInfo.md#datetime_posted)
- [id](KeywordsDataIdListResultInfo.md#id)
- [metadata](KeywordsDataIdListResultInfo.md#metadata)
- [status](KeywordsDataIdListResultInfo.md#status)
- [url](KeywordsDataIdListResultInfo.md#url)

### Methods

- [init](KeywordsDataIdListResultInfo.md#init)
- [toJSON](KeywordsDataIdListResultInfo.md#tojson)
- [fromJS](KeywordsDataIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataIdListResultInfo**(`data?`): [`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md) |

#### Returns

[`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Defined in

[main.ts:112368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112368)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[IKeywordsDataIdListResultInfo](../interfaces/IKeywordsDataIdListResultInfo.md).[cost](../interfaces/IKeywordsDataIdListResultInfo.md#cost)

#### Defined in

[main.ts:112362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112362)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataIdListResultInfo](../interfaces/IKeywordsDataIdListResultInfo.md).[datetime_done](../interfaces/IKeywordsDataIdListResultInfo.md#datetime_done)

#### Defined in

[main.ts:112357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112357)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataIdListResultInfo](../interfaces/IKeywordsDataIdListResultInfo.md).[datetime_posted](../interfaces/IKeywordsDataIdListResultInfo.md#datetime_posted)

#### Defined in

[main.ts:112352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112352)

___


### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IKeywordsDataIdListResultInfo](../interfaces/IKeywordsDataIdListResultInfo.md).[id](../interfaces/IKeywordsDataIdListResultInfo.md#id)

#### Defined in

[main.ts:112344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112344)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IKeywordsDataIdListResultInfo](../interfaces/IKeywordsDataIdListResultInfo.md).[metadata](../interfaces/IKeywordsDataIdListResultInfo.md#metadata)

#### Defined in

[main.ts:112364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112364)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataIdListResultInfo](../interfaces/IKeywordsDataIdListResultInfo.md).[status](../interfaces/IKeywordsDataIdListResultInfo.md#status)

#### Defined in

[main.ts:112360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112360)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[IKeywordsDataIdListResultInfo](../interfaces/IKeywordsDataIdListResultInfo.md).[url](../interfaces/IKeywordsDataIdListResultInfo.md#url)

#### Defined in

[main.ts:112347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112347)

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

[main.ts:112377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112377)

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

[main.ts:112406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112406)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Defined in

[main.ts:112399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112399)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")