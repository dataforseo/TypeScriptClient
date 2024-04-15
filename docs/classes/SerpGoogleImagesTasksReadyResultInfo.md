**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleImagesTasksReadyResultInfo

# Class: SerpGoogleImagesTasksReadyResultInfo

## Implements

- [`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTasksReadyResultInfo(data)

> **new SerpGoogleImagesTasksReadyResultInfo**(`data`?): [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Source

main.ts:46464

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:46449

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:46457

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:46460

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:46454

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#id)

#### Source

main.ts:46442

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se)

#### Source

main.ts:46444

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: images

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se_type)

#### Source

main.ts:46447

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#tag)

#### Source

main.ts:46451

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:46473

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:46497

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesTasksReadyResultInfo`](SerpGoogleImagesTasksReadyResultInfo.md)

#### Source

main.ts:46490
