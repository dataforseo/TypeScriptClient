[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTasksFixedResultInfo

# Class: SerpYoutubeVideoCommentsTasksFixedResultInfo

Defined in: main.ts:73626

## Implements

- [`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTasksFixedResultInfo()

> **new SerpYoutubeVideoCommentsTasksFixedResultInfo**(`data`?): [`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

Defined in: main.ts:73651

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:73636

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:73644

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:73647

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:73641

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:73629

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:73631

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:73634

type of search engine
can take the following values: video_comments

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:73638

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:73660

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:73684

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

Defined in: main.ts:73677

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)
