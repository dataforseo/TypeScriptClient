[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleAutocompleteTasksFixedResultInfo

# Interface: ISerpGoogleAutocompleteTasksFixedResultInfo

## Implemented by

- [`SerpGoogleAutocompleteTasksFixedResultInfo`](../classes/SerpGoogleAutocompleteTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleAutocompleteTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleAutocompleteTasksFixedResultInfo.md#id)
- [se](ISerpGoogleAutocompleteTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleAutocompleteTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleAutocompleteTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:51173

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:51181

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:51184

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:51178

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:51166

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:51168

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: autocomplete

#### Defined in

main.ts:51171

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:51175
