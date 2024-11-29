[**Documentation**](../README.md)

***

[Documentation](../README.md) / ImagesDataforseoLabsSerpElementItem

# Class: ImagesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImagesDataforseoLabsSerpElementItem()

> **new ImagesDataforseoLabsSerpElementItem**(`data`?): [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md)

#### Returns

[`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:106447

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: [`ImagesElement`](ImagesElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:106440

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### related\_image\_searches?

> `optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

contains keywords and images related to the specified search term
if there are none, equals null

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`related_image_searches`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#related_image_searches)

#### Defined in

main.ts:106443

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:106434

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:106436

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:106438

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:106452

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:106478

***

### fromJS()

> `static` **fromJS**(`data`): [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:106471
