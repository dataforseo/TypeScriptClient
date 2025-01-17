[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTasksFixedResultInfo

# Class: SerpGoogleNewsTasksFixedResultInfo

Defined in: main.ts:45911

## Implements

- [`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTasksFixedResultInfo()

> **new SerpGoogleNewsTasksFixedResultInfo**(`data`?): [`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

Defined in: main.ts:45936

#### Parameters

##### data?

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:45921

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:45929

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:45932

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:45926

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:45914

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:45916

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:45919

type of search engine
can take the following values: news

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:45923

user-defined task identifier

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:45945

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:45969

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)

Defined in: main.ts:45962

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsTasksFixedResultInfo`](SerpGoogleNewsTasksFixedResultInfo.md)
