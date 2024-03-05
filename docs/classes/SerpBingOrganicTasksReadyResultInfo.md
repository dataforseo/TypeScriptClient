[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTasksReadyResultInfo

# Class: SerpBingOrganicTasksReadyResultInfo

## Implements

- [`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpBingOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpBingOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpBingOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpBingOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpBingOrganicTasksReadyResultInfo.md#id)
- [se](SerpBingOrganicTasksReadyResultInfo.md#se)
- [se\_type](SerpBingOrganicTasksReadyResultInfo.md#se_type)
- [tag](SerpBingOrganicTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpBingOrganicTasksReadyResultInfo.md#init)
- [toJSON](SerpBingOrganicTasksReadyResultInfo.md#tojson)
- [fromJS](SerpBingOrganicTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTasksReadyResultInfo**(`data?`): [`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTasksReadyResultInfo`](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md) |

#### Returns

[`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:53809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53809)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpBingOrganicTasksReadyResultInfo](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:53794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53794)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingOrganicTasksReadyResultInfo](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:53802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53802)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingOrganicTasksReadyResultInfo](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:53805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53805)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBingOrganicTasksReadyResultInfo](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:53799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53799)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpBingOrganicTasksReadyResultInfo](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[id](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:53787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53787)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpBingOrganicTasksReadyResultInfo](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[se](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:53789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53789)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpBingOrganicTasksReadyResultInfo](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[se_type](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:53792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53792)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpBingOrganicTasksReadyResultInfo](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md).[tag](../interfaces/ISerpBingOrganicTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:53796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53796)

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

[main.ts:53818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53818)

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

[main.ts:53842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53842)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTasksReadyResultInfo`](SerpBingOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:53835](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53835)
