[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTasksReadyResultInfo

# Class: SerpYahooOrganicTasksReadyResultInfo

## Implements

- [`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpYahooOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpYahooOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpYahooOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpYahooOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpYahooOrganicTasksReadyResultInfo.md#id)
- [se](SerpYahooOrganicTasksReadyResultInfo.md#se)
- [se\_type](SerpYahooOrganicTasksReadyResultInfo.md#se_type)
- [tag](SerpYahooOrganicTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpYahooOrganicTasksReadyResultInfo.md#init)
- [toJSON](SerpYahooOrganicTasksReadyResultInfo.md#tojson)
- [fromJS](SerpYahooOrganicTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTasksReadyResultInfo**(`data?`): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md) |

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:63323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63323)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpYahooOrganicTasksReadyResultInfo](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:63308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63308)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYahooOrganicTasksReadyResultInfo](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:63316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63316)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYahooOrganicTasksReadyResultInfo](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:63319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63319)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYahooOrganicTasksReadyResultInfo](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:63313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63313)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYahooOrganicTasksReadyResultInfo](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[id](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:63301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63301)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpYahooOrganicTasksReadyResultInfo](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[se](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:63303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63303)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpYahooOrganicTasksReadyResultInfo](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[se_type](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:63306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63306)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpYahooOrganicTasksReadyResultInfo](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[tag](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:63310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63310)

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

[main.ts:63332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63332)

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

[main.ts:63356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63356)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Defined in

[main.ts:63349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63349)
