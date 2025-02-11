[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTasksReadyResultInfo

# Class: SerpBaiduOrganicTasksReadyResultInfo

Defined in: main.ts:79360

## Implements

- [`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTasksReadyResultInfo()

> **new SerpBaiduOrganicTasksReadyResultInfo**(`data`?): [`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

Defined in: main.ts:79385

#### Parameters

##### data?

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:79370

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:79378

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:79381

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:79375

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:79363

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:79365

search engine specified when setting the task

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:79368

type of search engine
example: organic

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:79372

user-defined task identifier

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:79394

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:79418

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

Defined in: main.ts:79411

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)
