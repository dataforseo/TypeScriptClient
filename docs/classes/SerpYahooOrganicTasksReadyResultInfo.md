[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYahooOrganicTasksReadyResultInfo

# Class: SerpYahooOrganicTasksReadyResultInfo

## Implements

- [`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksReadyResultInfo()

> **new SerpYahooOrganicTasksReadyResultInfo**(`data`?): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:67061

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:67046

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:67054

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:67057

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:67051

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#id)

#### Defined in

main.ts:67039

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se)

#### Defined in

main.ts:67041

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: organic

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:67044

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:67048

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:67070

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:67094

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Defined in

main.ts:67087
