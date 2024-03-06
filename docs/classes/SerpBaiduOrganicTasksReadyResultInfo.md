[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTasksReadyResultInfo

# Class: SerpBaiduOrganicTasksReadyResultInfo

## Implements

- [`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpBaiduOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpBaiduOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpBaiduOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpBaiduOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpBaiduOrganicTasksReadyResultInfo.md#id)
- [se](SerpBaiduOrganicTasksReadyResultInfo.md#se)
- [se\_type](SerpBaiduOrganicTasksReadyResultInfo.md#se_type)
- [tag](SerpBaiduOrganicTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpBaiduOrganicTasksReadyResultInfo.md#init)
- [toJSON](SerpBaiduOrganicTasksReadyResultInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTasksReadyResultInfo**(`data?`): [`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md) |

#### Returns

[`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:66193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66193)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:66178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66178)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:66186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66186)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:66189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66189)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:66183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66183)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[id](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:66171](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66171)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[se](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:66173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66173)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[se_type](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:66176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66176)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[tag](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:66180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66180)

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

[main.ts:66202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66202)

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

[main.ts:66226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66226)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:66219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66219)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")