**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ImagesSearchSerpElementItem

# Class: ImagesSearchSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImagesSearchSerpElementItem(data)

> **new ImagesSearchSerpElementItem**(`data`?): [`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md)

#### Returns

[`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:48341

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### alt?

> **`optional`** **alt**: `string`

the alt tag of the image

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`alt`](../interfaces/IImagesSearchSerpElementItem.md#alt)

#### Source

main.ts:48331

***

### encoded\_url?

> **`optional`** **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`encoded_url`](../interfaces/IImagesSearchSerpElementItem.md#encoded_url)

#### Source

main.ts:48337

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IImagesSearchSerpElementItem.md#rank_absolute)

#### Source

main.ts:48323

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`rank_group`](../interfaces/IImagesSearchSerpElementItem.md#rank_group)

#### Source

main.ts:48320

***

### source\_url?

> **`optional`** **source\_url**: `string`

the URL of the source image

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`source_url`](../interfaces/IImagesSearchSerpElementItem.md#source_url)

#### Source

main.ts:48335

***

### subtitle?

> **`optional`** **subtitle**: `string`

subtitle of the result in SERP

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`subtitle`](../interfaces/IImagesSearchSerpElementItem.md#subtitle)

#### Source

main.ts:48329

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`title`](../interfaces/IImagesSearchSerpElementItem.md#title)

#### Source

main.ts:48327

***

### url?

> **`optional`** **url**: `string`

the URL of the page where the image is hosted

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`url`](../interfaces/IImagesSearchSerpElementItem.md#url)

#### Source

main.ts:48333

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md).[`xpath`](../interfaces/IImagesSearchSerpElementItem.md#xpath)

#### Source

main.ts:48325

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:48346

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:48372

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:48365
