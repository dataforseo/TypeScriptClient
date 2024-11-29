[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersTasksReadyResultInfo

# Class: SerpGoogleAdsAdvertisersTasksReadyResultInfo

## Implements

- [`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersTasksReadyResultInfo()

> **new SerpGoogleAdsAdvertisersTasksReadyResultInfo**(`data`?): [`SerpGoogleAdsAdvertisersTasksReadyResultInfo`](SerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersTasksReadyResultInfo`](SerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

#### Defined in

main.ts:60705

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:60690

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:60698

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:60701

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:60695

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#id)

#### Defined in

main.ts:60683

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#se)

#### Defined in

main.ts:60685

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: ads_advertisers

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:60688

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:60692

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:60714

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:60738

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersTasksReadyResultInfo`](SerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersTasksReadyResultInfo`](SerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

#### Defined in

main.ts:60731
