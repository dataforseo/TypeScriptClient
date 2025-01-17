[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersTasksReadyResultInfo

# Class: SerpGoogleAdsAdvertisersTasksReadyResultInfo

Defined in: main.ts:60680

## Implements

- [`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersTasksReadyResultInfo()

> **new SerpGoogleAdsAdvertisersTasksReadyResultInfo**(`data`?): [`SerpGoogleAdsAdvertisersTasksReadyResultInfo`](SerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

Defined in: main.ts:60705

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersTasksReadyResultInfo`](SerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:60690

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:60698

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:60701

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:60695

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:60683

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:60685

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:60688

type of search engine
example: ads_advertisers

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:60692

user-defined task identifier

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60714

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:60738

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersTasksReadyResultInfo`](SerpGoogleAdsAdvertisersTasksReadyResultInfo.md)

Defined in: main.ts:60731

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersTasksReadyResultInfo`](SerpGoogleAdsAdvertisersTasksReadyResultInfo.md)
