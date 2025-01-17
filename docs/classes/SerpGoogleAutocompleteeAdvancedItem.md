[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleAutocompleteeAdvancedItem

# Class: SerpGoogleAutocompleteeAdvancedItem

## Implements

- [`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteeAdvancedItem()

> **new SerpGoogleAutocompleteeAdvancedItem**(`data`?): [`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md)

#### Returns

[`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:52256
=======
main.ts:52289
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### highlighted?

> `optional` **highlighted**: `string`[]

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`highlighted`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#highlighted)

#### Defined in

<<<<<<< HEAD
main.ts:52252
=======
main.ts:52285
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#rank_absolute)

#### Defined in

<<<<<<< HEAD
main.ts:52223
=======
main.ts:52256
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#rank_group)

#### Defined in

<<<<<<< HEAD
main.ts:52220
=======
main.ts:52253
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`relevance`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#relevance)

#### Defined in

<<<<<<< HEAD
main.ts:52230
=======
main.ts:52263
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### search\_query\_url?

> `optional` **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`search_query_url`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#search_query_url)

#### Defined in

<<<<<<< HEAD
main.ts:52239
=======
main.ts:52272
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### suggestion?

> `optional` **suggestion**: `string`

google autocomplete keyword suggestion

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`suggestion`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#suggestion)

#### Defined in

<<<<<<< HEAD
main.ts:52232
=======
main.ts:52265
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### suggestion\_type?

> `optional` **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`suggestion_type`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#suggestion_type)

#### Defined in

<<<<<<< HEAD
main.ts:52236
=======
main.ts:52269
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`thumbnail_url`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#thumbnail_url)

#### Defined in

<<<<<<< HEAD
main.ts:52245
=======
main.ts:52278
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`type`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#type)

#### Defined in

<<<<<<< HEAD
main.ts:52216
=======
main.ts:52249
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
main.ts:52265
=======
main.ts:52298
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
main.ts:52294
=======
main.ts:52327
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:52287
=======
main.ts:52320
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
