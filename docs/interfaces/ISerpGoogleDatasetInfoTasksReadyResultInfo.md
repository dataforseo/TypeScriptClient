[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetInfoTasksReadyResultInfo

# Interface: ISerpGoogleDatasetInfoTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:59212

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:59220

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:59223

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:59217

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:59205

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:59207

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: dataset_info

#### Defined in

main.ts:59210

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:59214
