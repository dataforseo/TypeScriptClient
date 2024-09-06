[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYoutubeVideoInfoTasksFixedResultInfo

# Class: SerpYoutubeVideoInfoTasksFixedResultInfo

## Implements

- [`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTasksFixedResultInfo()

> **new SerpYoutubeVideoInfoTasksFixedResultInfo**(`data`?): [`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Defined in

main.ts:61884

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:61869

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:61877

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:61880

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:61874

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#id)

#### Defined in

main.ts:61862

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#se)

#### Defined in

main.ts:61864

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: video_info

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:61867

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:61871

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:61893

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:61917

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Defined in

main.ts:61910
