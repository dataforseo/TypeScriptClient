**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new AutocompleteSerpElementItem(data)

> **new AutocompleteSerpElementItem**(`data`?): [`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Parameters

• **data?**: [`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md)

#### Returns

[`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:52666

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19817

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`highlighted`](../interfaces/IAutocompleteSerpElementItem.md#highlighted)

#### Source

main.ts:52662

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`rank_absolute`](../interfaces/IAutocompleteSerpElementItem.md#rank_absolute)

#### Source

main.ts:52633

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`rank_group`](../interfaces/IAutocompleteSerpElementItem.md#rank_group)

#### Source

main.ts:52630

***

### relevance?

> **`optional`** **relevance**: `number`

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`relevance`](../interfaces/IAutocompleteSerpElementItem.md#relevance)

#### Source

main.ts:52640

***

### search\_query\_url?

> **`optional`** **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`search_query_url`](../interfaces/IAutocompleteSerpElementItem.md#search_query_url)

#### Source

main.ts:52649

***

### suggestion?

> **`optional`** **suggestion**: `string`

google autocomplete keyword suggestion

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`suggestion`](../interfaces/IAutocompleteSerpElementItem.md#suggestion)

#### Source

main.ts:52642

***

### suggestion\_type?

> **`optional`** **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`suggestion_type`](../interfaces/IAutocompleteSerpElementItem.md#suggestion_type)

#### Source

main.ts:52646

***

### thumbnail\_url?

> **`optional`** **thumbnail\_url**: `string`

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Implementation of

[`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md).[`thumbnail_url`](../interfaces/IAutocompleteSerpElementItem.md#thumbnail_url)

#### Source

main.ts:52655

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:52671

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:52700

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:52693
