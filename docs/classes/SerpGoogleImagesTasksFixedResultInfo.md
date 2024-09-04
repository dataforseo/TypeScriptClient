[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleImagesTasksFixedResultInfo

# Class: SerpGoogleImagesTasksFixedResultInfo

## Implements

- [`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTasksFixedResultInfo()

> **new SerpGoogleImagesTasksFixedResultInfo**(`data`?): [`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

#### Defined in

main.ts:47348

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:47333

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:47341

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:47344

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:47338

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#id)

#### Defined in

main.ts:47326

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#se)

#### Defined in

main.ts:47328

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: images

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:47331

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleImagesTasksFixedResultInfo`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleImagesTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:47335

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:47357

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:47381

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesTasksFixedResultInfo`](SerpGoogleImagesTasksFixedResultInfo.md)

#### Defined in

main.ts:47374
