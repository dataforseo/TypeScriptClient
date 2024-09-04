[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleOrganicTasksReadyResultInfo

# Class: SerpGoogleOrganicTasksReadyResultInfo

## Implements

- [`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTasksReadyResultInfo()

> **new SerpGoogleOrganicTasksReadyResultInfo**(`data`?): [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:26388

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:26373

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:26381

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:26384

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:26378

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#id)

#### Defined in

main.ts:26366

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se)

#### Defined in

main.ts:26368

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: organic

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:26371

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:26375

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:26397

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:26421

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicTasksReadyResultInfo`](SerpGoogleOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:26414
