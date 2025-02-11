[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackTasksFixedResultInfo

# Class: SerpBingLocalPackTasksFixedResultInfo

Defined in: main.ts:67295

## Implements

- [`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTasksFixedResultInfo()

> **new SerpBingLocalPackTasksFixedResultInfo**(`data`?): [`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

Defined in: main.ts:67320

#### Parameters

##### data?

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md)

#### Returns

[`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:67305

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:67313

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:67316

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:67310

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:67298

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`id`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:67300

search engine specified when setting the task

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`se`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:67303

type of search engine
can take the following values: local_pack

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:67307

user-defined task identifier

#### Implementation of

[`ISerpBingLocalPackTasksFixedResultInfo`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpBingLocalPackTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:67329

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:67353

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)

Defined in: main.ts:67346

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)
