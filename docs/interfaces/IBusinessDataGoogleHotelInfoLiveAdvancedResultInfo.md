[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo

# Interface: IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about?

> `optional` **about**: [`HotelAboutInfo`](../classes/HotelAboutInfo.md)

information about the hotel

#### Defined in

main.ts:207417

***

### address?

> `optional` **address**: `string`

hotel address
physical address of the hotel

#### Defined in

main.ts:207412

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:207395

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:207400

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

main.ts:207388

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:207392

***

### location?

> `optional` **location**: [`Location`](../classes/Location.md)

information about the hotel location
information about the location where the hotel is located

#### Defined in

main.ts:207420

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:207390

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Defined in

main.ts:207426

***

### phone?

> `optional` **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Defined in

main.ts:207415

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Defined in

main.ts:207429

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Defined in

main.ts:207423

***

### stars?

> `optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Defined in

main.ts:207406

***

### stars\_description?

> `optional` **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Defined in

main.ts:207409

***

### title?

> `optional` **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Defined in

main.ts:207403
