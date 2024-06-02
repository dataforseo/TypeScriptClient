**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTasksFixedResultInfo

# Class: SerpGoogleOrganicTasksFixedResultInfo

## Implements

- [`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTasksFixedResultInfo(data)

> **new SerpGoogleOrganicTasksFixedResultInfo**(`data`?): [`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Source

main.ts:25723

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:25708

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:25716

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:25719

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:25713

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#id)

#### Source

main.ts:25701

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#se)

#### Source

main.ts:25703

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#se_type)

#### Source

main.ts:25706

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#tag)

#### Source

main.ts:25710

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:25732

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:25756

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicTasksFixedResultInfo`](SerpGoogleOrganicTasksFixedResultInfo.md)

#### Source

main.ts:25749
