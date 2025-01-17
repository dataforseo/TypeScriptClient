[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksFixedResultInfo

# Class: SerpGoogleSearchByImageTasksFixedResultInfo

Defined in: main.ts:53178

## Implements

- [`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTasksFixedResultInfo()

> **new SerpGoogleSearchByImageTasksFixedResultInfo**(`data`?): [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

Defined in: main.ts:53203

#### Parameters

##### data?

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:53188

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:53196

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:53199

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:53193

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:53181

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:53183

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:53186

type of search engine
can take the following values: search_by_image

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:53190

user-defined task identifier

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:53212

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:53236

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)

Defined in: main.ts:53229

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleSearchByImageTasksFixedResultInfo`](SerpGoogleSearchByImageTasksFixedResultInfo.md)
