[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTasksFixedResultInfo

# Class: SerpGoogleImagesTasksFixedResultInfo

Defined in: main.ts:50533

## Implements

- [`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTasksFixedResultInfo()

> **new SerpGoogleImagesTasksFixedResultInfo**(`data`?): [`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

Defined in: main.ts:50558

#### Parameters

##### data?

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:50543

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:50551

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:50554

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:50548

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:50536

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:50538

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:50541

type of search engine
can take the following values: images

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:50545

user-defined task identifier

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:50567

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:50591

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

Defined in: main.ts:50584

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)
