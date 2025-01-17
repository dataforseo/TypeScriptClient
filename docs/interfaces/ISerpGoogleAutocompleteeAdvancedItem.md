[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpGoogleAutocompleteeAdvancedItem

# Interface: ISerpGoogleAutocompleteeAdvancedItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### highlighted?

> `optional` **highlighted**: `string`[]

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

#### Defined in

<<<<<<< HEAD
main.ts:52355
=======
main.ts:52388
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

<<<<<<< HEAD
main.ts:52326
=======
main.ts:52359
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

<<<<<<< HEAD
main.ts:52323
=======
main.ts:52356
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

#### Defined in

<<<<<<< HEAD
main.ts:52333
=======
main.ts:52366
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### search\_query\_url?

> `optional` **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Defined in

<<<<<<< HEAD
main.ts:52342
=======
main.ts:52375
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### suggestion?

> `optional` **suggestion**: `string`

google autocomplete keyword suggestion

#### Defined in

<<<<<<< HEAD
main.ts:52335
=======
main.ts:52368
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### suggestion\_type?

> `optional` **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Defined in

<<<<<<< HEAD
main.ts:52339
=======
main.ts:52372
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Defined in

<<<<<<< HEAD
main.ts:52348
=======
main.ts:52381
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

<<<<<<< HEAD
main.ts:52319
=======
main.ts:52352
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
