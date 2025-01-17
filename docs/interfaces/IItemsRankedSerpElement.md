[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IItemsRankedSerpElement

# Interface: IItemsRankedSerpElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

<<<<<<< HEAD
main.ts:114525
=======
main.ts:114558
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

<<<<<<< HEAD
main.ts:114532
=======
main.ts:114565
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

#### Defined in

<<<<<<< HEAD
main.ts:114538
=======
main.ts:114571
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### se\_results\_count?

> `optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Defined in

<<<<<<< HEAD
main.ts:114527
=======
main.ts:114560
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

<<<<<<< HEAD
main.ts:114519
=======
main.ts:114552
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### serp\_item?

> `optional` **serp\_item**: [`AppDataAppStoreSearchOrganicSerpElementItem`](../classes/AppDataAppStoreSearchOrganicSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Defined in

<<<<<<< HEAD
main.ts:114522
=======
main.ts:114555
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
