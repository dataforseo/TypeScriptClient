[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTasksReadyResultInfo

# Class: SerpGoogleAdsSearchTasksReadyResultInfo

## Implements

- [`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTasksReadyResultInfo()

> **new SerpGoogleAdsSearchTasksReadyResultInfo**(`data`?): [`SerpGoogleAdsSearchTasksReadyResultInfo`](SerpGoogleAdsSearchTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleAdsSearchTasksReadyResultInfo`](SerpGoogleAdsSearchTasksReadyResultInfo.md)

#### Defined in

main.ts:62142

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:62127

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:62135

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:62138

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:62132

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#id)

#### Defined in

main.ts:62120

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#se)

#### Defined in

main.ts:62122

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: ads_search

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:62125

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:62129

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:62151

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:62175

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTasksReadyResultInfo`](SerpGoogleAdsSearchTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTasksReadyResultInfo`](SerpGoogleAdsSearchTasksReadyResultInfo.md)

#### Defined in

main.ts:62168
