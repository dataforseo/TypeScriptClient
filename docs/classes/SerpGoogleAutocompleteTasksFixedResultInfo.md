[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleAutocompleteTasksFixedResultInfo

# Class: SerpGoogleAutocompleteTasksFixedResultInfo

## Implements

- [`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTasksFixedResultInfo()

> **new SerpGoogleAutocompleteTasksFixedResultInfo**(`data`?): [`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Defined in

main.ts:53572

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:53557

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:53565

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:53568

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:53562

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#id)

#### Defined in

main.ts:53550

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#se)

#### Defined in

main.ts:53552

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:53555

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleAutocompleteTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:53559

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:53581

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:53605

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)

#### Defined in

main.ts:53598
