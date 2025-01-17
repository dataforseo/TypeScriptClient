[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGooglePageIntersectionLiveItem

# Interface: IDataforseoLabsGooglePageIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:100552
=======
main.ts:100585
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

keyword data for the returned keyword

#### Defined in

<<<<<<< HEAD
main.ts:100548
=======
main.ts:100581
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

<<<<<<< HEAD
main.ts:100546
=======
main.ts:100579
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
