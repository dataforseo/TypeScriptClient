[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoCommentsTasksReadyResultInfo

# Interface: ISerpYoutubeVideoCommentsTasksReadyResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:73464

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:73472

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:73475

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:73469

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:73457

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:73459

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: video_comments

#### Defined in

main.ts:73462

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:73466
