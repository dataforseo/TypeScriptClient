[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleImageImagesSearchSerpElementItem

# Class: GoogleImageImagesSearchSerpElementItem

## Extends

- [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

## Implements

- [`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleImageImagesSearchSerpElementItem()

> **new GoogleImageImagesSearchSerpElementItem**(`data`?): [`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md)

#### Returns

[`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`constructor`](BaseGoogleImagesSerpElementItem.md#constructors)

#### Defined in

main.ts:47714

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`_discriminator`](BaseGoogleImagesSerpElementItem.md#_discriminator)

#### Defined in

main.ts:47548

***

### alt?

> `optional` **alt**: `string`

the alt tag of the image

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`alt`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#alt)

#### Defined in

main.ts:47704

***

### encoded\_url?

> `optional` **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`encoded_url`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#encoded_url)

#### Defined in

main.ts:47710

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_absolute`](BaseGoogleImagesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:47544

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`rank_group`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_group`](BaseGoogleImagesSerpElementItem.md#rank_group)

#### Defined in

main.ts:47541

***

### source\_url?

> `optional` **source\_url**: `string`

the URL of the source image

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`source_url`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#source_url)

#### Defined in

main.ts:47708

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the result in SERP

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`subtitle`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#subtitle)

#### Defined in

main.ts:47702

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`title`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#title)

#### Defined in

main.ts:47700

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`type`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`type`](BaseGoogleImagesSerpElementItem.md#type)

#### Defined in

main.ts:47537

***

### url?

> `optional` **url**: `string`

the URL of the page where the image is hosted

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`url`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#url)

#### Defined in

main.ts:47706

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`xpath`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`xpath`](BaseGoogleImagesSerpElementItem.md#xpath)

#### Defined in

main.ts:47546

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`init`](BaseGoogleImagesSerpElementItem.md#init)

#### Defined in

main.ts:47719

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`toJSON`](BaseGoogleImagesSerpElementItem.md#tojson)

#### Defined in

main.ts:47742

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`fromJS`](BaseGoogleImagesSerpElementItem.md#fromjs)

#### Defined in

main.ts:47735
