[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleMapsTasksFixedResultInfo

# Class: SerpGoogleMapsTasksFixedResultInfo

## Implements

- [`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTasksFixedResultInfo()

> **new SerpGoogleMapsTasksFixedResultInfo**(`data`?): [`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Defined in

main.ts:39384

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:39369

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:39377

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:39380

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:39374

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#id)

#### Defined in

main.ts:39362

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#se)

#### Defined in

main.ts:39364

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: maps

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:39367

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:39371

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:39393

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:39417

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsTasksFixedResultInfo`](SerpGoogleMapsTasksFixedResultInfo.md)

#### Defined in

main.ts:39410
