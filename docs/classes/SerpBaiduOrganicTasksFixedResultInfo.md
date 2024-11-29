[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTasksFixedResultInfo

# Class: SerpBaiduOrganicTasksFixedResultInfo

## Implements

- [`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTasksFixedResultInfo()

> **new SerpBaiduOrganicTasksFixedResultInfo**(`data`?): [`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Parameters

##### data?

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:79561

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:79546

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:79554

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:79557

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:79551

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:79539

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:79541

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:79544

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:79548

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:79570

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:79594

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:79587
