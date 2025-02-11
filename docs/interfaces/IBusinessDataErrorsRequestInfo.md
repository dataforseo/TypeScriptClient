[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataErrorsRequestInfo

# Interface: IBusinessDataErrorsRequestInfo

Defined in: main.ts:210307

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:210330

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:210337

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:210323

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: hotel_searches/task_post, postback_url, pingback_url

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:210312

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:210317

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks
