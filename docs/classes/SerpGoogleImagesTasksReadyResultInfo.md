[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleImagesTasksReadyResultInfo

# Class: SerpGoogleImagesTasksReadyResultInfo

## Implements

- [`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTasksReadyResultInfo()

> **new SerpGoogleImagesTasksReadyResultInfo**(`data`?): [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Defined in

main.ts:48904

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:48889

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:48897

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:48900

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:48894

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#id)

#### Defined in

main.ts:48882

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se)

#### Defined in

main.ts:48884

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: images

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:48887

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:48891

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:48913

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:48937

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Defined in

main.ts:48930
