[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTasksReadyResultInfo

# Class: SerpGoogleEventsTasksReadyResultInfo

## Implements

- [`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleEventsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleEventsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleEventsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleEventsTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleEventsTasksReadyResultInfo.md#id)
- [se](SerpGoogleEventsTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleEventsTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleEventsTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleEventsTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleEventsTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleEventsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTasksReadyResultInfo**(`data?`): [`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)

#### Defined in

[main.ts:44021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44021)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleEventsTasksReadyResultInfo](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:44006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44006)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleEventsTasksReadyResultInfo](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:44014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44014)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleEventsTasksReadyResultInfo](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:44017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44017)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleEventsTasksReadyResultInfo](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:44011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44011)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleEventsTasksReadyResultInfo](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:43999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43999)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleEventsTasksReadyResultInfo](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:44001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44001)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: events

#### Implementation of

[ISerpGoogleEventsTasksReadyResultInfo](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:44004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44004)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleEventsTasksReadyResultInfo](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:44008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44008)

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

[main.ts:44030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44030)

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

[main.ts:44054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44054)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTasksReadyResultInfo`](SerpGoogleEventsTasksReadyResultInfo.md)

#### Defined in

[main.ts:44047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44047)
