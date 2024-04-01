[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleAutocompleteTasksReadyResultInfo

# Interface: ISerpGoogleAutocompleteTasksReadyResultInfo

## Implemented by

- [`SerpGoogleAutocompleteTasksReadyResultInfo`](../classes/SerpGoogleAutocompleteTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleAutocompleteTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleAutocompleteTasksReadyResultInfo.md#id)
- [se](ISerpGoogleAutocompleteTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleAutocompleteTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleAutocompleteTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:50961

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:50969

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:50972

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:50966

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:50954

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:50956

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: autocomplete

#### Defined in

main.ts:50959

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:50963
