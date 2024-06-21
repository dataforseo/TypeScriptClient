**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HotelInfoPriceOffer

# Class: HotelInfoPriceOffer

featured price offers

## Implements

- [`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelInfoPriceOffer(data)

> **new HotelInfoPriceOffer**(`data`?): [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Parameters

• **data?**: [`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md)

#### Returns

[`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Source

main.ts:203077

## Properties

### currency?

> **`optional`** **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`currency`](../interfaces/IHotelInfoPriceOffer.md#currency)

#### Source

main.ts:203060

***

### free\_cancellation\_until?

> **`optional`** **free\_cancellation\_until**: `string`

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`free_cancellation_until`](../interfaces/IHotelInfoPriceOffer.md#free_cancellation_until)

#### Source

main.ts:203073

***

### max\_visitors?

> **`optional`** **max\_visitors**: `number`

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`max_visitors`](../interfaces/IHotelInfoPriceOffer.md#max_visitors)

#### Source

main.ts:203066

***

### offer\_images?

> **`optional`** **offer\_images**: `string`[]

price offer images
URLs of the images featured in the price offer

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`offer_images`](../interfaces/IHotelInfoPriceOffer.md#offer_images)

#### Source

main.ts:203069

***

### price?

> **`optional`** **price**: `number`

price per night

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`price`](../interfaces/IHotelInfoPriceOffer.md#price)

#### Source

main.ts:203057

***

### title?

> **`optional`** **title**: `string`

title of the hotel

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`title`](../interfaces/IHotelInfoPriceOffer.md#title)

#### Source

main.ts:203055

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`type`](../interfaces/IHotelInfoPriceOffer.md#type)

#### Source

main.ts:203053

***

### url?

> **`optional`** **url**: `string`

url of the price offer
URL to the page of the website where price offer appears

#### Implementation of

[`IHotelInfoPriceOffer`](../interfaces/IHotelInfoPriceOffer.md).[`url`](../interfaces/IHotelInfoPriceOffer.md#url)

#### Source

main.ts:203063

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:203086

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:203114

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)

#### Source

main.ts:203107
