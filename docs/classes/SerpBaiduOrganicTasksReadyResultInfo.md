[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBaiduOrganicTasksReadyResultInfo

# Class: SerpBaiduOrganicTasksReadyResultInfo

## Implements

- [`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTasksReadyResultInfo()

> **new SerpBaiduOrganicTasksReadyResultInfo**(`data`?): [`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:69898

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:69883

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:69891

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:69894

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:69888

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#id)

#### Defined in

main.ts:69876

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#se)

#### Defined in

main.ts:69878

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: organic

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:69881

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResultInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpBaiduOrganicTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:69885

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:69907

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:69931

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTasksReadyResultInfo`](SerpBaiduOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:69924
