[Documentation](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTasksReadyResultInfo

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

main.ts:68570

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:68555

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:68563

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:68566

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:68560

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[id](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#id)

#### Defined in

main.ts:68548

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[se](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#se)

#### Defined in

main.ts:68550

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[se_type](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:68553

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpBaiduOrganicTasksReadyResultInfo](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[tag](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:68557

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

main.ts:68579

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

main.ts:68603

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

main.ts:68596
