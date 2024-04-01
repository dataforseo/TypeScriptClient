[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteTasksReadyResultInfo

# Class: SerpGoogleAutocompleteTasksReadyResultInfo

## Implements

- [`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpGoogleAutocompleteTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpGoogleAutocompleteTasksReadyResultInfo.md#id)
- [se](SerpGoogleAutocompleteTasksReadyResultInfo.md#se)
- [se\_type](SerpGoogleAutocompleteTasksReadyResultInfo.md#se_type)
- [tag](SerpGoogleAutocompleteTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpGoogleAutocompleteTasksReadyResultInfo.md#init)
- [toJSON](SerpGoogleAutocompleteTasksReadyResultInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteTasksReadyResultInfo**(`data?`): [`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md) |

#### Returns

[`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Defined in

main.ts:50900

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResultInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:50885

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResultInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:50893

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResultInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:50896

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResultInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:50890

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResultInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[id](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#id)

#### Defined in

main.ts:50878

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResultInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[se](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#se)

#### Defined in

main.ts:50880

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: autocomplete

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResultInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[se_type](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:50883

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResultInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[tag](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:50887

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

main.ts:50909

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

main.ts:50933

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteTasksReadyResultInfo`](SerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Defined in

main.ts:50926
