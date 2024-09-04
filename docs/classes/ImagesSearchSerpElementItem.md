[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ImagesSearchSerpElementItem

# Class: ImagesSearchSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImagesSearchSerpElementItem()

> **new ImagesSearchSerpElementItem**(`data`?): [`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md)

#### Returns

[`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:49328

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### alt?

> `optional` **alt**: `string`

the alt tag of the image

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`alt`](../interfaces/IImagesSearchSerpElementItem.md#alt)

#### Defined in

main.ts:49318

***

### encoded\_url?

> `optional` **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`encoded_url`](../interfaces/IImagesSearchSerpElementItem.md#encoded_url)

#### Defined in

main.ts:49324

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IImagesSearchSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:49310

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`rank_group`](../interfaces/IImagesSearchSerpElementItem.md#rank_group)

#### Defined in

main.ts:49307

***

### source\_url?

> `optional` **source\_url**: `string`

the URL of the source image

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`source_url`](../interfaces/IImagesSearchSerpElementItem.md#source_url)

#### Defined in

main.ts:49322

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the result in SERP

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`subtitle`](../interfaces/IImagesSearchSerpElementItem.md#subtitle)

#### Defined in

main.ts:49316

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`title`](../interfaces/IImagesSearchSerpElementItem.md#title)

#### Defined in

main.ts:49314

***

### url?

> `optional` **url**: `string`

the URL of the page where the image is hosted

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`url`](../interfaces/IImagesSearchSerpElementItem.md#url)

#### Defined in

main.ts:49320

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`xpath`](../interfaces/IImagesSearchSerpElementItem.md#xpath)

#### Defined in

main.ts:49312

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:49333

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:49359

***

### fromJS()

> `static` **fromJS**(`data`): [`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:49352
