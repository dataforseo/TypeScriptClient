[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataErrorsRequestInfo

# Interface: IBusinessDataErrorsRequestInfo

## Implemented by

- [`BusinessDataErrorsRequestInfo`](../classes/BusinessDataErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime\_from](IBusinessDataErrorsRequestInfo.md#datetime_from)
- [datetime\_to](IBusinessDataErrorsRequestInfo.md#datetime_to)
- [filtered\_function](IBusinessDataErrorsRequestInfo.md#filtered_function)
- [limit](IBusinessDataErrorsRequestInfo.md#limit)
- [offset](IBusinessDataErrorsRequestInfo.md#offset)

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

[main.ts:187592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187592)

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

[main.ts:187599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187599)

___


### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: hotel_searches/task_post, postback_url, pingback_url

#### Defined in

[main.ts:187585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187585)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Defined in

[main.ts:187574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187574)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Defined in

[main.ts:187579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187579)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")