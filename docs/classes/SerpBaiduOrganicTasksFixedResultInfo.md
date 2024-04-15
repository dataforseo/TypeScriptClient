**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTasksFixedResultInfo

# Class: SerpBaiduOrganicTasksFixedResultInfo

## Implements

- [`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTasksFixedResultInfo(data)

> **new SerpBaiduOrganicTasksFixedResultInfo**(`data`?): [`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Source

main.ts:68802

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:68787

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:68795

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:68798

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:68792

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#id)

#### Source

main.ts:68780

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#se)

#### Source

main.ts:68782

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#se_type)

#### Source

main.ts:68785

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#tag)

#### Source

main.ts:68789

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:68811

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:68835

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTasksFixedResultInfo`](SerpBaiduOrganicTasksFixedResultInfo.md)

#### Source

main.ts:68828
