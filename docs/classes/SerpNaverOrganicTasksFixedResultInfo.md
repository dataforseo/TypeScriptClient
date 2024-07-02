**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpNaverOrganicTasksFixedResultInfo

# Class: SerpNaverOrganicTasksFixedResultInfo

## Implements

- [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTasksFixedResultInfo(data)

> **new SerpNaverOrganicTasksFixedResultInfo**(`data`?): [`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Source

main.ts:71767

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:71752

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:71760

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:71763

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:71757

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#id)

#### Source

main.ts:71745

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se)

#### Source

main.ts:71747

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se_type)

#### Source

main.ts:71750

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#tag)

#### Source

main.ts:71754

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:71776

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:71800

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpNaverOrganicTasksFixedResultInfo`](SerpNaverOrganicTasksFixedResultInfo.md)

#### Source

main.ts:71793
