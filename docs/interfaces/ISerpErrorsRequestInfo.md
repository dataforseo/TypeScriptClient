[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpErrorsRequestInfo

# Interface: ISerpErrorsRequestInfo

## Implemented by

- [`SerpErrorsRequestInfo`](../classes/SerpErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime\_from](ISerpErrorsRequestInfo.md#datetime_from)
- [datetime\_to](ISerpErrorsRequestInfo.md#datetime_to)
- [filtered\_function](ISerpErrorsRequestInfo.md#filtered_function)
- [limit](ISerpErrorsRequestInfo.md#limit)
- [offset](ISerpErrorsRequestInfo.md#offset)

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

[main.ts:23158](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23158)

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

[main.ts:23165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23165)

___


### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: serp/task_get/advanced, postback_url, pingback_url

#### Defined in

[main.ts:23151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23151)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Defined in

[main.ts:23140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23140)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Defined in

[main.ts:23145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23145)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")