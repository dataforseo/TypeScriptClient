[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteTasksFixedResultInfo

# Class: SerpGoogleAutocompleteTasksFixedResultInfo

## Implements

- [`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpGoogleAutocompleteTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpGoogleAutocompleteTasksFixedResultInfo.md#id)
- [se](SerpGoogleAutocompleteTasksFixedResultInfo.md#se)
- [se\_type](SerpGoogleAutocompleteTasksFixedResultInfo.md#se_type)
- [tag](SerpGoogleAutocompleteTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpGoogleAutocompleteTasksFixedResultInfo.md#init)
- [toJSON](SerpGoogleAutocompleteTasksFixedResultInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteTasksFixedResultInfo**(`data?`): [`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md) |

#### Returns

[`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Defined in

main.ts:51112

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResultInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:51097

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResultInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:51105

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResultInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:51108

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResultInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:51102

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResultInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[id](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#id)

#### Defined in

main.ts:51090

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResultInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[se](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#se)

#### Defined in

main.ts:51092

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: autocomplete

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResultInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[se_type](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:51095

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResultInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[tag](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:51099

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

main.ts:51121

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

main.ts:51145

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Defined in

main.ts:51138
