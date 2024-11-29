[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsErrorsRequestInfo

# Interface: IDomainAnalyticsErrorsRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Defined in

main.ts:84788

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Defined in

main.ts:84795

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: domain_analytics/task_get, postback_url, pingback_url

#### Defined in

main.ts:84781

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Defined in

main.ts:84770

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Defined in

main.ts:84775
