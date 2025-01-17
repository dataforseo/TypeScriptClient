[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordData

# Interface: IKeywordData

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Defined in

<<<<<<< HEAD
main.ts:102754
=======
main.ts:102787
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword?

> `optional` **keyword**: `string`

returned keyword

#### Defined in

<<<<<<< HEAD
main.ts:102740
=======
main.ts:102773
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

keyword data for the returned keyword

#### Defined in

<<<<<<< HEAD
main.ts:102746
=======
main.ts:102779
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

additional information about the keyword

#### Defined in

<<<<<<< HEAD
main.ts:102748
=======
main.ts:102781
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

<<<<<<< HEAD
main.ts:102744
=======
main.ts:102777
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

<<<<<<< HEAD
main.ts:102742
=======
main.ts:102775
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Defined in

<<<<<<< HEAD
main.ts:102738
=======
main.ts:102771
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Defined in

<<<<<<< HEAD
main.ts:102751
=======
main.ts:102784
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
