[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTasksFixedResultInfo

# Class: SerpGoogleAutocompleteTasksFixedResultInfo

Defined in: main.ts:55744

## Implements

- [`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTasksFixedResultInfo()

> **new SerpGoogleAutocompleteTasksFixedResultInfo**(`data`?): [`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

Defined in: main.ts:55769

#### Parameters

##### data?

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:55754

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:55762

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:55765

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:55759

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:55747

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:55749

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:55752

type of search engine
can take the following values: autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:55756

user-defined task identifier

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:55778

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:55802

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

Defined in: main.ts:55795

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)
