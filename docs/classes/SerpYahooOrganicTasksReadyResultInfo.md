**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksReadyResultInfo

# Class: SerpYahooOrganicTasksReadyResultInfo

## Implements

- [`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksReadyResultInfo(data)

> **new SerpYahooOrganicTasksReadyResultInfo**(`data`?): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md)

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Source

main.ts:65718

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:65703

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:65711

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:65714

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:65708

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#id)

#### Source

main.ts:65696

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se)

#### Source

main.ts:65698

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#se_type)

#### Source

main.ts:65701

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYahooOrganicTasksReadyResultInfo`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYahooOrganicTasksReadyResultInfo.md#tag)

#### Source

main.ts:65705

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:65727

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:65751

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicTasksReadyResultInfo`](SerpYahooOrganicTasksReadyResultInfo.md)

#### Source

main.ts:65744
