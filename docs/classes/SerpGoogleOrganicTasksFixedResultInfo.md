[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTasksFixedResultInfo

# Class: SerpGoogleOrganicTasksFixedResultInfo

## Implements

- [`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTasksFixedResultInfo()

> **new SerpGoogleOrganicTasksFixedResultInfo**(`data`?): [`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:28370

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:28355

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:28363

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:28366

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:28360

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:28348

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:28350

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:28353

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:28357

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:28379

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:28403

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:28396
