[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTasksFixedResultInfo

# Class: SerpSeznamOrganicTasksFixedResultInfo

Defined in: main.ts:83400

## Implements

- [`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTasksFixedResultInfo()

> **new SerpSeznamOrganicTasksFixedResultInfo**(`data`?): [`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

Defined in: main.ts:83425

#### Parameters

##### data?

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:83410

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:83418

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:83421

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:83415

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:83403

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:83405

search engine specified when setting the task

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:83408

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:83412

user-defined task identifier

#### Implementation of

[`ISerpSeznamOrganicTasksFixedResultInfo`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpSeznamOrganicTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:83434

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:83458

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)

Defined in: main.ts:83451

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTasksFixedResultInfo`](SerpSeznamOrganicTasksFixedResultInfo.md)
