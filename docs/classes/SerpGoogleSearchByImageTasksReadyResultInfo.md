**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksReadyResultInfo

# Class: SerpGoogleSearchByImageTasksReadyResultInfo

## Implements

- [`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTasksReadyResultInfo(data)

> **new SerpGoogleSearchByImageTasksReadyResultInfo**(`data`?): [`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Source

main.ts:49837

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:49822

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:49830

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:49833

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:49827

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#id)

#### Source

main.ts:49815

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#se)

#### Source

main.ts:49817

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#se_type)

#### Source

main.ts:49820

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#tag)

#### Source

main.ts:49824

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:49846

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:49870

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleSearchByImageTasksReadyResultInfo`](SerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Source

main.ts:49863
