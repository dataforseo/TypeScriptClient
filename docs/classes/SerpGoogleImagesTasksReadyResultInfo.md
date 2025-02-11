[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTasksReadyResultInfo

# Class: SerpGoogleImagesTasksReadyResultInfo

Defined in: main.ts:50321

## Implements

- [`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTasksReadyResultInfo()

> **new SerpGoogleImagesTasksReadyResultInfo**(`data`?): [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

Defined in: main.ts:50346

#### Parameters

##### data?

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:50331

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:50339

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:50342

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:50336

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:50324

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:50326

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:50329

type of search engine
example: images

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:50333

user-defined task identifier

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:50355

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:50379

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

Defined in: main.ts:50372

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)
