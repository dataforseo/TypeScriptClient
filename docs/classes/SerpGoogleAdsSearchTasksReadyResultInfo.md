[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTasksReadyResultInfo

# Class: SerpGoogleAdsSearchTasksReadyResultInfo

Defined in: main.ts:62145

## Implements

- [`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTasksReadyResultInfo()

> **new SerpGoogleAdsSearchTasksReadyResultInfo**(`data`?): [`SerpGoogleAdsSearchTasksReadyResultInfo`](SerpGoogleAdsSearchTasksReadyResultInfo.md)

Defined in: main.ts:62170

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleAdsSearchTasksReadyResultInfo`](SerpGoogleAdsSearchTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:62155

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:62163

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:62166

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:62160

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:62148

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:62150

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:62153

type of search engine
example: ads_search

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:62157

user-defined task identifier

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:62179

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:62203

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTasksReadyResultInfo`](SerpGoogleAdsSearchTasksReadyResultInfo.md)

Defined in: main.ts:62196

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTasksReadyResultInfo`](SerpGoogleAdsSearchTasksReadyResultInfo.md)
