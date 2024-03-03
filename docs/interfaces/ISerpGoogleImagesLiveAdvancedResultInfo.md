[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleImagesLiveAdvancedResultInfo

# Interface: ISerpGoogleImagesLiveAdvancedResultInfo

## Implemented by

- [`SerpGoogleImagesLiveAdvancedResultInfo`](../classes/SerpGoogleImagesLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleImagesLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleImagesLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleImagesLiveAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleImagesLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleImagesLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleImagesLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleImagesLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleImagesLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleImagesLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleImagesLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleImagesLiveAdvancedResultInfo.md#spell)
- [type](ISerpGoogleImagesLiveAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:46942

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:46947

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Defined in

main.ts:46955

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

contains keywords and images related to the specified search term

#### Defined in

main.ts:46961

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:46959

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:46931

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:46939

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:46937

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:46935

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:46957

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:46950

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:46933
