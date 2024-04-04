**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

# Interface: IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about?

> **`optional`** **about**: [`HotelAboutInfo`](../classes/HotelAboutInfo.md)

information about the hotel

#### Source

main.ts:201647

***

### address?

> **`optional`** **address**: `string`

hotel address
physical address of the hotel

#### Source

main.ts:201642

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:201625

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:201630

***

### hotel\_identifier?

> **`optional`** **hotel\_identifier**: `string`

unique hotel identifier
this field will contain the hotel_identifier parameter;
example:
CgoI-KWyzenM_MV3EAE

#### Source

main.ts:201618

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:201622

***

### location?

> **`optional`** **location**: [`HotelLocationInfo`](../classes/HotelLocationInfo.md)

information about the hotel location
information about the location where the hotel is located

#### Source

main.ts:201650

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:201620

***

### overview\_images?

> **`optional`** **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Source

main.ts:201656

***

### phone?

> **`optional`** **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Source

main.ts:201645

***

### prices?

> **`optional`** **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Source

main.ts:201659

***

### reviews?

> **`optional`** **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Source

main.ts:201653

***

### stars?

> **`optional`** **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Source

main.ts:201636

***

### stars\_description?

> **`optional`** **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Source

main.ts:201639

***

### title?

> **`optional`** **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Source

main.ts:201633
