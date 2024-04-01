[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksErrorsRequestInfo

# Interface: IBacklinksErrorsRequestInfo

## Implemented by

- [`BacklinksErrorsRequestInfo`](../classes/BacklinksErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime\_from](IBacklinksErrorsRequestInfo.md#datetime_from)
- [datetime\_to](IBacklinksErrorsRequestInfo.md#datetime_to)
- [filtered\_function](IBacklinksErrorsRequestInfo.md#filtered_function)
- [limit](IBacklinksErrorsRequestInfo.md#limit)
- [offset](IBacklinksErrorsRequestInfo.md#offset)

## Properties

### datetime\_from

• `Optional` **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Defined in

main.ts:133756

___

### datetime\_to

• `Optional` **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Defined in

main.ts:133763

___

### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: backlinks/live

#### Defined in

main.ts:133749

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Defined in

main.ts:133738

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Defined in

main.ts:133743
