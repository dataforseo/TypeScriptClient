[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AutocompleteSerpElementItem

# Class: AutocompleteSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AutocompleteSerpElementItem()

> **new AutocompleteSerpElementItem**(`data`?): [`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Parameters

• **data?**: [`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md)

#### Returns

[`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:53799

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### highlighted?

> `optional` **highlighted**: `string`[]

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`highlighted`](../interfaces/IAutocompleteSerpElementItem.md#highlighted)

#### Defined in

main.ts:53795

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`rank_absolute`](../interfaces/IAutocompleteSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:53766

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`rank_group`](../interfaces/IAutocompleteSerpElementItem.md#rank_group)

#### Defined in

main.ts:53763

***

### relevance?

> `optional` **relevance**: `number`

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`relevance`](../interfaces/IAutocompleteSerpElementItem.md#relevance)

#### Defined in

main.ts:53773

***

### search\_query\_url?

> `optional` **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`search_query_url`](../interfaces/IAutocompleteSerpElementItem.md#search_query_url)

#### Defined in

main.ts:53782

***

### suggestion?

> `optional` **suggestion**: `string`

google autocomplete keyword suggestion

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`suggestion`](../interfaces/IAutocompleteSerpElementItem.md#suggestion)

#### Defined in

main.ts:53775

***

### suggestion\_type?

> `optional` **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`suggestion_type`](../interfaces/IAutocompleteSerpElementItem.md#suggestion_type)

#### Defined in

main.ts:53779

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`thumbnail_url`](../interfaces/IAutocompleteSerpElementItem.md#thumbnail_url)

#### Defined in

main.ts:53788

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:53804

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:53833

***

### fromJS()

> `static` **fromJS**(`data`): [`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:53826
