**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksFixedResultInfo

# Class: SerpYahooOrganicTasksFixedResultInfo

## Implements

- [`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksFixedResultInfo(data)

> **new SerpYahooOrganicTasksFixedResultInfo**(`data`?): [`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md)

#### Returns

[`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Source

main.ts:67000

## Properties

### date\_fixed?

> **`optional`** **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#date_fixed)

#### Source

main.ts:66985

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_advanced)

#### Source

main.ts:66993

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_html)

#### Source

main.ts:66996

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_regular)

#### Source

main.ts:66990

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#id)

#### Source

main.ts:66978

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#se)

#### Source

main.ts:66980

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#se_type)

#### Source

main.ts:66983

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#tag)

#### Source

main.ts:66987

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:67009

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:67033

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicTasksFixedResultInfo`](SerpYahooOrganicTasksFixedResultInfo.md)

#### Source

main.ts:67026
