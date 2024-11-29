[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksFixedResultInfo

# Class: SerpYahooOrganicTasksFixedResultInfo

## Implements

- [`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksFixedResultInfo()

> **new SerpYahooOrganicTasksFixedResultInfo**(`data`?): [`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Parameters

##### data?

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:75857

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:75842

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:75850

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:75853

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:75847

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#id)

#### Defined in

main.ts:75835

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#se)

#### Defined in

main.ts:75837

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:75840

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:75844

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:75866

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:75890

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Defined in

main.ts:75883
